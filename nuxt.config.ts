// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: ['./css/index.css'],
  build: {
    transpile: ['@nordhealth/vue'],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-'),
    },
  },
});
