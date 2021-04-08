(self.webpackChunktil=self.webpackChunktil||[]).push([[958],{1074:(e,l,r)=>{"use strict";r.r(l),r.d(l,{default:()=>fe});var t=r(6252);const n=(0,t.Wm)("h1",{id:"bundler"},[(0,t.Wm)("a",{class:"header-anchor",href:"#bundler"},"#"),(0,t.Uk)(" Bundler")],-1),s={href:"https://vuepress2.netlify.app/guide/bundler.html#webpack",target:"_blank",rel:"noopener noreferrer"},a=(0,t.Uk)("원본 가이드"),o={href:"https://vuepress2.netlify.app/reference/bundler/webpack.html#configurewebpack",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("원본 레퍼런스"),c=(0,t.Wm)("h2",{id:"간략히"},[(0,t.Wm)("a",{class:"header-anchor",href:"#간략히"},"#"),(0,t.Uk)(" 간략히")],-1),d=(0,t.Wm)("li",null,"번들 관련 옵션들을 지정할 수 있다.",-1),u=(0,t.Uk)("vuepress는 "),h={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("webpack"),m=(0,t.Uk)(" 번들러를 이용하여 dev, build 사이트를 구성한다."),W=(0,t.Uk)("vuepress2 버전부터는 "),f={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("Vite"),v=(0,t.Uk)("도 지원한다."),b=(0,t.uE)('<h2 id="정리-표"><a class="header-anchor" href="#정리-표">#</a> 정리 표</h2><ul><li>웹팩 관련</li></ul><table><thead><tr><th style="text-align:center;">name</th><th style="text-align:center;">details</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="#configurewebpack"><code>configureWebpack</code></a></td><td style="text-align:center;">웹팩 Config 설정</td></tr><tr><td style="text-align:center;"><a href="#chainwebpack"><code>chainWebpack</code></a></td><td style="text-align:center;">웹팩 Config 설정</td></tr><tr><td style="text-align:center;"><a href="#beforedevserver"><code>beforeDevServer</code></a></td><td style="text-align:center;">- dev 전 훅</td></tr><tr><td style="text-align:center;"><a href="#afterdevserver"><code>afterDevServer</code></a></td><td style="text-align:center;">- dev 후 훅</td></tr></tbody></table><ul><li>로더 옵션</li></ul><table><thead><tr><th style="text-align:center;">name</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="#postcss"><code>postcss</code></a></td></tr><tr><td style="text-align:center;"><a href="#stylus"><code>stylus</code></a></td></tr><tr><td style="text-align:center;"><a href="#scss"><code>scss</code></a></td></tr><tr><td style="text-align:center;"><a href="#less"><code>less</code></a></td></tr></tbody></table><h2 id="details"><a class="header-anchor" href="#details">#</a> Details</h2><ul><li>이 포스트 작성 시점에서는 <code>bundleConfig</code>의 property에 대한 타입 hint 가 제공되지 않는다.</li></ul><h3 id="configurewebpack"><a class="header-anchor" href="#configurewebpack">#</a> <code>configureWebpack</code></h3>',8),g={href:"https://github.com/survivejs/webpack-merge",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Uk)("webpack-merge"),y=(0,t.Uk)("를 사용하여 머지된 웹팩 config 오브젝트를 반환한다."),w=(0,t.Wm)("li",null,[(0,t.Uk)("Type: "),(0,t.Wm)("code",null,"(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => WebpackConfiguration")],-1),x=(0,t.Wm)("li",null,[(0,t.Uk)("첫번째 argument가 웹팩 Config 오브젝트며, 두번째는 isServer(SSR / CSR ?) 플래그, 세번째는 isBuild(dev / build ?) 플래그다. 아래는 참고 path. "),(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("code",null,"/node_modules/@vuepress/bundler-webpack/lib/build/createBuild.js")]),(0,t.Wm)("li",null,[(0,t.Wm)("code",null,"....../lib/dev/createDev.js")])])],-1),S=(0,t.Wm)("h3",{id:"chainwebpack"},[(0,t.Wm)("a",{class:"header-anchor",href:"#chainwebpack"},"#"),(0,t.Uk)(),(0,t.Wm)("code",null,"chainWebpack")],-1),_={href:"https://github.com/neutrinojs/webpack-chain",target:"_blank",rel:"noopener noreferrer"},j=(0,t.Uk)("webpack-chain"),C=(0,t.Uk)("를 사용하여"),D=(0,t.Wm)("sup",{class:"footnote-ref"},[(0,t.Wm)("a",{href:"#fn1",id:"fnref1"},"[1]")],-1),O=(0,t.Uk)(" 웹팩 Config 를 설정한다."),T=(0,t.Wm)("li",null,[(0,t.Uk)("Type: "),(0,t.Wm)("code",null,"(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void")],-1),L=(0,t.Wm)("h3",{id:"beforedevserver"},[(0,t.Wm)("a",{class:"header-anchor",href:"#beforedevserver"},"#"),(0,t.Uk)(),(0,t.Wm)("code",null,"beforeDevServer")],-1),B=(0,t.Wm)("li",null,[(0,t.Uk)("Type: "),(0,t.Wm)("code",null,"(expressApp: Application, server: WebpackDevServer) => void")],-1),R={href:"https://webpack.js.org/configuration/dev-server/#devserverbefore",target:"_blank",rel:"noopener noreferrer"},V=(0,t.Uk)("webpack devServer.before 훅 가이드"),A=(0,t.Wm)("h3",{id:"afterdevserver"},[(0,t.Wm)("a",{class:"header-anchor",href:"#afterdevserver"},"#"),(0,t.Uk)(),(0,t.Wm)("code",null,"afterDevServer")],-1),P=(0,t.Wm)("li",null,[(0,t.Uk)("Type: "),(0,t.Wm)("code",null,"(expressApp: Application, server: WebpackDevServer) => void")],-1),q={href:"https://webpack.js.org/configuration/dev-server/#devserverafter",target:"_blank",rel:"noopener noreferrer"},E=(0,t.Uk)("webpack devServer.after 훅 가이드"),H=(0,t.Wm)("h3",{id:"postcss"},[(0,t.Wm)("a",{class:"header-anchor",href:"#postcss"},"#"),(0,t.Uk)(),(0,t.Wm)("code",null,"postcss")],-1),K=(0,t.Wm)("li",null,[(0,t.Uk)("Type: "),(0,t.Wm)("code",null,"PostcssLoaderOptions")],-1),Y={href:"https://github.com/webpack-contrib/postcss-loader#options",target:"_blank",rel:"noopener noreferrer"},z=(0,t.Uk)("postLoader option"),F=(0,t.Wm)("h3",{id:"stylus"},[(0,t.Wm)("a",{class:"header-anchor",href:"#stylus"},"#"),(0,t.Uk)(),(0,t.Wm)("code",null,"stylus")],-1),G=(0,t.Wm)("li",null,[(0,t.Uk)("Type: "),(0,t.Wm)("code",null,"StylusLoaderOptions")],-1),I={href:"https://github.com/webpack-contrib/stylus-loader#options",target:"_blank",rel:"noopener noreferrer"},J=(0,t.Uk)("stylus-loader option"),M=(0,t.Wm)("h3",{id:"scss"},[(0,t.Wm)("a",{class:"header-anchor",href:"#scss"},"#"),(0,t.Uk)(),(0,t.Wm)("code",null,"scss")],-1),N=(0,t.Wm)("li",null,[(0,t.Uk)("Type: "),(0,t.Wm)("code",null,"SassLoaderOptions")],-1),Q={href:"https://github.com/webpack-contrib/sass-loader#options",target:"_blank",rel:"noopener noreferrer"},X=(0,t.Uk)("sass-loader option"),Z=(0,t.Wm)("h3",{id:"less"},[(0,t.Wm)("a",{class:"header-anchor",href:"#less"},"#"),(0,t.Uk)(),(0,t.Wm)("code",null,"less")],-1),$=(0,t.Wm)("li",null,[(0,t.Uk)("Type: "),(0,t.Wm)("code",null,"LessLoaderOptions")],-1),ee={href:"https://github.com/webpack-contrib/less-loader#options",target:"_blank",rel:"noopener noreferrer"},le=(0,t.Uk)("less-loader option"),re=(0,t.Wm)("h2",{id:"관련"},[(0,t.Wm)("a",{class:"header-anchor",href:"#관련"},"#"),(0,t.Uk)(" 관련")],-1),te=(0,t.Uk)("Configuration -2- 해당 항목"),ne=(0,t.Uk)(" 참조"),se=(0,t.Wm)("h2",{id:"vite"},[(0,t.Wm)("a",{class:"header-anchor",href:"#vite"},"#"),(0,t.Uk)(" Vite")],-1),ae=(0,t.Wm)("h3",{id:"viteoptions"},[(0,t.Wm)("a",{class:"header-anchor",href:"#viteoptions"},"#"),(0,t.Uk)(),(0,t.Wm)("code",null,"viteOptions")],-1),oe={href:"https://vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},ie=(0,t.Uk)("Vite option 가이드"),ce=(0,t.Wm)("h3",{id:"vuepluginoptions"},[(0,t.Wm)("a",{class:"header-anchor",href:"#vuepluginoptions"},"#"),(0,t.Uk)(),(0,t.Wm)("code",null,"vuePluginOptions")],-1),de={href:"https://www.npmjs.com/package/@vitejs/plugin-vue",target:"_blank",rel:"noopener noreferrer"},ue=(0,t.Uk)("@vitejs/plugin-vue"),he=(0,t.Uk)(" 패키지의 옵션들"),pe={href:"https://vitejs.dev/plugins/#vitejs-plugin-vue",target:"_blank",rel:"noopener noreferrer"},me=(0,t.Uk)("Vite plugin guilde"),We=(0,t.uE)('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>webpack-chain 은 추가적으로 modify 할 때 용이하다. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2),fe={render:function(e,l){const r=(0,t.up)("OutboundLink"),fe=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[n,(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,[(0,t.Wm)("a",s,[a,(0,t.Wm)(r)])]),(0,t.Wm)("p",null,[(0,t.Wm)("a",o,[i,(0,t.Wm)(r)])])]),c,(0,t.Wm)("ul",null,[d,(0,t.Wm)("li",null,[u,(0,t.Wm)("a",h,[p,(0,t.Wm)(r)]),m]),(0,t.Wm)("li",null,[W,(0,t.Wm)("a",f,[k,(0,t.Wm)(r)]),v])]),b,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",g,[U,(0,t.Wm)(r)]),y]),w,x]),S,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",_,[j,(0,t.Wm)(r)]),C,D,O]),T]),L,(0,t.Wm)("ul",null,[B,(0,t.Wm)("li",null,[(0,t.Wm)("a",R,[V,(0,t.Wm)(r)])])]),A,(0,t.Wm)("ul",null,[P,(0,t.Wm)("li",null,[(0,t.Wm)("a",q,[E,(0,t.Wm)(r)])])]),H,(0,t.Wm)("ul",null,[K,(0,t.Wm)("li",null,[(0,t.Wm)("a",Y,[z,(0,t.Wm)(r)])])]),F,(0,t.Wm)("ul",null,[G,(0,t.Wm)("li",null,[(0,t.Wm)("a",I,[J,(0,t.Wm)(r)])])]),M,(0,t.Wm)("ul",null,[N,(0,t.Wm)("li",null,[(0,t.Wm)("a",Q,[X,(0,t.Wm)(r)])])]),Z,(0,t.Wm)("ul",null,[$,(0,t.Wm)("li",null,[(0,t.Wm)("a",ee,[le,(0,t.Wm)(r)])])]),re,(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,[(0,t.Wm)(fe,{to:"/fw/vuepress/config2.html#bundlerconfig"},{default:(0,t.w5)((()=>[te])),_:1}),ne])]),se,ae,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",oe,[ie,(0,t.Wm)(r)])])]),ce,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",de,[ue,(0,t.Wm)(r)]),he]),(0,t.Wm)("li",null,[(0,t.Wm)("a",pe,[me,(0,t.Wm)(r)])])]),We],64)}}},7688:(e,l,r)=>{"use strict";r.r(l),r.d(l,{data:()=>t});const t={key:"v-41f26b94",path:"/fw/vuepress/bundler.html",title:"Bundler",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"간략히",slug:"간략히",children:[]},{level:2,title:"정리 표",slug:"정리-표",children:[]},{level:2,title:"Details",slug:"details",children:[{level:3,title:"configureWebpack",slug:"configurewebpack",children:[]},{level:3,title:"chainWebpack",slug:"chainwebpack",children:[]},{level:3,title:"beforeDevServer",slug:"beforedevserver",children:[]},{level:3,title:"afterDevServer",slug:"afterdevserver",children:[]},{level:3,title:"postcss",slug:"postcss",children:[]},{level:3,title:"stylus",slug:"stylus",children:[]},{level:3,title:"scss",slug:"scss",children:[]},{level:3,title:"less",slug:"less",children:[]}]},{level:2,title:"관련",slug:"관련",children:[]},{level:2,title:"Vite",slug:"vite",children:[{level:3,title:"viteOptions",slug:"viteoptions",children:[]},{level:3,title:"vuePluginOptions",slug:"vuepluginoptions",children:[]}]}],filePathRelative:"fw/vuepress/bundler.md",git:{updatedTime:1617892806e3,contributors:[]}}}}]);