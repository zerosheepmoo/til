(self.webpackChunktil=self.webpackChunktil||[]).push([[2200],{6892:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>m});var e=a(6252);const l=(0,e.uE)('<h1 id="외부-라이브러리와-연결하기"><a class="header-anchor" href="#외부-라이브러리와-연결하기">#</a> 외부 라이브러리와 연결하기</h1><ul><li><code>test.ts</code> 예시</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> assertEquals <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.95.0/testing/asserts.ts&quot;</span><span class="token punctuation">;</span>\n\n<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Asserted! ✓&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ deno run test.ts\nCompile file:///mnt/f9/Projects/github.com/denoland/deno/docs/test.ts\nDownload https://deno.land/std@0.95.0/testing/asserts.ts\nDownload https://deno.land/std@0.95.0/fmt/colors.ts\nDownload https://deno.land/std@0.95.0/testing/diff.ts\nAsserted<span class="token operator">!</span> ✓\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>캐싱: <code>DENO_DIR</code><ul><li>On Linux/Redox: <code>$XDG_CACHE_HOME/deno or $HOME/.cache/deno</code></li><li>On Windows: <code>%LOCALAPPDATA%/deno</code> (<code>%LOCALAPPDATA% = FOLDERID_LocalAppData</code>)</li><li>On macOS: <code>$HOME/Library/Caches/deno</code></li></ul></li><li>If something fails, it falls back to <code>$HOME/.deno</code></li></ul>',5),t={href:"https://deno.land/manual@v1.9.2/linking_to_external_code#faq",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("FAQ"),p=(0,e.Wm)("p",null,"특정 버전 지정 등...",-1),c=(0,e.uE)('<ul><li>예시: url 날라가는 거 방법은 어떡함?</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Download the dependencies</span>\n<span class="token assign-left variable">DENO_DIR</span><span class="token operator">=</span>./deno_dir deno cache src/deps.ts\n<span class="token comment"># Make sure the variable is set for any command which invokes the cache</span>\n<span class="token assign-left variable">DENO_DIR</span><span class="token operator">=</span>./deno_dir deno <span class="token builtin class-name">test</span> src\n<span class="token comment"># Check the directory into source control</span>\n<span class="token function">git</span> <span class="token function">add</span> -u deno_dir\n<span class="token function">git</span> commit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="모듈-재장전"><a class="header-anchor" href="#모듈-재장전">#</a> 모듈 재장전</h2><ul><li>기본적으로 캐싱 된건 바뀌지 않음!</li><li><code>--reload</code>로 명시적으로 해줘야함</li></ul><h3 id="to-reload-everything"><a class="header-anchor" href="#to-reload-everything">#</a> To reload everything</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno cache --reload my_module.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="to-reload-specific-modules"><a class="header-anchor" href="#to-reload-specific-modules">#</a> To reload specific modules</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno cache --reload<span class="token operator">=</span>https://deno.land/std@0.95.0 my_module.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno cache --reload<span class="token operator">=</span>https://deno.land/std@0.95.0/fs/copy.ts,https://deno.land/std@0.95.0/f\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="integrity-checking"><a class="header-anchor" href="#integrity-checking">#</a> Integrity checking</h2><ul><li><code>--lock=lock.json --lock-write</code></li></ul><details class="custom-container details"><summary>예시</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Add a new dependency to &quot;src/deps.ts&quot;, used somewhere else.</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> xyz <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://unpkg.com/xyz-lib@v0.9.0/lib.ts&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Create/update the lock file &quot;lock.json&quot;.</span>\ndeno cache --lock<span class="token operator">=</span>lock.json --lock-write src/deps.ts\n\n<span class="token comment"># Include it when committing to source control.</span>\n<span class="token function">git</span> <span class="token function">add</span> -u lock.json\n<span class="token function">git</span> commit -m <span class="token string">&quot;feat: Add support for xyz using xyz-lib&quot;</span>\n<span class="token function">git</span> push\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>다른 머신에선</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Download the project&#39;s dependencies into the machine&#39;s cache, integrity</span>\n<span class="token comment"># checking each resource.</span>\ndeno cache --reload --lock<span class="token operator">=</span>lock.json src/deps.ts\n\n<span class="token comment"># Done! You can proceed safely.</span>\ndeno <span class="token builtin class-name">test</span> --allow-read src\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><h3 id="runtime-verification"><a class="header-anchor" href="#runtime-verification">#</a> Runtime verification</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno run --lock<span class="token operator">=</span>lock.json --cached-only mod.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="프록시"><a class="header-anchor" href="#프록시">#</a> 프록시</h2><ul><li>Deno supports proxies for module downloads and the Web standard <code>fetch</code> API.</li><li>환경변수로 설정: <code>HTTP_PROXY</code>, <code>HTTPS_PROXY</code>, <code>NO_PROXY</code></li><li>윈도우즈는 못찾을 경우 falls back to reading proxies from registry.</li></ul><h2 id="private-모듈"><a class="header-anchor" href="#private-모듈">#</a> Private 모듈</h2><h3 id="deno-auth-tokens"><a class="header-anchor" href="#deno-auth-tokens">#</a> DENO_AUTH_TOKENS</h3><ul><li><p><code>{token}@{hostname[:port]}</code></p></li><li><p>싱글 토큰</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DENO_AUTH_TOKENS</span><span class="token operator">=</span>a1b2c3d4e5f6@deno.land\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>멀티플 토큰</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DENO_AUTH_TOKENS</span><span class="token operator">=</span>a1b2c3d4e5f6@deno.land<span class="token punctuation">;</span>f1e2d3c4b5a6@example.com:8080\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>will set the <code>Authorization</code> header of the request to the value of <code>Bearer {token}</code></li></ul><h3 id="github"><a class="header-anchor" href="#github">#</a> Github</h3><ul><li>Settings -&gt; Developer settings -&gt; Personal access tokens</li><li>Generate new token</li><li><code>DENO_AUTH_TOKENS</code> 환경변수 scoped to the <code>raw.githubusercontent.com</code> hostname</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DENO_AUTH_TOKENS</span><span class="token operator">=</span>a1b2c3d4e5f6@raw.githubusercontent.com\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><code>deno run -L debug</code></li></ul><h2 id="import-maps"><a class="header-anchor" href="#import-maps">#</a> Import maps</h2>',28),i={href:"https://github.com/WICG/import-maps",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("import maps"),u=(0,e.Wm)("p",null,"근데 자세히는 이게 뭔지 잘 모름...ㅎ",-1),d=(0,e.uE)('<ul><li><code>--import-map=&lt;FILE&gt;</code></li></ul><details class="custom-container details"><summary>예시</summary><ul><li><code>import_map.json</code></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n   <span class="token property">&quot;imports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;fmt/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://deno.land/std@0.95.0/fmt/&quot;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><code>color.ts</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> red <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;fmt/colors.ts&quot;</span><span class="token punctuation">;</span>\n\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">red</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>실행</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno run --import-map<span class="token operator">=</span>import_map.json color.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>absolute 도 가능</li><li><code>import_map.json</code>과 <code>main.ts</code></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;imports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;./&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MyUtil <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/util.ts&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>This causes import specifiers starting with <code>/</code> to be resolved relative to the import map&#39;s URL or file path.</li></ul></details>',2),m={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[l,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("a",t,[o,(0,e.Wm)(a)])]),p]),c,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("a",i,[r,(0,e.Wm)(a)])]),u]),d],64)}}},3077:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-610b3bf1",path:"/runtime/deno/external.html",title:"외부 라이브러리와 연결하기",lang:"ko-KR",frontmatter:{sidebar:"auto",prev:"./the-runtime.md",next:"./using-typescript.md"},excerpt:"",headers:[{level:2,title:"모듈 재장전",slug:"모듈-재장전",children:[{level:3,title:"To reload everything",slug:"to-reload-everything",children:[]},{level:3,title:"To reload specific modules",slug:"to-reload-specific-modules",children:[]}]},{level:2,title:"Integrity checking",slug:"integrity-checking",children:[{level:3,title:"Runtime verification",slug:"runtime-verification",children:[]}]},{level:2,title:"프록시",slug:"프록시",children:[]},{level:2,title:"Private 모듈",slug:"private-모듈",children:[{level:3,title:"DENO_AUTH_TOKENS",slug:"deno-auth-tokens",children:[]},{level:3,title:"Github",slug:"github",children:[]}]},{level:2,title:"Import maps",slug:"import-maps",children:[]}],filePathRelative:"runtime/deno/external.md",git:{updatedTime:162062034e4}}}}]);