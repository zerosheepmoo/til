(self.webpackChunktil=self.webpackChunktil||[]).push([[8896],{4722:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var p=a(6252);const t=(0,p.uE)('<h1 id="테스트"><a class="header-anchor" href="#테스트">#</a> 테스트</h1><ul><li><code>./*</code>와 <code>./**/*</code> 를 recursively 탐색 <ul><li><code>test.{ts, tsx, js, mjs, jsx}</code></li><li><code>.test.{ts, tsx, js, mjs, jsx}</code></li><li><code>_test.{ts, tsx, js, mjs, jsx}</code></li></ul></li></ul><h2 id="테스트-작성"><a class="header-anchor" href="#테스트-작성">#</a> 테스트 작성</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> assertEquals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.97.0/testing/asserts.ts&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// configurable 하지 않은 간단한 형식</span>\nDeno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;hello world #1&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Fully fledged test definition, configurable, long</span>\nDeno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;hello world #2&quot;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token function">assertEquals</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="assertions"><a class="header-anchor" href="#assertions">#</a> Assertions</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  assertArrayIncludes<span class="token punctuation">,</span>\n  assertEquals<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.97.0/testing/asserts.ts&quot;</span><span class="token punctuation">;</span>\n\nDeno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token function">assertEquals</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">assertArrayIncludes</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;Expected 3 to be in the array&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="async-함수"><a class="header-anchor" href="#async-함수">#</a> Async 함수</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.97.0/async/delay.ts&quot;</span><span class="token punctuation">;</span>\n\nDeno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;async hello world&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// await some async task</span>\n  <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">!==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;x should be equal to 3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="리소스-그리고-async-op-sanitizers"><a class="header-anchor" href="#리소스-그리고-async-op-sanitizers">#</a> 리소스 그리고 async op sanitizers</h3>',9),e={href:"https://deno.land/manual@v1.10.2/contributing/architecture",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("리소스 테이블"),c=(0,p.Wm)("li",null,[(0,p.Wm)("code",null,"sanitizeResources"),(0,p.Uk)(": "),(0,p.Wm)("code",null,"false"),(0,p.Uk)("면 자원누수를 막는 걸 비활성화 시킬 수 있음")],-1),l=(0,p.Wm)("li",null,[(0,p.Wm)("code",null,"sanitizeOps"),(0,p.Uk)(": 파일시스템같은 비동기 / "),(0,p.Wm)("code",null,"false"),(0,p.Uk)("면 비활성화")],-1),u=(0,p.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Deno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;leaky test&quot;</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Deno<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;hello.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  sanitizeResources<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  sanitizeOps<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="exit-sanitizer"><a class="header-anchor" href="#exit-sanitizer">#</a> exit sanitizer</h3><ul><li>tested code doesn&#39;t call <code>Deno.exit()</code> signaling a false test success.</li><li><code>sanitizeExit</code>: <code>false</code>로 위를 보장하는 것을 비활성화</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Deno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;false success&quot;</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Deno<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  sanitizeExit<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nDeno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;failing test&quot;</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;this test fails&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="테스트-실행"><a class="header-anchor" href="#테스트-실행">#</a> 테스트 실행</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Run all tests in the current directory and all sub-directories</span>\ndeno <span class="token builtin class-name">test</span>\n\n<span class="token comment"># Run all tests in the util directory</span>\ndeno <span class="token builtin class-name">test</span> util/\n\n<span class="token comment"># Run just my_test.ts</span>\ndeno <span class="token builtin class-name">test</span> my_test.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno <span class="token builtin class-name">help</span> <span class="token builtin class-name">test</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="필터링"><a class="header-anchor" href="#필터링">#</a> 필터링</h2><h3 id="커맨드-라인-필터링"><a class="header-anchor" href="#커맨드-라인-필터링">#</a> 커맨드 라인 필터링</h3><ul><li><p><code>--filtering</code></p></li><li><p>테스트 목록</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Deno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;my-test&quot;</span><span class="token punctuation">,</span> fn<span class="token operator">:</span> myTest <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nDeno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;test-1&quot;</span><span class="token punctuation">,</span> fn<span class="token operator">:</span> test1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nDeno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span> fn<span class="token operator">:</span> test2 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>전부 다 실행</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno <span class="token builtin class-name">test</span> --filter <span class="token string">&quot;test&quot;</span> tests/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>아래 두번째, 세번째만 실행</li><li><code>//</code>로 감싸서 정규표현식</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno <span class="token builtin class-name">test</span> --filter <span class="token string">&quot;/test-*\\d/&quot;</span> tests/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="테스트-정의-필터링"><a class="header-anchor" href="#테스트-정의-필터링">#</a> 테스트 정의 필터링</h3><h4 id="ignore"><a class="header-anchor" href="#ignore">#</a> <code>ignore</code></h4><ul><li>windows 에서만 테스트한다던가...</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Deno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;do macOS feature&quot;</span><span class="token punctuation">,</span>\n  ignore<span class="token operator">:</span> Deno<span class="token punctuation">.</span>build<span class="token punctuation">.</span>os <span class="token operator">!==</span> <span class="token string">&quot;darwin&quot;</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">doMacOSFeature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="only"><a class="header-anchor" href="#only">#</a> <code>only</code></h4><ul><li>한 가지 테스트에 집중하고 싶으면...</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Deno<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Focus on this test only&quot;</span><span class="token punctuation">,</span>\n  only<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">testComplicatedStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="테스트-실패시키기"><a class="header-anchor" href="#테스트-실패시키기">#</a> 테스트 실패시키기</h2><ul><li>테스트 중단을 위해선...</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno <span class="token builtin class-name">test</span> --fail-fast\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="테스트-커버리지"><a class="header-anchor" href="#테스트-커버리지">#</a> 테스트 커버리지</h2><ul><li><code>--coverage</code>를 지정</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Go into your project&#39;s working directory</span>\n<span class="token function">git</span> clone https://github.com/oakserver/oak <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> oak\n\n<span class="token comment"># Collect your coverage profile with deno test --coverage=&lt;output_directory&gt;</span>\ndeno <span class="token builtin class-name">test</span> --coverage<span class="token operator">=</span>cov_profile\n\n<span class="token comment"># From this you can get a pretty printed diff of uncovered lines</span>\ndeno coverage cov_profile\n\n<span class="token comment"># Or generate an lcov report</span>\ndeno coverage cov_profile --lcov <span class="token operator">&gt;</span> cov_profile.lcov\n\n<span class="token comment"># Which can then be further processed by tools like genhtml</span>\ngenhtml -o cov_profile/html cov_profile.lcov\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',28),i={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[(0,p.Wm)("a",e,[o,(0,p.Wm)(a)])]),c,l]),u],64)}}},5744:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-32b89466",path:"/runtime/deno/testing.html",title:"테스트",lang:"ko-KR",frontmatter:{sidebar:"auto",prev:"examples.md"},excerpt:"",headers:[{level:2,title:"테스트 작성",slug:"테스트-작성",children:[]},{level:2,title:"Assertions",slug:"assertions",children:[{level:3,title:"Async 함수",slug:"async-함수",children:[]},{level:3,title:"리소스 그리고 async op sanitizers",slug:"리소스-그리고-async-op-sanitizers",children:[]},{level:3,title:"exit sanitizer",slug:"exit-sanitizer",children:[]},{level:3,title:"테스트 실행",slug:"테스트-실행",children:[]}]},{level:2,title:"필터링",slug:"필터링",children:[{level:3,title:"커맨드 라인 필터링",slug:"커맨드-라인-필터링",children:[]},{level:3,title:"테스트 정의 필터링",slug:"테스트-정의-필터링",children:[]}]},{level:2,title:"테스트 실패시키기",slug:"테스트-실패시키기",children:[]},{level:2,title:"테스트 커버리지",slug:"테스트-커버리지",children:[]}],filePathRelative:"runtime/deno/testing.md",git:{updatedTime:1622296949e3}}}}]);