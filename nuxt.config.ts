export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-16",
			viewport: "width=device-width, initial-scale=1",
			title: "Innnit Template",
			meta: [
				{
					name: "description",
					content: "Innnit Template",
				},
			],
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
				},
			],
			script: [],
		},
	},
	vue: {
		compilerOptions: {
			isCustomElement: (tag: string) => ["grid", "content"].includes(tag),
		},
	},
	imports: { dirs: [`stores`] },
	// modules: [
	// 	"@vueuse/nuxt",
	// 	["@pinia/nuxt", { autoImports: ["defineStore", "storeToRefs"] }],
	// ],
	css: ["@/assets/sass/style.sass"],
	nitro: { preset: "firebase" },
	typescript: { shim: false },
	ssr: false,
});
