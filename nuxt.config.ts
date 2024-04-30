// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      title: 'Premier League Scores',
      meta: [
        {
          name: 'description',
          content:
            'Check Premier League Scores and see how your favorite team performed',
        },
      ],
    },
  },
});
