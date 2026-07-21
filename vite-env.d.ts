/// <reference types="vite/client" />

declare module 'markdown-it-task-lists' {
  import type MarkdownIt from 'markdown-it'
  function markdownItTaskLists(md: MarkdownIt, options?: {
    enabled?: boolean
    label?: boolean
    labelAfter?: boolean
  }): void
  export default markdownItTaskLists
}

interface ImportMetaEnv {
  VITE_VUE_APP_I18N_LOCALE: string;
  VITE_VUE_APP_I18N_FALLBACK_LOCALE: string;
  glob: <T>(pattern: string, options?: { eager: boolean }) => Record<string, T>;
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}