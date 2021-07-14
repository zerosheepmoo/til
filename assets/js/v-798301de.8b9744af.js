(self.webpackChunktil=self.webpackChunktil||[]).push([[5543],{3897:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var e=a(6252);const t=(0,e.Wm)("h1",{id:"표준-라이브러리"},[(0,e.Wm)("a",{class:"header-anchor",href:"#표준-라이브러리"},"#"),(0,e.Uk)(" 표준 라이브러리")],-1),p={href:"https://deno.land/std/",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("표준 라이브러리 소스"),o=(0,e.Wm)("li",null,"버전 명시하여 사용하기",-1),i=(0,e.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// import the latest release, this should be avoided</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std/fs/copy.ts&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// imports from v0.96.0 of std, never changes</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.96.0/fs/copy.ts&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="trouble-shooting"><a class="header-anchor" href="#trouble-shooting">#</a> Trouble shooting</h2><ul><li><code>--unstable</code> 없이하면 안되는 거 좀 있음.</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> copy <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.96.0/fs/copy.ts&quot;</span><span class="token punctuation">;</span>\n\n<span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">&quot;log.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;log-old.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ deno run --allow-read --allow-write main.ts\nCompile file:///dev/deno/main.ts\nDownload https://deno.land/std@0.96.0/fs/copy.ts\nDownload https://deno.land/std@0.96.0/fs/ensure_dir.ts\nDownload https://deno.land/std@0.96.0/fs/_util.ts\nerror: TS2339 <span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span>: Property <span class="token string">&#39;utime&#39;</span> does not exist on <span class="token builtin class-name">type</span> <span class="token string">&#39;typeof Deno&#39;</span><span class="token builtin class-name">.</span> <span class="token string">&#39;Deno.utime&#39;</span> is an unstable API. Did you forget to run with the <span class="token string">&#39;--unstable&#39;</span> flag?\n    await Deno.utime<span class="token punctuation">(</span>dest, statInfo.atime, statInfo.mtime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n               ~~~~~\n    at https://deno.land/std@0.96.0/fs/copy.ts:92:16\n\nTS2339 <span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span>: Property <span class="token string">&#39;utimeSync&#39;</span> does not exist on <span class="token builtin class-name">type</span> <span class="token string">&#39;typeof Deno&#39;</span><span class="token builtin class-name">.</span> <span class="token string">&#39;Deno.utimeSync&#39;</span> is an unstable API. Did you forget to run with the <span class="token string">&#39;--unstable&#39;</span> flag?\n    Deno.utimeSync<span class="token punctuation">(</span>dest, statInfo.atime, statInfo.mtime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n         ~~~~~~~~~\n    at https://deno.land/std@0.96.0/fs/copy.ts:103:10\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>올바른 예</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno run --allow-read --allow-write --unstable main.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',8),c={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",p,[l,(0,e.Wm)(a)])]),o]),i],64)}}},6946:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-798301de",path:"/runtime/deno/standard-library.html",title:"표준 라이브러리",lang:"ko-KR",frontmatter:{sidebar:"auto",prev:"./using-typescript.md",next:"./examples.md"},excerpt:"",headers:[{level:2,title:"Trouble shooting",slug:"trouble-shooting",children:[]}],filePathRelative:"runtime/deno/standard-library.md",git:{updatedTime:1621612991e3}}}}]);