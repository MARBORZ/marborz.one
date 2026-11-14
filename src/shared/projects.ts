import { PROJECTS_LIST } from "./env";
import { prodPlannedProjects, prodProjects } from "./projectsProd";

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
  repoUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
}

const devProjects: Project[] = [
  {
    id: "omioroom",
    number: "01",
    title: "OMIOROOM",
    stack: "React · TypeScript · Supabase · Realtime · WebRTC · Zod",
    status: "active",
    demoUrl: "https://www.omioroom.live/",
    repoUrl: "https://github.com/MARBORZ/omioroom",
  },
  {
    id: "lecture-studio",
    number: "02",
    title: "Lecture Studio",
    stack: "Python · FastAPI · Whisper · FFmpeg · React · Tailwind",
    status: "active",
    demoUrl: "https://github.com/MARBORZ/lecture-studio/releases",
    repoUrl: "https://github.com/MARBORZ/lecture-studio",
  },
  {
    id: "marborz",
    number: "03",
    title: "marborz.one",
    stack: "React · TypeScript · SCSS · Framer Motion · i18next",
    status: "active",
    demoUrl: "https://marborz.one/",
    repoUrl: "https://github.com/MARBORZ/marborz",
  },
  {
    id: "velnote",
    number: "04",
    title: "Velnote",
    stack: "React · TypeScript · Express · PostgreSQL · JWT",
    status: "shipped",
    demoUrl: "https://velnote-two.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/velnote",
  },
  {
    id: "maskin-anlegg",
    number: "05",
    title: "MK Maskin & Anlegg",
    stack: "Next.js · TypeScript · Motion · Embla · Resend",
    status: "active",
    demoUrl: "https://www.mkmaskin.no/",
    repoUrl: "https://github.com/MARBORZ/maskin-anlegg-as",
  },
  {
    id: "redbeardvfx",
    number: "06",
    title: "RedbeardVFX",
    stack: "React · TypeScript · SCSS · Vercel Functions · Resend",
    status: "shipped",
    demoUrl: "https://redbeardvfx.work",
    repoUrl: "https://github.com/MARBORZ/redbeardvfx",
    videoUrl: new URL("../assets/project_videos/redbeardvfx.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/redbeardvfx.webp", import.meta.url).href,
  },
  {
    id: "death-trip",
    number: "07",
    title: "Death Trip",
    stack: "React · TypeScript · Motion · Lenis · Express · Resend",
    status: "shipped",
    demoUrl: "https://death-trip-site.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/death-trip-site",
  },
  {
    id: "bio-site",
    number: "08",
    title: "marborz v1",
    stack: "React · Express · Resend · SCSS",
    status: "shipped",
    demoUrl: "https://marborzone.vercel.app/",
    repoUrl: "https://github.com/MARBORZ/marborz_v1",
  },
  {
    id: "greenfield-farms",
    number: "09",
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
    number: "10",
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
    number: "11",
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
    number: "12",
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
    number: "13",
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
    number: "14",
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
    number: "15",
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
    number: "16",
    title: "Date-Time Wallpaper",
    stack: "JavaScript · HTML · CSS",
    status: "experiment",
    demoUrl: "https://im25ama5104.imporsgrunn.no/Date-time/",
    repoUrl: "https://github.com/MARBORZ/date-time-ui",
    videoUrl: new URL("../assets/project_videos/date_time.mp4", import.meta.url).href,
    imageUrl: new URL("../assets/project_images/date_time.webp", import.meta.url).href,
  },
];

const devPlannedProjects: Project[] = [];

const DEMO_HOSTS = ["vercel.app", "imporsgrunn.no"];

// Live products get a plain "Open"; previews on temporary hosts are labeled as demos
export const isDemoLink = (project: Project) => {
  if (!project.demoUrl || project.status === "active") return false;
  const host = new URL(project.demoUrl).hostname;
  return DEMO_HOSTS.some((demoHost) => host.endsWith(demoHost));
};

const useProdList = PROJECTS_LIST === "prod";

export const projects = useProdList ? prodProjects : devProjects;
export const plannedProjects = useProdList ? prodPlannedProjects : devPlannedProjects;
export const allProjects = [...projects, ...plannedProjects];
