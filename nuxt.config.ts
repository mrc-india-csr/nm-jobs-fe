export default defineNuxtConfig({
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
			},
		],
	],
	runtimeConfig: {
		public: {
			apiBaseUrl: "https://matheshkumar.pythonanywhere.com",
		}
	},
	alias: {
		pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
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