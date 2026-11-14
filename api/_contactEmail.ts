// HTML email for contact form messages, styled after the site's dark theme.
// Email clients ignore <style> blocks and CSS variables, so everything is inline and table-based.

export type ContactEmailInput = {
  name: string
  email: string
  message: string
  sentAt: Date
}

const SITE_URL = 'https://www.marborz.one'
const LOGO_URL = `${SITE_URL}/marborz-icon.png`

const COLOR = {
  bg: '#0e0e0d',
  card: '#151514',
  surface: '#1c1c1a',
  text: '#ecebe6',
  muted: '#92918b',
  border: '#2a2a28',
} as const

const FONT_SANS = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
const FONT_MONO = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const formatSentAt = (date: Date) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Oslo',
  })
    .format(date)
    .toUpperCase()

const label = (text: string) =>
  `<span style="font-family:${FONT_MONO};font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${COLOR.muted};">${text}</span>`

const detailRow = (key: string, valueHtml: string) => `
  <tr>
    <td style="padding:14px 0;border-top:1px solid ${COLOR.border};width:96px;vertical-align:top;">${label(key)}</td>
    <td style="padding:14px 0;border-top:1px solid ${COLOR.border};font-family:${FONT_SANS};font-size:15px;line-height:1.5;color:${COLOR.text};">${valueHtml}</td>
  </tr>`

export const renderContactEmail = ({ name, email, message, sentAt }: ContactEmailInput) => {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>')
  const replyHref = escapeHtml(`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Re: marborz.one')}`)

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>New message from ${safeName}</title>
</head>
<body style="margin:0;padding:0;background-color:${COLOR.bg};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(message.slice(0, 120))}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${COLOR.bg};">
  <tr>
    <td align="center" style="padding:40px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

        <tr>
          <td style="padding:0 4px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="vertical-align:middle;">
                  <a href="${SITE_URL}" style="text-decoration:none;">
                    <img src="${LOGO_URL}" width="36" height="36" alt="marborz" style="display:inline-block;vertical-align:middle;border:0;border-radius:8px;">
                    <span style="display:inline-block;vertical-align:middle;margin-left:10px;font-family:${FONT_MONO};font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${COLOR.text};">marborz.one</span>
                  </a>
                </td>
                <td align="right" style="vertical-align:middle;">${label('Contact form')}</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background-color:${COLOR.card};border:1px solid ${COLOR.border};border-radius:20px;padding:36px 32px;">
            ${label('— New message')}
            <h1 style="margin:14px 0 28px;font-family:${FONT_SANS};font-size:30px;line-height:1.15;font-weight:500;letter-spacing:-0.02em;color:${COLOR.text};">${safeName} wrote to you.</h1>

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              ${detailRow('From', safeName)}
              ${detailRow('Email', `<a href="mailto:${safeEmail}" style="color:${COLOR.text};text-decoration:underline;">${safeEmail}</a>`)}
              ${detailRow('Sent', `<span style="font-family:${FONT_MONO};font-size:13px;">${formatSentAt(sentAt)}</span>`)}
            </table>

            <div style="margin-top:24px;padding:22px 24px;background-color:${COLOR.surface};border-radius:14px;font-family:${FONT_SANS};font-size:16px;line-height:1.65;color:${COLOR.text};">${safeMessage}</div>

            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
              <tr>
                <td style="background-color:${COLOR.text};border-radius:999px;">
                  <a href="${replyHref}" style="display:inline-block;padding:13px 24px;font-family:${FONT_MONO};font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${COLOR.bg};text-decoration:none;">Reply to ${safeName} &#8599;</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 4px 0;">${label('Sent from the contact form on marborz.one')}</td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

export const renderContactText = ({ name, email, message, sentAt }: ContactEmailInput) =>
  `New message from ${name} <${email}>\nSent: ${formatSentAt(sentAt)}\n\n${message}\n\n— marborz.one contact form`
