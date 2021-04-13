(self.webpackChunktil=self.webpackChunktil||[]).push([[761],{6832:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>u});var e=n(6252);const l=(0,e.uE)('<h1 id="assets"><a class="header-anchor" href="#assets">#</a> Assets</h1><h2 id="상대경로"><a class="header-anchor" href="#상대경로">#</a> 상대경로</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">An image</span>](<span class="token url">./image.png</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="public-files"><a class="header-anchor" href="#public-files">#</a> Public Files</h2><ul><li>public directory 를 지정할 수 있다. 여기에 있는 디렉토리 / 파일들은 빌드 된 루트 경로에 복사된다.</li><li>다음의 경우에 유용하다. <ul><li>markdown 파일에서 직접 reference 하지 않는 경우 (favicon, PWA icon 등)</li><li>공유되는 이미지 파일 (logo 이미지 등)</li><li>절대경로를 사용하고 싶은 경우</li></ul></li></ul>',5),p={class:"custom-container tip"},t=(0,e.Wm)("p",{class:"custom-container-title"},"TIP",-1),o=(0,e.Uk)("logo 의 경우 "),c=(0,e.Uk)("themeConfig.logo"),r=(0,e.Uk)(" 에 경로를 지정하는 방법도 있다."),i=(0,e.uE)('<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>└─ docs\n   ├─ .vuepress\n   |  └─ public\n   |     └─ images\n   |        └─ hero.png  # &lt;- Logo file\n   └─ guide\n      └─ assets.md       # &lt;- Here we are\n\n<span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/images/hero.png</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="non-root-url-에-deploy-할-경우"><a class="header-anchor" href="#non-root-url-에-deploy-할-경우">#</a> Non-root URL 에 deploy 할 경우</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- base: &#39;/bar/&#39; 일 경우 --&gt;</span>\n<span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/bar/images/hero.png</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>동적으로 변경하려면 <code>$withBase</code></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$withBase(<span class="token punctuation">&#39;</span>/images/hero.png<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VuePress Logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="packages-and-path-aliases"><a class="header-anchor" href="#packages-and-path-aliases">#</a> Packages and Path Aliases</h2><p>잘 사용하지는 않지만 dependant package 에서 이미지를 가져올 수도 있음</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">Image from dependency</span>](<span class="token url">package-name/image.png</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>alias 도 사용가능</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  alias<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;@alias&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/some/dir&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">Image from path alias</span>](<span class="token url">@alias/image.png</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',11),u={render:function(s,a){const n=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,(0,e.Wm)("div",p,[t,(0,e.Wm)("p",null,[o,(0,e.Wm)(n,{to:"/fw/vuepress/config3.html#locale-config"},{default:(0,e.w5)((()=>[c])),_:1}),r])]),i],64)}}},48:(s,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>e});const e={key:"v-cab4d3ee",path:"/fw/vuepress/assets.html",title:"Assets",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"상대경로",slug:"상대경로",children:[]},{level:2,title:"Public Files",slug:"public-files",children:[]},{level:2,title:"Non-root URL 에 deploy 할 경우",slug:"non-root-url-에-deploy-할-경우",children:[]},{level:2,title:"Packages and Path Aliases",slug:"packages-and-path-aliases",children:[]}],filePathRelative:"fw/vuepress/assets.md",git:{updatedTime:1617892806e3}}}}]);