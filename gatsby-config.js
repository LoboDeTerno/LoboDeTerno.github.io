module.exports = {
    siteMetadata: {
        title: "Lobo de Terno",
    },
    plugins: [
        "gatsby-plugin-fontawesome-css",
        "gatsby-plugin-postcss",
        "gatsby-plugin-pnpm",
        "gatsby-plugin-typescript",
        "@chakra-ui/gatsby-plugin",
        "gatsby-plugin-netlify-cms",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "258458706",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/assets/images/icon.png",
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/assets/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: "./content/posts/",
            },
            __key: "posts",
        },
    ],
};
