// src/global.d.ts
interface ImportMetaEnv {
  readonly BASE_URL: string
  readonly MODE: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
  // + your custom vars like VITE_API_URL?: string
}
interface ImportMeta { readonly env: ImportMetaEnv }