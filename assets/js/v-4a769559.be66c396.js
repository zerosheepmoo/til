(self.webpackChunktil=self.webpackChunktil||[]).push([[4891],{6153:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="deno-기초"><a class="header-anchor" href="#deno-기초">#</a> deno 기초</h1><h2 id="왜-만들었을까"><a class="header-anchor" href="#왜-만들었을까">#</a> 왜 만들었을까?</h2><ul><li>Ryan dahl 의 후회 <ul><li>module system with centralized distribution</li><li>legacy api supports</li><li>Security <ul><li>중요한 정보접근 제한</li></ul></li></ul></li></ul><h2 id="기반기술"><a class="header-anchor" href="#기반기술">#</a> 기반기술</h2><ul><li>V8 javascript runtime</li><li>Rust (replace c++)</li><li>Tokio</li><li>typescript</li></ul><h2 id="코드-예시"><a class="header-anchor" href="#코드-예시">#</a> 코드 예시</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// import</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> qrcode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/qrcode/mod.ts&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">base64ToArrayBuffer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>base64<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> binString <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> len <span class="token operator">=</span> binString<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        bytes<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> binString<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> bytes<span class="token punctuation">.</span>buffer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// top level await</span>\n<span class="token keyword">const</span> qr <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">qrcode</span><span class="token punctuation">(</span><span class="token string">&#39;This is an example.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dataString <span class="token operator">=</span> qr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> arrayBuffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token function">base64ToArrayBuffer</span><span class="token punctuation">(</span>dataString<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// writeFile</span>\n<span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&quot;hello.png&quot;</span><span class="token punctuation">,</span> arrayBuffer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="특징"><a class="header-anchor" href="#특징">#</a> 특징</h2><h3 id="공식홈페이지-소개-highlight-feature"><a class="header-anchor" href="#공식홈페이지-소개-highlight-feature">#</a> 공식홈페이지 소개 highlight feature</h3><ul><li>Secure by default. No file, network, or environment access (unless explicitly enabled).</li><li>Supports TypeScript out of the box.</li><li>Ships a single executable (deno).</li><li>Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).</li><li>Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno.</li><li>Can bundle scripts into a single JavaScript file.</li></ul><h3 id="esmodule-만-사용"><a class="header-anchor" href="#esmodule-만-사용">#</a> ESModule 만 사용</h3><ul><li>Http url 을 이용하여 app 에 3rd party code 를 connect</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>serve<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;http://deno.land/std/http/server.ts&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>using url 함으로써 다운로드랑 패키지 업데이트가 소스로부터 자체적으로 가능!</li><li>Deno가 의존성을 캐시한다! =&gt; 오프라인에서도 이용가능하다구!</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno run --allow-write qrcode.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="built-in-typescript"><a class="header-anchor" href="#built-in-typescript">#</a> Built in Typescript</h3><p>👍​</p><h3 id="security"><a class="header-anchor" href="#security">#</a> Security</h3><ul><li>option flag 로 permission 관리</li></ul><h3 id="top-level-await"><a class="header-anchor" href="#top-level-await">#</a> Top level await</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> hostname <span class="token operator">=</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">8080</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> listener <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hostname<span class="token punctuation">,</span> port <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Listening on </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hostname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">const</span> conn <span class="token keyword">of</span> listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Deno<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> conn<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="브라우저-호환성"><a class="header-anchor" href="#브라우저-호환성">#</a> 브라우저 호환성</h3><ul><li>node fetch 같은 게 필요가 없어짐!</li><li><code>require</code> 날라감!!!!</li></ul><h2 id="정리"><a class="header-anchor" href="#정리">#</a> 정리</h2><table><thead><tr><th></th><th>Node</th><th>Deno</th></tr></thead><tbody><tr><td>Engine</td><td>V8</td><td>V8</td></tr><tr><td>Written in</td><td>C++, Javascript</td><td>Rust &amp; Typescript</td></tr><tr><td>Package managing</td><td>npm</td><td>Uses URLs</td></tr><tr><td>importing packages</td><td>commonjs</td><td>ES Modules</td></tr><tr><td>Security</td><td>full access</td><td>permissioned access</td></tr><tr><td>Typescript support</td><td>not built in</td><td>Built in</td></tr></tbody></table>',25),e={render:function(n,s){return t}}},9369:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-4a769559",path:"/runtime/deno/deno-basic.html",title:"deno 기초",lang:"ko-KR",frontmatter:{},excerpt:"",headers:[{level:2,title:"왜 만들었을까?",slug:"왜-만들었을까",children:[]},{level:2,title:"기반기술",slug:"기반기술",children:[]},{level:2,title:"코드 예시",slug:"코드-예시",children:[]},{level:2,title:"특징",slug:"특징",children:[{level:3,title:"공식홈페이지 소개 highlight feature",slug:"공식홈페이지-소개-highlight-feature",children:[]},{level:3,title:"ESModule 만 사용",slug:"esmodule-만-사용",children:[]},{level:3,title:"Built in Typescript",slug:"built-in-typescript",children:[]},{level:3,title:"Security",slug:"security",children:[]},{level:3,title:"Top level await",slug:"top-level-await",children:[]},{level:3,title:"브라우저 호환성",slug:"브라우저-호환성",children:[]}]},{level:2,title:"정리",slug:"정리",children:[]}],filePathRelative:"runtime/deno/deno-basic.md",git:{updatedTime:1619876424e3}}}}]);