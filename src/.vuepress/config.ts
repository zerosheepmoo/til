import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // siteConfig
    title: 'TIL',
    description: '오늘 내가 배운 것들',
    base: '/til/',
    // directory config
    dest: './dist',
    locales: {
        '/': {
            lang: 'ko-KR',
        },
        '/en/': {
            lang: 'en-US',
        },
    },
    // theme config
    themeConfig: {
        lastUpdated: true,
        repo: 'zerosheepmoo/til',
        home: '/',
        logo: '/images/logo.png',
        editLink: false,
        contributors: false,
        notFound: ['잘못 들어왔졍ㅠ'],
        backToHome: '돌아가자...',
        // multilang
        locales: {
            '/': {
                selectLanguageName: '한국어',
                navbar: [
                    {
                        text: 'Study',
                        link: '/study/'
                    },
                    {
                        text: 'Framework',
                        children: [
                            {
                                text: 'Vuepress',
                                link: '/fw/vuepress/',
                            },
                            {
                                text: 'Others',
                                link: '/fw/others/',
                            },
                        ]
                    }
                ],
                sidebar: {
                    '/fw/vuepress/': [
                        {
                            isGroup: true,
                            text: 'Vuepress',
                            children: [
                                'README.md',
                                'intro.md',
                                'config.md',
                                'config2.md',
                                'config3.md',
                                'plugin-api.md',
                                'assets.md',
                                'bundler.md',
                                'frontmatter.md',
                                'i18n.md',
                                'config-ts.md'
                            ]
                        }
                    ],
                    '/fw/others/': [
                        {
                            isGroup: true,
                            text: 'Others',
                            children: [
                                'README.md'
                            ]
                        }
                    ],
                    '/study/': [
                        {
                            text: 'Study',
                            isGroup: true,
                            children: [
                                'README.md'
                            ]
                        }
                    ],
                },
            },
            '/en/': {
                selectLanguageName: 'English',
            }
        },
    },
    // plugin API
    extendsMarkdown: (md) => {
        let footnote = require('markdown-it-footnote');
        let multitable = require('markdown-it-multimd-table');
        md.use(footnote);
        md.use(multitable, { multiline: true, rowspan: true });
    },
    extendsPageOptions: (filePath) => {
        if (filePath.startsWith(`_posts/`)) {
            if (filePath === '_posts/README.md') {
                return {
                    frontmatter: {
                        permalink: '/posts/'
                    }
                }
            }
            if (filePath.endsWith('README.md')) {
                
                let year = filePath.substring(7,11);
                let month = filePath.substring(11,13);
                return {
                    frontmatter: {
                        permalinkPattern: `/${year}/${month}/`,
                    }
                }
            }
            return {
                frontmatter: {
                    permalinkPattern: '/:year/:month/:day/:slug.html',
                    sidebar: 'auto'
                },
            }
        }
        return {}
    },
    plugins: [
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-8DQRPD9EMJ',
            },
        ],
    ],
});