(self.webpackChunktil=self.webpackChunktil||[]).push([[402],{1603:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>k});var e=a(6252);const t=(0,e.Wm)("h1",{id:"frontmatter"},[(0,e.Wm)("a",{class:"header-anchor",href:"#frontmatter"},"#"),(0,e.Uk)(" Frontmatter")],-1),p=(0,e.Uk)("마크다운 파일은 "),l={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("YAML"),c=(0,e.Uk)("를 포함할 수 있다."),r=(0,e.Wm)("li",null,"상단에 위치해야한다.",-1),u=(0,e.Wm)("li",null,"triple-dashed lines 로 래핑되어야 한다.",-1),i=(0,e.uE)('<h2 id="homepage"><a class="header-anchor" href="#homepage">#</a> Homepage</h2><blockquote><p>홈페이지에서만 효과있는 프론트매터</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> \n<span class="token comment"># public file path</span>\n<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /images/hero.png\n<span class="token comment"># url</span>\n<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//vuejs.org/images/logo.png\n<span class="token key atrule">heroAlt</span><span class="token punctuation">:</span> <span class="token string">&#39;hero-image&#39;</span>\n<span class="token key atrule">heroText</span><span class="token punctuation">:</span> <span class="token string">&#39;About Something&#39;</span>\n<span class="token key atrule">tagline</span><span class="token punctuation">:</span> <span class="token string">&#39;This site is about something.&#39;</span>\n<span class="token key atrule">actions</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started\n    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary\n  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Introduction\n    <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary\n<span class="token key atrule">features</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Simplicity First\n    <span class="token key atrule">details</span><span class="token punctuation">:</span> Minimal setup with markdown<span class="token punctuation">-</span>centered project structure.\n  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue<span class="token punctuation">-</span>Powered\n    <span class="token key atrule">details</span><span class="token punctuation">:</span> Enjoy the dev experience of Vue<span class="token punctuation">,</span> use Vue components in markdown.\n  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Performant\n    <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress generates pre<span class="token punctuation">-</span>rendered static HTML for each page.\n<span class="token key atrule">footer</span><span class="token punctuation">:</span> &lt;a href=&quot;https<span class="token punctuation">:</span>//somewhere&quot;<span class="token punctuation">&gt;</span>shuuuuu&lt;/a<span class="token punctuation">&gt;</span> with me\n<span class="token key atrule">footerHTML</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul><li><code>home</code>은 false가 default / true 일 경우 <strong>homepage</strong>, false 일 경우 <a href="#normal-page">normal page</a></li><li><code>heroImage</code>: hero image 경로</li><li><code>heroAlt</code>: hero image 의 <code>alt</code> 어트리뷰트</li><li><code>heroText</code>: <code>string | null</code> / Site title 로 fallback</li><li><code>tagline</code>: <code>string | null</code> / Site description 으로 fallback</li><li><code>actions</code>: 액션버튼 / <code>type</code>은 optional</li><li><code>features</code>: 특징리스트</li><li><code>footer</code>: 푸터 문자열</li><li><code>footerHtml</code>: 푸터 문자열을 html 코드로 해석함. (innerHTML)</li></ul><h2 id="normal-page"><a class="header-anchor" href="#normal-page">#</a> Normal Page</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">lastUpdated</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">contributors</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n<span class="token key atrule">sidebar</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n<span class="token comment"># NavLink</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span>\n  <span class="token key atrule">text</span><span class="token punctuation">:</span> Get Started\n  <span class="token key atrule">link</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.html\n\n<span class="token comment"># NavLink - external url</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span>\n  <span class="token key atrule">text</span><span class="token punctuation">:</span> GitHub\n  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com\n\n<span class="token comment"># string - page file path</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> /guide/getting<span class="token punctuation">-</span>started.md\n\n<span class="token comment"># string - page file relative path</span>\n<span class="token key atrule">prev</span><span class="token punctuation">:</span> ../../guide/getting<span class="token punctuation">-</span>started.md\n\n<span class="token key atrule">next</span><span class="token punctuation">:</span>\n  <span class="token key atrule">text</span><span class="token punctuation">:</span> Same structure with prev\n  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//somehow\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul><li><code>editLink</code>: 편집하기 링크 활성화 유무</li><li><code>lastUpdated</code>: 최종갱신 타임스탬프 표시 유무</li><li><code>contributors</code>: 기여자 표시 유무</li><li><code>sidebar</code>: <code>false | &#39;auto&#39; | SidebarConfigArray | SidebarConfigObject</code></li><li><code>prev</code>: 이전 페이지 링크 / 설정하지 않을 시 sidebar config 에서 추론</li><li><code>next</code>: 다음 페이지 링크 / 설정하지 않을 시 sidebar config 에서 추론</li></ul>',7),k={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[p,(0,e.Wm)("a",l,[o,(0,e.Wm)(a)]),c]),r,u]),i],64)}}},999:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-8bb66408",path:"/fw/vuepress/frontmatter.html",title:"Frontmatter",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Homepage",slug:"homepage",children:[]},{level:2,title:"Normal Page",slug:"normal-page",children:[]}],filePathRelative:"fw/vuepress/frontmatter.md",git:{updatedTime:1617908834e3}}}}]);