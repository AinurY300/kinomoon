export default defineNuxtConfig({
	modules: [
		'nuxt-typed-router',
		'nuxt-api-party',
	],

	apiParty: {
		endpoints: {
			
		}
	},

	typescript: {
		strict: true
	},

	build: {
		transpile: ['vuetify'],
	},

	vite: {
		define: {
			'process.env.DEBUG': false,
		}
	},

	css: [
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
		'~~/assets/main.scss'
	],
})
