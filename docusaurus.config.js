// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

require('dotenv').config()
const customFields = {
    EMAILJS_SERVER_ID: process.env.EMAILJS_SERVER_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Free DOCS Starter',
    tagline: 'Powered by Docusaurus',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://docusaurus-soft-design.onrender.com/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'app-generator', // Usually your GitHub org/user name.
    projectName: 'docusaurus-soft-design', // Usually your repo name.
    trailingSlash: false, // for github pages compatibility

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    customFields: { ...customFields },

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    scripts: [
        {
            src: '//cdn.jsdelivr.net/gh/app-generator/sticky-media@0.0.19/dist/index.min.js',
            id: 'stickyVideoScript',
            defer: true,
            class: 'sticky-popup',
        },
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/app-generator/docusaurus-soft-design/tree/main/',
                    versions: {
                        current: {
                            label: `Next 🚀`,
                        },
                    },
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/app-generator/docusaurus-soft-design/tree/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'My DOCS',
                logo: {
                    href: '/',
                    alt: 'Soft UI Dashboard',
                    src: 'img/logo-ct.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    { type: 'docsVersionDropdown', position: 'right' },
                    {
                        href: 'https://github.com/app-generator/docusaurus-soft-design',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'CONTENT',
                        items: [
                            {
                                label: 'Docs',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                        ],
                    },
                    {
                        title: 'RESOURCES',
                        items: [
                            {
                                label: 'Source Code',
                                href: 'https://github.com/app-generator/docusaurus-soft-design',
                            },
                            {
                                label: 'Soft UI Design',
                                href: 'https://bit.ly/soft-design-system',
                            },
                        ],
                    },
                    {
                        title: 'SUPPORT',
                        items: [
                            {
                                label: 'AppSeed',
                                href: 'https://appseed.us/support/',
                            },
                            {
                                label: 'StackOverflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `&copy; ${new Date().getFullYear()} MyCompany`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: process.env.APPLICATION_ID,
                apiKey: process.env.API_KEY,
                indexName: 'index',
                contextualSearch: true,
                searchParameters: {},
            },
        }),
}

module.exports = config
