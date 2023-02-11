export default defineNuxtConfig({
  app:{
  head:{
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
},
    css: ["vuetify/lib/styles/main.sass"],
    build: {
      transpile: ["vuetify"],
    },
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
    },
  });