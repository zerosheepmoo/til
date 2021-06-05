import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import {WebpackConfiguration} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    
    /* Site Config */
    title: 'This is a title of the site',
    description: 'This is descriptions of the site',
    base: '/reponame/',
    lang: 'ko-KR',
    /**
     * Third argument is allowed if first argument type is HeadTagNonEmpty.
     * Others are not.
     * 
     * HeadConfig = [HeadTagEmpty, HeadAttrsConfig] | [HeadTagNonEmpty, HeadAttrsConfig, string]
     * 
     * HeadTagEmpty = 'base' | 'link' | 'meta' | 'script';
     * HeadTagNonEmpty = 'title' | 'style' | 'script' | 'noscript' | 'template';
     * @example
     * head: [['script', {}, 'console.log("hello")']],
     */
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    locales: {
        '/': {
            lang: 'ko-KR',
        },
        '/en/': {
            lang: 'en-US',
        },
    },

    /* Directory Config */
    temp: 'path/to/temp/files',
    cache: 'path/to/cache/files',
    public: 'path/to/assets',
    dest: 'path/to/dist',

    /* Bundler Config */
    /**
     * for now, only webpack, vite bundler by Vuepress Team are allowed.
     * 
     * @vuepress/webpack
     * @vuepress/vite
     */
    bundler: '@vuepress/webpack',
    /**
     * See https://vuepress2.netlify.app/reference/bundler/webpack.html
     */
    bundlerConfig: {
        /**
         * Caution! This option is not working.
         * I don't know why.
         * 
         * @param config - webpack configuration object
         * @param isServer SSR / CSR?
         * @param isBuild - dev / build ?
         * @returns merged webpack configuration object
         */
        configureWebpack: function(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) {
            let rendering = isServer ? 'Server Side Rendering...' : 'Client Side Rendering...';
            let build = isBuild ? 'Build' : 'Dev'
            console.log(`Now ${isServer} and ${isBuild} MODE` );    
            return config
        }
    },

    /* markdown Config */
    
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
});