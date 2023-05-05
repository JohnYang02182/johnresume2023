/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_VUE_APP_I18N_LOCALE: string;
  VITE_VUE_APP_I18N_FALLBACK_LOCALE: string;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}