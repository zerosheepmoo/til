(self.webpackChunktil=self.webpackChunktil||[]).push([[6485],{223:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var e=a(6252);const p=(0,e.Wm)("h1",{id:"i18n-다국어-지원"},[(0,e.Wm)("a",{class:"header-anchor",href:"#i18n-다국어-지원"},"#"),(0,e.Uk)(" I18n 다국어 지원")],-1),t={href:"https://vuepress2.netlify.app/guide/i18n.html#site-i18n-config",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("원본 가이드"),o=(0,e.uE)('<h2 id="site-config-와-theme-config"><a class="header-anchor" href="#site-config-와-theme-config">#</a> Site Config 와 Theme Config</h2><ul><li>Vuepress 는 Site Config 와 Theme Config 을 독립적으로 적용할 수 있다.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docs\n├─ README.md\n├─ foo.md\n├─ nested\n│  └─ README.md\n└─ zh\n   ├─ README.md\n   ├─ foo.md\n   └─ nested\n      └─ README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">module</span><span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    locales<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// The key is the path for the locale to be nested under.</span>\n        <span class="token comment">// As a special case, the default locale can use &#39;/&#39; as its path.</span>\n        <span class="token string">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>\n          title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>\n          description<span class="token operator">:</span> <span class="token string">&#39;Vue-powered Static Site Generator&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token string">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>\n          title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span>\n          description<span class="token operator">:</span> <span class="token string">&#39;Vue 驱动的静态网站生成器&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// the case usign Default Theme Config</span>\n        locales<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token string">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;简体中文&#39;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="site-conig"><a class="header-anchor" href="#site-conig">#</a> Site Conig</h3><ul><li>다국어 지원을 위해서는 Site Config 를 작성해야한다.</li><li><code>lang</code>, <code>title</code>, <code>description</code>, 또는 <code>head</code>가 명시되지 않을 경우, 루트 Site Config 로 설정된다.</li></ul><h3 id="theme-config"><a class="header-anchor" href="#theme-config">#</a> Theme Config</h3><ul><li>Default Theme Config를 사용할 경우 설정하기 간편하다.</li></ul>',8),c={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("a",t,[l,(0,e.Wm)(a)])])]),o],64)}}},7592:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-3637dde4",path:"/fw/vuepress/i18n.html",title:"I18n 다국어 지원",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Site Config 와 Theme Config",slug:"site-config-와-theme-config",children:[{level:3,title:"Site Conig",slug:"site-conig",children:[]},{level:3,title:"Theme Config",slug:"theme-config",children:[]}]}],filePathRelative:"fw/vuepress/i18n.md",git:{updatedTime:1617892806e3}}}}]);