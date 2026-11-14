export type AppEnv = "development" | "production";
export type ProjectsList = "dev" | "prod";

// Real environment, always follows the build mode: `npm run dev` -> development, `npm run build` -> production
export const APP_ENV: AppEnv = import.meta.env.PROD ? "production" : "development";

// Which project list to show. Independent of APP_ENV, so you can preview either list while developing.
// Defaults to the list that matches the environment.
export const PROJECTS_LIST: ProjectsList =
  import.meta.env.VITE_PROJECTS_LIST === "prod" || import.meta.env.VITE_PROJECTS_LIST === "dev"
    ? import.meta.env.VITE_PROJECTS_LIST
    : APP_ENV === "production"
      ? "prod"
      : "dev";
