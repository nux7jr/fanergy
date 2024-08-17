// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: {
        enabled: true
    },
    modules: [
      "@vueuse/nuxt",
      "@nuxt/image",
      "@nuxtjs/tailwindcss",
      "@pinia/nuxt",
    ],
    imports: {
        dirs: [
            "composables",
            "composables/*/index.{ts,js,mjs,mts}",
            "composables/**"
        ]
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
    
})