import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'ko-KR',
    title: 'TIL',
    description: '오늘 내가 배운 것들',

    themeConfig: {

        editLink: false,
        repo: 'zerosheepmoo/pep8-in-korean',
        home: '/',
        logo: '/images/logo.png',
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
        lastUpdated: true,
        sidebar: {
            '/fw/vuepress/': [
                {
                    isGroup: true,
                    text: 'Vuepress',
                    children: [
                        'README.md',
                        'intro.md',
                        'config.md'
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
        }
    },
    extendsMarkdown: (md) => {
        let footnote = require('markdown-it-footnote');
        md.use(footnote);
    },
});