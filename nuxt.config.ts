// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@vueuse/nuxt", "@pinia/nuxt"],
    compatibilityDate: "2024-08-20",
    components: [
        {
            path: '~/app',
        },
        { 
            path: '~/app/shared/ui', 
            prefix: 'Fanergy'
        },
    ],
})