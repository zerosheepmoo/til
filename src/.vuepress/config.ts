import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'ko-KR',
    title: 'TIL',
    description: '오늘 내가 배운 것들',
    base: '/til/',
    dest: './dist',
    themeConfig: {
        editLink: false,
        repo: 'zerosheepmoo/til',
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
                        'config.md',
                        'config2.md'
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
        let multitable = require('markdown-it-multimd-table');
        md.use(footnote);
        md.use(multitable, {multiline: true, rowspan: true});
    },
});