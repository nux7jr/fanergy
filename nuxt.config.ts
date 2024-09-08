// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@vueuse/nuxt", "@pinia/nuxt", "@nuxt/icon"],
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
    icon: {
        size: '24px',
        provider: 'server',
        customCollections: [
          {
            prefix: 'fanergy',
            dir: './assets/icons/fanergy'
          },
        ],
      },
})

