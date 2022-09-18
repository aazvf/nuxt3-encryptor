// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: "static",
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
});
