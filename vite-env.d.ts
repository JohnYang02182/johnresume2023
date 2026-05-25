/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_VUE_APP_I18N_LOCALE: string;
  VITE_VUE_APP_I18N_FALLBACK_LOCALE: string;
  VITE_GITHUB_OWNER: string;
  VITE_GITHUB_REPO: string;
  VITE_GITHUB_BRANCH: string;
  VITE_OPENAI_API_KEY: string;
  glob: <T>(pattern: string, options?: { eager: boolean }) => Record<string, T>;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}