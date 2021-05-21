(self.webpackChunktil=self.webpackChunktil||[]).push([[8718],{6685:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>L});var e=a(6252);const t=(0,e.uE)('<h1 id="typescript-사용하기"><a class="header-anchor" href="#typescript-사용하기">#</a> Typescript 사용하기</h1><h2 id="overview"><a class="header-anchor" href="#overview">#</a> Overview</h2><h3 id="작동원리"><a class="header-anchor" href="#작동원리">#</a> 작동원리</h3>',3),p={href:"https://deno.land/manual@v1.9.2/typescript/overview#how-does-it-work",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("원문 how does it work"),l=(0,e.uE)('<h3 id="타입체킹"><a class="header-anchor" href="#타입체킹">#</a> 타입체킹</h3><ul><li><code>--no-check</code> 로 타입체킹 안하고 실행 퍼포먼스를 높일 수 있음!</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno run --no-check something.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="파일-타입-결정하기"><a class="header-anchor" href="#파일-타입-결정하기">#</a> 파일 타입 결정하기</h3><ul><li>local 에서는 extension 에 의해서 이루어진다. 없다면 JSX, TSX, TS 모두 js 로 간주된다.</li><li>remote 에서는 mime-type 으로 결정한다. <ul><li>애매한 경우 모듈의 경로 또한 이용한다. <code>d.ts</code> 와 <code>ts</code></li></ul></li></ul><h4 id="지원하는-파일타입"><a class="header-anchor" href="#지원하는-파일타입">#</a> 지원하는 파일타입</h4>',6),c=(0,e.Uk)("모든 목록은 "),i={href:"https://deno.land/manual@v1.9.2/typescript/overview#supported-media-types",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("원문 해당 섹션"),u=(0,e.Uk)("참조"),d=(0,e.uE)('<table><thead><tr><th style="text-align:center;">media type</th><th style="text-align:center;">How file is handled</th></tr></thead><tbody><tr><td style="text-align:center;"><code>application/typescript</code></td><td style="text-align:center;">TypeScript (with path extension influence)</td></tr><tr><td style="text-align:center;"><code>text/typescript</code></td><td style="text-align:center;">TypeScript (with path extension influence)</td></tr><tr><td style="text-align:center;"><code>video/mp2t</code></td><td style="text-align:center;">TypeScript (with path extension influence)</td></tr><tr><td style="text-align:center;"><code>text/jsx</code></td><td style="text-align:center;">JSX</td></tr><tr><td style="text-align:center;"><code>text/tsx</code></td><td style="text-align:center;">TSX</td></tr><tr><td style="text-align:center;"><code>text/plain</code></td><td style="text-align:center;">파일경로, 안되면 unknown</td></tr></tbody></table><h3 id="strict-by-default"><a class="header-anchor" href="#strict-by-default">#</a> Strict by default</h3><ul><li>Deno 는 default 로 strict mode 다</li></ul><h3 id="js-와-섞임"><a class="header-anchor" href="#js-와-섞임">#</a> JS 와 섞임</h3>',4),k=(0,e.Uk)("javascript 의 타입체크는 하지 않는다 by default "),m={href:"https://deno.land/manual@v1.9.2/typescript/configuration",target:"_blank",rel:"noopener noreferrer"},b=(0,e.Uk)("config"),h=(0,e.Uk)("로 바꿀 수 있다."),g=(0,e.Wm)("li",null,"js 를 ts 에 importing 하거나 그 반대의 시나리오는 지원하지 않는다.",-1),f=(0,e.uE)('<h3 id="터미널에서의-진단"><a class="header-anchor" href="#터미널에서의-진단">#</a> 터미널에서의 진단</h3><ul><li>다음을 통해 무시 <ul><li><code>// @ts-ignore</code></li><li><code>// @ts-expect-error</code></li><li><code>--no-check</code></li></ul></li></ul><h3 id="타입-resolution"><a class="header-anchor" href="#타입-resolution">#</a> 타입 resolution</h3><ul><li>코어 디자인 principle 이 &quot;magical&quot; resolution 을 피하는데 있다.</li></ul><h2 id="타입스크립트-configuration"><a class="header-anchor" href="#타입스크립트-configuration">#</a> 타입스크립트 Configuration</h2><ul><li>Deno Default 사용 권장. 배포 시 사용자지정 config 파일도 필요하기 때문.</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> deno run --config ./tsconfig.json main.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="사용-가능-옵션-표"><a class="header-anchor" href="#사용-가능-옵션-표">#</a> 사용 가능 옵션 표</h3><ul><li><code>compilerOptions</code> 의 일부</li></ul>',9),v={href:"https://deno.land/manual/typescript/configuration#how-deno-uses-a-configuration-file",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("원문 how deno uses a configuration file 참조"),q=(0,e.uE)('<h3 id="예시-tsconfig-json"><a class="header-anchor" href="#예시-tsconfig-json">#</a> 예시 <code>tsconfig.json</code></h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;deno.window&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;useDefineForClassFields&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li><code>deno types</code> on the command line <ul><li>and piping the output to a file</li><li>and including that in the files as part of the program</li><li>removing the <code>&quot;lib&quot;</code> option</li><li>and setting the <code>&quot;noLib&quot;</code> option to true.</li></ul></li><li><code>--unstable</code> flag</li><li><code>&quot;lib&quot;</code> option to <code>[ &quot;deno.window&quot;, &quot;deno.unstable&quot; ]</code></li><li>load a worker: <code>&quot;deno.worker&quot;</code> instead of <code>&quot;deno.window&quot;</code></li></ul><h2 id="타입과-타입-선언"><a class="header-anchor" href="#타입과-타입-선언">#</a> 타입과 타입 선언</h2><ul><li>no magical resolution</li><li>importer가 아닌 supplier가 모듈의 타입을 명시</li></ul><h3 id="가져오기-시-타입-제공"><a class="header-anchor" href="#가져오기-시-타입-제공">#</a> 가져오기 시 타입 제공</h3><ul><li><code>// @deno-type=&quot;path/of/type/declaration&quot;</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// @deno-types=&quot;./coolLib.d.ts&quot;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> coolLib <span class="token keyword">from</span> <span class="token string">&quot;./coolLib.js&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="호스팅-시-타입-제공"><a class="header-anchor" href="#호스팅-시-타입-제공">#</a> 호스팅 시 타입 제공</h3><h4 id="triple-slash"><a class="header-anchor" href="#triple-slash">#</a> Triple slash</h4><ul><li><code>/// &lt;reference path=&quot;./coolLib.d.ts&quot; /&gt;</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/// &lt;reference path=&quot;./coolLib.d.ts&quot; /&gt;</span>\n\n<span class="token comment">// ... the rest of the JavaScript ...</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="x-typescript-types-header"><a class="header-anchor" href="#x-typescript-types-header">#</a> X-TypeScript-Types header</h4><ul><li><code>https://example.com/coolLib.js</code></li><li><code>https://example.com/coolLib.d.ts</code></li></ul><div class="language-response ext-response line-numbers-mode"><pre class="language-response"><code>HTTP/1.1 200 OK\nContent-Type: application/javascript; charset=UTF-8\nContent-Length: 648\nX-TypeScript-Types: ./coolLib.d.ts\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="중요한-점"><a class="header-anchor" href="#중요한-점">#</a> 중요한 점</h3><h4 id="타입-선언-semantics"><a class="header-anchor" href="#타입-선언-semantics">#</a> 타입 선언 semantics</h4><ul><li><code>d.ts</code>: UMD declarations and not ambient/global declarations <ul><li>아니면 Deno랑 호환 안될수도</li></ul></li></ul><h4 id="deno-친화적-cdn"><a class="header-anchor" href="#deno-친화적-cdn">#</a> Deno 친화적 CDN</h4>',19),w={href:"https://docs.skypack.dev/skypack-cdn/code/deno",target:"_blank",rel:"noopener noreferrer"},x=(0,e.Uk)("skypack"),j=(0,e.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// X-TypeScript-Types 헤더, ?dts 쿼리로 원격임을 명시</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;https://cdn.skypack.dev/react?dts&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="타입-체킹-시-js-behavior"><a class="header-anchor" href="#타입-체킹-시-js-behavior">#</a> 타입 체킹 시 JS Behavior</h3><ul><li>타입스크립트 컴파일러에서 어짜피 정적 분석을 하긴함. <code>&quot;checkJs&quot;: false</code>여도.</li><li>하지만, 다음의 경우 문제가 될 수 있으니까 JS 경우 위의 형식으로 타입제공을 해주자 <ul><li>special packaging, global UMD module, TypeScript&#39;s analysis of the module</li></ul></li></ul><h4 id="내부에서는"><a class="header-anchor" href="#내부에서는">#</a> 내부에서는</h4><ul><li>컴파일 / 실행하기 까지의 순서 <ul><li>루트 모듈을 파싱하여 그래프 생성</li><li>그리고 의존성을 감지</li><li>디펜던시 모듈들을 다시 파싱 / 의존성 감지</li><li>이 과정을 모든 의존성들이 retrieve 될 때 까지 recursively do</li><li>컴파일 / 실행</li></ul></li><li>각 의존성 마다 두 개의 잠재적 <code>slot</code>이 사용 <ul><li>code slot: 예) <code>.js</code></li><li>type slot: 예) <code>.d.ts</code></li></ul></li><li>그래프 빌드 이후에 타입 체크가 필요할 경우 <ul><li>TS compiler 시작, 잠재적으로 JS로 emit 될 필요가 있는 모듈에 feeds it</li><li>TS 컴파일러가 추가적인 모듈을 요청하고, Deno가 의존성 때문에 슬롯을 살펴보고, 코드슬롯 채워지기전에 타입슬롯을 제공</li></ul></li><li>이는 모듈 resolving 대신에 타입스크립트로 <code>.d.ts</code> 제공, 아님 위의 방법대로 제공하는 것을 말함!</li></ul><h2 id="자바스크립트-에서-로-마이그레이션"><a class="header-anchor" href="#자바스크립트-에서-로-마이그레이션">#</a> 자바스크립트 에서/로 마이그레이션</h2><h3 id="자바스크립트-타입-체킹"><a class="header-anchor" href="#자바스크립트-타입-체킹">#</a> 자바스크립트 타입 체킹</h3><ul><li>TypeScript type checker instead of everywhere type annotation</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// @ts-check</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>Config file: <code>--config</code> option</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="jsdoc"><a class="header-anchor" href="#jsdoc">#</a> JSDoc</h3>',12),W={href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html",target:"_blank",rel:"noopener noreferrer"},S=(0,e.Uk)("typescirpt jsdoc"),D=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> */</span>\n<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="타입-체크-스킵하기"><a class="header-anchor" href="#타입-체크-스킵하기">#</a> 타입 체크 스킵하기</h3><ul><li><code>--no-check</code> option</li><li>or pragma</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// @ts-nocheck</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="js-파일을-ts-파일로-이름-재정의"><a class="header-anchor" href="#js-파일을-ts-파일로-이름-재정의">#</a> js 파일을 ts 파일로 이름 재정의</h3><ul><li>deno가 <code>strict</code> 모드라서 몇 몇은 안될 수도 있다.</li></ul><h2 id="런타임-컴파일러-apis"><a class="header-anchor" href="#런타임-컴파일러-apis">#</a> 런타임 컴파일러 APIs</h2><blockquote><p><code>--unstable</code> 해야 쓸 수 있음</p></blockquote><h3 id="deno-emit"><a class="header-anchor" href="#deno-emit">#</a> Deno.emit()</h3>',9),T={class:"custom-container details"},J=(0,e.uE)('<summary>자세히</summary><ul><li>정의</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">emit</span><span class="token punctuation">(</span>\n  rootSpecifier<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token constant">URL</span><span class="token punctuation">,</span>\n  options<span class="token operator">?</span><span class="token operator">:</span> EmitOptions<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>EmitResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>옵션</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">EmitOptions</span> <span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/** Indicate that the source code should be emitted to a single file\n    * JavaScript bundle that is a single ES module (`&quot;esm&quot;`) or a single file\n    * self contained script we executes in an immediately invoked function\n    * when loaded (`&quot;iife&quot;`). */</span>\n  bundle<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;esm&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;iife&quot;</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** If `true` then the sources will be typed checked, returning any\n    * diagnostic errors in the result.  If `false` type checking will be\n    * skipped.  Defaults to `true`.\n    *\n    * *Note* by default, only TypeScript will be type checked, just like on\n    * the command line.  Use the `compilerOptions` options of `checkJs` to\n    * enable type checking of JavaScript. */</span>\n  check<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** A set of options that are aligned to TypeScript compiler options that\n    * are supported by Deno. */</span>\n  compilerOptions<span class="token operator">?</span><span class="token operator">:</span> CompilerOptions<span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** An [import-map](https://deno.land/manual/linking_to_external_code/import_maps#import-maps)\n    * which will be applied to the imports. */</span>\n  importMap<span class="token operator">?</span><span class="token operator">:</span> ImportMap<span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** An absolute path to an [import-map](https://deno.land/manual/linking_to_external_code/import_maps#import-maps).\n    * Required to be specified if an `importMap` is specified to be able to\n    * determine resolution of relative paths. If a `importMap` is not\n    * specified, then it will assumed the file path points to an import map on\n    * disk and will be attempted to be loaded based on current runtime\n    * permissions.\n    */</span>\n  importMapPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** A record of sources to use when doing the emit.  If provided, Deno will\n    * use these sources instead of trying to resolve the modules externally. */</span>\n  sources<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li>결과</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">EmitResult</span> <span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/** Diagnostic messages returned from the type checker (`tsc`). */</span>\n  diagnostics<span class="token operator">:</span> Diagnostic<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** Any emitted files.  If bundled, then the JavaScript will have the\n   * key of `deno:///bundle.js` with an optional map (based on\n   * `compilerOptions`) in `deno:///bundle.js.map`. */</span>\n  files<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** An optional array of any compiler options that were ignored by Deno. */</span>\n  ignoredOptions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** An array of internal statistics related to the emit, for diagnostic\n   * purposes. */</span>\n  stats<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="외부-소스-사용하기"><a class="header-anchor" href="#외부-소스-사용하기">#</a> 외부 소스 사용하기</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;mod.ts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>fileName<span class="token punctuation">,</span> text<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">emitted </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with a length of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>text<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// something went wrong, inspect `e` to determine</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="옵션들-사용하기"><a class="header-anchor" href="#옵션들-사용하기">#</a> 옵션들 사용하기</h3><ul><li><code>source</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;/mod.ts&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  sources<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;/mod.ts&quot;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">import * as a from &quot;./a.ts&quot;;\\nconsole.log(a);\\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token string">&quot;/a.ts&quot;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">export const a: Record&lt;string, string&gt; = {};\\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>타입체킹 (JS)</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> files<span class="token punctuation">,</span> diagnostics <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;./mod.js&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  compilerOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n    checkJs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> files<span class="token punctuation">,</span> diagnostics <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;./mod.ts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>diagnostics<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// there is something that impacted the emit</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>Deno<span class="token punctuation">.</span><span class="token function">formatDiagnostics</span><span class="token punctuation">(</span>diagnostics<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>타입체킹 스킵 (TS 까지)</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;./mod.ts&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  check<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>번들링: 워커스크립트는 안가져옴</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> files<span class="token punctuation">,</span> diagnostics <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;./mod.ts&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  bundle<span class="token operator">:</span> <span class="token string">&quot;esm&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>importMap</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> files <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> Deno<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;mod.ts&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  bundle<span class="token operator">:</span> <span class="token string">&quot;esm&quot;</span><span class="token punctuation">,</span>\n  importMap<span class="token operator">:</span> <span class="token punctuation">{</span>\n    imports<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&quot;lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://deno.land/x/lodash&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  importMapPath<span class="token operator">:</span> <span class="token string">&quot;file:///import-map.json&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',21),O={href:"https://doc.deno.land/builtin/unstable#Deno.CompilerOptions",target:"_blank",rel:"noopener noreferrer"},U=(0,e.Wm)("code",null,"CompilerOptions",-1),_=(0,e.Uk)(" 목록"),A=(0,e.Wm)("h2",{id:"faq"},[(0,e.Wm)("a",{class:"header-anchor",href:"#faq"},"#"),(0,e.Uk)(" FAQ")],-1),E=(0,e.Wm)("div",{class:"custom-container danger"},[(0,e.Wm)("p",{class:"custom-container-title"},"주의"),(0,e.Wm)("p",null,"5월 11부터 1.10.1 이 릴리즈되었다. 여기부턴 1.10.1 버전의 메뉴얼을 기준으로 한다.")],-1),M={href:"https://deno.land/manual@v1.10.1/typescript/faqs",target:"_blank",rel:"noopener noreferrer"},C=(0,e.Uk)("FAQ"),L={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("a",p,[o,(0,e.Wm)(a)])])]),l,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[c,(0,e.Wm)("a",i,[r,(0,e.Wm)(a)]),u])]),d,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[k,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",m,[b,(0,e.Wm)(a)]),h])])]),g]),f,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("a",v,[y,(0,e.Wm)(a)])])]),q,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",w,[x,(0,e.Wm)(a)])])]),j,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",W,[S,(0,e.Wm)(a)])])]),D,(0,e.Wm)("details",T,[J,(0,e.Wm)("ul",null,[(0,e.Wm)("li",null,[(0,e.Wm)("a",O,[U,_,(0,e.Wm)(a)])])])]),A,E,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[(0,e.Wm)("a",M,[C,(0,e.Wm)(a)])])])],64)}}},4740:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-f47a4da4",path:"/runtime/deno/using-typescript.html",title:"Typescript 사용하기",lang:"ko-KR",frontmatter:{sidebar:"auto",prev:"./external.md",next:"./standard-library.md"},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[{level:3,title:"작동원리",slug:"작동원리",children:[]},{level:3,title:"타입체킹",slug:"타입체킹",children:[]},{level:3,title:"파일 타입 결정하기",slug:"파일-타입-결정하기",children:[]},{level:3,title:"Strict by default",slug:"strict-by-default",children:[]},{level:3,title:"JS 와 섞임",slug:"js-와-섞임",children:[]},{level:3,title:"터미널에서의 진단",slug:"터미널에서의-진단",children:[]},{level:3,title:"타입 resolution",slug:"타입-resolution",children:[]}]},{level:2,title:"타입스크립트 Configuration",slug:"타입스크립트-configuration",children:[{level:3,title:"사용 가능 옵션 표",slug:"사용-가능-옵션-표",children:[]},{level:3,title:"예시 tsconfig.json",slug:"예시-tsconfig-json",children:[]}]},{level:2,title:"타입과 타입 선언",slug:"타입과-타입-선언",children:[{level:3,title:"가져오기 시 타입 제공",slug:"가져오기-시-타입-제공",children:[]},{level:3,title:"호스팅 시 타입 제공",slug:"호스팅-시-타입-제공",children:[]},{level:3,title:"중요한 점",slug:"중요한-점",children:[]},{level:3,title:"타입 체킹 시 JS Behavior",slug:"타입-체킹-시-js-behavior",children:[]}]},{level:2,title:"자바스크립트 에서/로 마이그레이션",slug:"자바스크립트-에서-로-마이그레이션",children:[{level:3,title:"자바스크립트 타입 체킹",slug:"자바스크립트-타입-체킹",children:[]},{level:3,title:"JSDoc",slug:"jsdoc",children:[]},{level:3,title:"타입 체크 스킵하기",slug:"타입-체크-스킵하기",children:[]},{level:3,title:"js 파일을 ts 파일로 이름 재정의",slug:"js-파일을-ts-파일로-이름-재정의",children:[]}]},{level:2,title:"런타임 컴파일러 APIs",slug:"런타임-컴파일러-apis",children:[{level:3,title:"Deno.emit()",slug:"deno-emit",children:[]},{level:3,title:"외부 소스 사용하기",slug:"외부-소스-사용하기",children:[]},{level:3,title:"옵션들 사용하기",slug:"옵션들-사용하기",children:[]}]},{level:2,title:"FAQ",slug:"faq",children:[]}],filePathRelative:"runtime/deno/using-typescript.md",git:{updatedTime:1621262143e3}}}}]);