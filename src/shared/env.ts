export type AppEnv = "dev" | "prod";

// Main project environment, set with VITE_APP_ENV=dev|prod in .env (or in Vercel).
// dev: everything marked dev-only is on (new project list, <DevOnly> parts, dev badge).
// prod: all of that is switched off.
// Without the variable it follows the build mode: `npm run dev` -> dev, `npm run build` -> prod.
const resolveAppEnv = (): AppEnv => {
  const value = import.meta.env.VITE_APP_ENV;
  if (value === "dev" || value === "prod") return value;
  return import.meta.env.PROD ? "prod" : "dev";
};

export const APP_ENV = resolveAppEnv();
export const IS_DEV = APP_ENV === "dev";
