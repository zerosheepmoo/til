(self.webpackChunktil=self.webpackChunktil||[]).push([[8718],{4850:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>x});var a=t(6252);const s=(0,a.uE)('<h1 id="typescript-사용하기"><a class="header-anchor" href="#typescript-사용하기">#</a> Typescript 사용하기</h1><h2 id="overview"><a class="header-anchor" href="#overview">#</a> Overview</h2><h3 id="작동원리"><a class="header-anchor" href="#작동원리">#</a> 작동원리</h3>',3),o={href:"https://deno.land/manual@v1.9.2/typescript/overview#how-does-it-work",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("원문 how does it work"),r=(0,a.uE)('<h3 id="타입체킹"><a class="header-anchor" href="#타입체킹">#</a> 타입체킹</h3><ul><li><code>--no-check</code> 로 타입체킹 안하고 실행 퍼포먼스를 높일 수 있음!</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno run --no-check something.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="파일-타입-결정하기"><a class="header-anchor" href="#파일-타입-결정하기">#</a> 파일 타입 결정하기</h3><ul><li>local 에서는 extension 에 의해서 이루어진다. 없다면 JSX, TSX, TS 모두 js 로 간주된다.</li><li>remote 에서는 mime-type 으로 결정한다. <ul><li>애매한 경우 모듈의 경로 또한 이용한다. <code>d.ts</code> 와 <code>ts</code></li></ul></li></ul><h4 id="지원하는-파일타입"><a class="header-anchor" href="#지원하는-파일타입">#</a> 지원하는 파일타입</h4>',6),i=(0,a.Uk)("모든 목록은 "),p={href:"https://deno.land/manual@v1.9.2/typescript/overview#supported-media-types",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("원문 해당 섹션"),u=(0,a.Uk)("참조"),d=(0,a.uE)('<table><thead><tr><th style="text-align:center;">media type</th><th style="text-align:center;">How file is handled</th></tr></thead><tbody><tr><td style="text-align:center;"><code>application/typescript</code></td><td style="text-align:center;">TypeScript (with path extension influence)</td></tr><tr><td style="text-align:center;"><code>text/typescript</code></td><td style="text-align:center;">TypeScript (with path extension influence)</td></tr><tr><td style="text-align:center;"><code>video/mp2t</code></td><td style="text-align:center;">TypeScript (with path extension influence)</td></tr><tr><td style="text-align:center;"><code>text/jsx</code></td><td style="text-align:center;">JSX</td></tr><tr><td style="text-align:center;"><code>text/tsx</code></td><td style="text-align:center;">TSX</td></tr><tr><td style="text-align:center;"><code>text/plain</code></td><td style="text-align:center;">파일경로, 안되면 unknown</td></tr></tbody></table><h3 id="strict-by-default"><a class="header-anchor" href="#strict-by-default">#</a> Strict by default</h3><ul><li>Deno 는 default 로 strict mode 다</li></ul><h3 id="js-와-섞임"><a class="header-anchor" href="#js-와-섞임">#</a> JS 와 섞임</h3>',4),h=(0,a.Uk)("javascript 의 타입체크는 하지 않는다 by default "),g={href:"https://deno.land/manual@v1.9.2/typescript/configuration",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("config"),k=(0,a.Uk)("로 바꿀 수 있다."),f=(0,a.Wm)("li",null,"js 를 ts 에 importing 하거나 그 반대의 시나리오는 지원하지 않는다.",-1),b=(0,a.uE)('<h3 id="터미널에서의-진단"><a class="header-anchor" href="#터미널에서의-진단">#</a> 터미널에서의 진단</h3><ul><li>다음을 통해 무시 <ul><li><code>// @ts-ignore</code></li><li><code>// @ts-expect-error</code></li><li><code>--no-check</code></li></ul></li></ul><h3 id="타입-resolution"><a class="header-anchor" href="#타입-resolution">#</a> 타입 resolution</h3><ul><li>코어 디자인 principle 이 &quot;magical&quot; resolution 을 피하는데 있다.</li></ul><h2 id="타입스크립트-configuration"><a class="header-anchor" href="#타입스크립트-configuration">#</a> 타입스크립트 Configuration</h2><ul><li>Deno Default 사용 권장. 배포 시 사용자지정 config 파일도 필요하기 때문.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> deno run --config ./tsconfig.json main.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="사용-가능-옵션-표"><a class="header-anchor" href="#사용-가능-옵션-표">#</a> 사용 가능 옵션 표</h3><ul><li><code>compilerOptions</code> 의 일부</li></ul>',9),y={href:"https://deno.land/manual/typescript/configuration#how-deno-uses-a-configuration-file",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("원문 how deno uses a configuration file 참조"),q=(0,a.uE)('<h3 id="예시-tsconfig-json"><a class="header-anchor" href="#예시-tsconfig-json">#</a> 예시 <code>tsconfig.json</code></h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;deno.window&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;useDefineForClassFields&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li><code>deno types</code> on the command line <ul><li>and piping the output to a file</li><li>and including that in the files as part of the program</li><li>removing the <code>&quot;lib&quot;</code> option</li><li>and setting the <code>&quot;noLib&quot;</code> option to true.</li></ul></li><li><code>--unstable</code> flag</li><li><code>&quot;lib&quot;</code> option to <code>[ &quot;deno.window&quot;, &quot;deno.unstable&quot; ]</code></li><li>load a worker: <code>&quot;deno.worker&quot;</code> instead of <code>&quot;deno.window&quot;</code></li></ul><h2 id="types-and-type-declarations"><a class="header-anchor" href="#types-and-type-declarations">#</a> Types and type declarations</h2><h2 id="migrating-to-from-javascript"><a class="header-anchor" href="#migrating-to-from-javascript">#</a> Migrating to/from JavaScript</h2><h2 id="runtime-compiler-apis"><a class="header-anchor" href="#runtime-compiler-apis">#</a> Runtime compiler APIs</h2><h2 id="faq"><a class="header-anchor" href="#faq">#</a> FAQ</h2>',7),x={render:function(e,n){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[s,(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,[(0,a.Wm)("a",o,[l,(0,a.Wm)(t)])])]),r,(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,[i,(0,a.Wm)("a",p,[c,(0,a.Wm)(t)]),u])]),d,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[h,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",g,[m,(0,a.Wm)(t)]),k])])]),f]),b,(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,[(0,a.Wm)("a",y,[v,(0,a.Wm)(t)])])]),q],64)}}},4740:(e,n,t)=>{"use strict";t.r(n),t.d(n,{data:()=>a});const a={key:"v-f47a4da4",path:"/runtime/deno/using-typescript.html",title:"Typescript 사용하기",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[{level:3,title:"작동원리",slug:"작동원리",children:[]},{level:3,title:"타입체킹",slug:"타입체킹",children:[]},{level:3,title:"파일 타입 결정하기",slug:"파일-타입-결정하기",children:[]},{level:3,title:"Strict by default",slug:"strict-by-default",children:[]},{level:3,title:"JS 와 섞임",slug:"js-와-섞임",children:[]},{level:3,title:"터미널에서의 진단",slug:"터미널에서의-진단",children:[]},{level:3,title:"타입 resolution",slug:"타입-resolution",children:[]}]},{level:2,title:"타입스크립트 Configuration",slug:"타입스크립트-configuration",children:[{level:3,title:"사용 가능 옵션 표",slug:"사용-가능-옵션-표",children:[]},{level:3,title:"예시 tsconfig.json",slug:"예시-tsconfig-json",children:[]}]},{level:2,title:"Types and type declarations",slug:"types-and-type-declarations",children:[]},{level:2,title:"Migrating to/from JavaScript",slug:"migrating-to-from-javascript",children:[]},{level:2,title:"Runtime compiler APIs",slug:"runtime-compiler-apis",children:[]},{level:2,title:"FAQ",slug:"faq",children:[]}],filePathRelative:"runtime/deno/using-typescript.md",git:{updatedTime:1620805677e3}}}}]);