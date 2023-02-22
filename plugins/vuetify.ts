import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})



// import Vue from 'vue'
// import Vuetify, {
//   VDataTable,
// } from 'vuetify/lib'

// Vue.use(Vuetify, {
//   components: {
//     VDataTable,
//   },
// })

// const opts = {}

// export default new Vuetify(opts)