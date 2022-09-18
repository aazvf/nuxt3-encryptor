// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    telemetry: false,
    ssr: true,
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
    baseURL: "http://mr-encryptor.s3-website-eu-west-1.amazonaws.com/",
    cdnURL: "http://mr-encryptor.s3-website-eu-west-1.amazonaws.com/",
});
