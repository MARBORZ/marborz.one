import { IS_DEV } from "./env";

export type ProjectStatus = "active" | "shipped" | "experiment" | "planned";

export const PROJECT_FILTERS = [
  "all",
  "active",
  "shipped",
  "experiment",
] as const;
export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export interface Project {
  id: string;
  number: string;
  title: string;
  fullDescription?: string;
  stack: string;
  status: ProjectStatus;
  demoUrl?: string;
  // Backup link (e.g. the vercel.app deploy) used when demoUrl doesn't respond
  fallbackUrl?: string;
  // Placeholder shown only when VITE_APP_ENV is dev
  devOnly?: boolean;
  repoUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: "omioroom",
    number: "01",
    title: "OMIOROOM",
    stack: "React · TypeScript · Supabase · Realtime · WebRTC · Zod",
    status: "active",
    demoUrl: "https://www.omioroom.live/",
    repoUrl: "https://github.com/MARBORZ/omioroom",
    videoUrl: new URL("../assets/project_videos/omioroom.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/omioroom.webp", import.meta.url).href,
  },
  {
    id: "lecture-studio",
    number: "02",
    title: "Lecture Studio",
    stack: "Python · FastAPI · Whisper · FFmpeg · React · Tailwind",
    status: "active",
    demoUrl: "https://github.com/MARBORZ/lecture-studio/releases",
    repoUrl: "https://github.com/MARBORZ/lecture-studio",
    videoUrl: new URL("../assets/project_videos/lecture_studio.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/lecture_studio.webp", import.meta.url).href,
  },
  {
    id: "velnote",
    number: "03",
    title: "Velnote",
    stack: "React · TypeScript · Express · PostgreSQL · JWT",
    status: "shipped",
    demoUrl: "https://velnote-two.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/velnote",
    videoUrl: new URL("../assets/project_videos/velnote.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/velnote.webp", import.meta.url).href,
  },
  {
    id: "maskin-anlegg",
    number: "04",
    title: "MK Maskin & Anlegg",
    stack: "Next.js · TypeScript · Motion · Embla · Resend",
    status: "active",
    demoUrl: "https://www.mkmaskin.no/",
    fallbackUrl: "https://maskin-anlegg-as.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/maskin-anlegg-as",
    videoUrl: new URL("../assets/project_videos/maskin_anlegg.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/maskin_anlegg.webp", import.meta.url).href,
  },
  {
    id: "redbeardvfx",
    number: "05",
    title: "RedbeardVFX",
    stack: "React · TypeScript · SCSS · Vercel Functions · Resend",
    status: "shipped",
    demoUrl: "https://redbeardvfx.work",
    fallbackUrl: "https://redbeardvfx-site.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/redbeardvfx",
    videoUrl: new URL("../assets/project_videos/redbeardvfx.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/redbeardvfx.webp", import.meta.url).href,
  },
  {
    id: "death-trip",
    number: "06",
    title: "Death Trip",
    stack: "React · TypeScript · Motion · Lenis · Express · Resend",
    status: "shipped",
    demoUrl: "https://www.hdufndsk.site/",
    fallbackUrl: "https://death-trip-site.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/death-trip-site",
    videoUrl: new URL("../assets/project_videos/death_trip.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/death_trip.webp", import.meta.url).href,
  },
  {
    id: "bio-site",
    number: "07",
    title: "marborz v1",
    stack: "React · Express · Resend · SCSS",
    status: "shipped",
    demoUrl: "https://marborzone.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/marborz_v1",
    videoUrl: new URL("../assets/project_videos/marborz_v1.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/marborz_v1.webp", import.meta.url).href,
  },
  {
    id: "greenfield-farms",
    number: "08",
    title: "Greenfield Farms",
    stack: "React · TypeScript · SCSS · Framer Motion · React Router",
    status: "experiment",
    demoUrl: "https://greenfield-farms.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/greenfield-farms",
    videoUrl: new URL("../assets/project_videos/greenfield_farms.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/greenfield_farms.webp", import.meta.url).href,
  },
  {
    id: "skan-jus",
    number: "09",
    title: "Skan Jus",
    stack: "React · TypeScript · Tailwind",
    status: "experiment",
    demoUrl: "https://skan-jus.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/skan-jus",
    videoUrl: new URL("../assets/project_videos/skan_jus.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/skan_jus.webp", import.meta.url).href,
  },
  {
    id: "todo-react",
    number: "10",
    title: "Todo-React",
    stack: "React · json-server · localStorage",
    status: "experiment",
    demoUrl: "https://todo-react-ten-phi.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/todo-react",
    videoUrl: new URL("../assets/project_videos/todo.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/todo.webp", import.meta.url).href,
  },
  {
    id: "kropp-fitness",
    number: "11",
    title: "Kropp Fitness",
    stack: "HTML · CSS",
    status: "experiment",
    demoUrl: "https://kropp-fitness-layout.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/kropp-fitness-layout",
    videoUrl: new URL("../assets/project_videos/kroppfitness.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/kroppfitness.webp", import.meta.url).href,
  },
  {
    id: "skrekkeparken",
    number: "12",
    title: "Skrekkeparken",
    stack: "JavaScript · HTML · CSS · Leaflet.js",
    status: "shipped",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Skrekkeparken/",
    repoUrl: "https://github.com/MARBORZ/skrekkeparken",
    videoUrl: new URL("../assets/project_videos/skrekkeparken.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/skrekkeparken.webp", import.meta.url).href,
  },
  {
    id: "2048",
    number: "13",
    title: "2048 Game",
    stack: "JavaScript · HTML · CSS",
    status: "experiment",
    demoUrl: "https://im25ama5104.imporsgrunn.no/2048/index.html",
    repoUrl: "https://github.com/MARBORZ/2048",
    videoUrl: new URL("../assets/project_videos/2048.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/2048.webp", import.meta.url).href,
  },
  {
    id: "yatzy",
    number: "14",
    title: "Yatzy Dice Game",
    stack: "JavaScript · HTML · CSS",
    status: "experiment",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Yatzy/",
    repoUrl: "https://github.com/MARBORZ/yatzy",
    videoUrl: new URL("../assets/project_videos/yatzy.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/yatzy.webp", import.meta.url).href,
  },
  {
    id: "date-time",
    number: "15",
    title: "Date-Time Wallpaper",
    stack: "JavaScript · HTML · CSS",
    status: "experiment",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Date-time/",
    repoUrl: "https://github.com/MARBORZ/date-time-ui",
    videoUrl: new URL("../assets/project_videos/date_time.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/date_time.webp", import.meta.url).href,
  },
];

export const plannedProjects: Project[] = [
  {
    id: "moderation-bot",
    number: "16",
    title: "MAR Moderation Bot",
    stack: "Python · aiogram 3 · SQLite · DeepSeek · Next.js",
    status: "planned",
    devOnly: true,
  },
];

const DEMO_HOSTS = ["vercel.app", "imporsgrunn.no"];

// Live products get a plain "Open"; previews on temporary hosts are labeled as demos
export const isDemoLink = (project: Project, url = project.demoUrl) => {
  if (!url || project.status === "active") return false;
  const host = new URL(url).hostname;
  return DEMO_HOSTS.some((demoHost) => host.endsWith(demoHost));
};

export const allProjects = [...projects, ...plannedProjects].filter((project) => IS_DEV || !project.devOnly);
