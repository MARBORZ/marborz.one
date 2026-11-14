import nodemailer from 'nodemailer'
import { renderContactEmail, renderContactText } from './_contactEmail.js'

// Contact form handler (Vercel serverless function).
// Sends the message over Gmail SMTP straight to the inbox; no third-party mail API.
// Env: GMAIL_USER, GMAIL_APP_PASSWORD, optional CONTACT_TO (defaults to GMAIL_USER).

type ContactPayload = { name: string; email: string; message: string }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })

const parsePayload = (raw: unknown): ContactPayload | null => {
  if (typeof raw !== 'object' || raw === null) return null
  const { name, email, message } = raw as Record<string, unknown>
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') return null
  const payload = { name: name.trim(), email: email.trim(), message: message.trim() }
  if (payload.name.length < 2 || payload.name.length > 100) return null
  if (!EMAIL_PATTERN.test(payload.email) || payload.email.length > 200) return null
  if (payload.message.length < 10 || payload.message.length > 5000) return null
  return payload
}

export async function POST(request: Request) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO } = process.env
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) return json(500, { error: 'Mail is not configured' })

  const payload = parsePayload(await request.json().catch(() => null))
  if (!payload) return json(400, { error: 'Invalid input' })

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  })

  const emailInput = { ...payload, sentAt: new Date() }

  try {
    await transporter.sendMail({
      from: `marborz.one <${GMAIL_USER}>`,
      to: CONTACT_TO || GMAIL_USER,
      replyTo: `${payload.name.replace(/[<>"\r\n]/g, '')} <${payload.email}>`,
      subject: `marborz.one — message from ${payload.name.replace(/[\r\n]/g, ' ')}`,
      text: renderContactText(emailInput),
      html: renderContactEmail(emailInput),
    })
    return json(200, { ok: true })
  } catch {
    return json(502, { error: 'Failed to send' })
  }
}
