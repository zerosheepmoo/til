(self.webpackChunktil=self.webpackChunktil||[]).push([[8466],{9353:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var e=a(6252);const p=(0,e.Wm)("h1",{id:"기여하기"},[(0,e.Wm)("a",{class:"header-anchor",href:"#기여하기"},"#"),(0,e.Uk)(" 기여하기")],-1),t=(0,e.Uk)("이 항목은 필요할 때 "),o={href:"https://deno.land/manual@v1.11.0/contributing/style_guide",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("원본 메뉴얼"),c=(0,e.Uk)(" 을 참고한다."),r=(0,e.Wm)("p",null,[(0,e.Uk)("단, 스타일 가이드는 "),(0,e.Wm)("strong",null,"다른 프로젝트 진행 시에도 참조"),(0,e.Uk)("할만 하다.")],-1),i=(0,e.uE)('<h2 id="스타일-가이드"><a class="header-anchor" href="#스타일-가이드">#</a> 스타일 가이드</h2><h3 id="저작권-헤더"><a class="header-anchor" href="#저작권-헤더">#</a> 저작권 헤더</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="파일명에는-dash-대신-underscore-사용하기"><a class="header-anchor" href="#파일명에는-dash-대신-underscore-사용하기">#</a> 파일명에는 dash 대신 underscore 사용하기</h3><h3 id="새-기능에는-테스트-추가"><a class="header-anchor" href="#새-기능에는-테스트-추가">#</a> 새 기능에는 테스트 추가</h3><h3 id="todo-코멘트"><a class="header-anchor" href="#todo-코멘트">#</a> TODO 코멘트</h3><ul><li>이슈 또는 작성자 명</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// TODO(ry): Add tests.</span>\n<span class="token comment">// TODO(#123): Support Windows.</span>\n<span class="token comment">// FIXME(#349): Sometimes panics.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="meta-programming-is-discouraged-including-the-use-of-proxy"><a class="header-anchor" href="#meta-programming-is-discouraged-including-the-use-of-proxy">#</a> Meta-programming is discouraged. Including the use of Proxy</h3><h3 id="타입스크립트"><a class="header-anchor" href="#타입스크립트">#</a> 타입스크립트</h3><ul><li>자바스크립트 대신 타입스크립트 사용하기</li><li>라이브러리나 패키지라는 용어 대신 모듈이라는 용어 사용하기</li><li><code>index.ts</code> 대신 <code>mod.ts</code> 사용하기</li></ul><h3 id="외부로-내보내기-하는-함수-최대-2개-argument"><a class="header-anchor" href="#외부로-내보내기-하는-함수-최대-2개-argument">#</a> 외부로 내보내기 하는 함수: 최대 2개 argument</h3><ul><li>필요하면 option 오브젝트까지 3개</li><li>optional parameter 는 옵션 오브젝트안에</li><li>플레인한 오브젝트에만 options argument 사용, 아닌 경우는... <ul><li>a distinguishing prototype (e.g. <code>Array</code>, <code>Map</code>, <code>Date</code>, <code>class MyThing</code>).</li><li>a well-known symbol property (e.g. an iterable with <code>Symbol.iterator</code>).</li></ul></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// BAD: optional parameters not part of options object. (#2)</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span>\n  hostname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  family<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;ipv4&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;ipv6&quot;</span><span class="token punctuation">,</span>\n  timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> IPAddress<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// GOOD.</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ResolveOptions</span> <span class="token punctuation">{</span>\n  family<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;ipv4&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;ipv6&quot;</span><span class="token punctuation">;</span>\n  timeout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span>\n  hostname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  options<span class="token operator">:</span> ResolveOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> IPAddress<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Environment</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">// BAD: `env` could be a regular Object and is therefore indistinguishable</span>\n<span class="token comment">// from an options object. (#3)</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">runShellWithEnv</span><span class="token punctuation">(</span>cmdline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> env<span class="token operator">:</span> Environment<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// GOOD.</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RunShellOptions</span> <span class="token punctuation">{</span>\n  env<span class="token operator">:</span> Environment<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">runShellWithEnv</span><span class="token punctuation">(</span>\n  cmdline<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  options<span class="token operator">:</span> RunShellOptions<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n\n<span class="token comment">// BAD: more than 3 arguments (#1), multiple optional parameters (#2).</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renameSync</span><span class="token punctuation">(</span>\n  oldname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  newname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  replaceExisting<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  followLinks<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// GOOD.</span>\n<span class="token keyword">interface</span> <span class="token class-name">RenameOptions</span> <span class="token punctuation">{</span>\n  replaceExisting<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  followLinks<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">renameSync</span><span class="token punctuation">(</span>\n  oldname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  newname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  options<span class="token operator">:</span> RenameOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n\n<span class="token comment">// BAD: too many arguments. (#1)</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pwrite</span><span class="token punctuation">(</span>\n  fd<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n  buffer<span class="token operator">:</span> TypedArray<span class="token punctuation">,</span>\n  offset<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n  position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// BETTER.</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PWrite</span> <span class="token punctuation">{</span>\n  fd<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  buffer<span class="token operator">:</span> TypedArray<span class="token punctuation">;</span>\n  offset<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pwrite</span><span class="token punctuation">(</span>options<span class="token operator">:</span> PWrite<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><h3 id="외부로-내보내기-하는-멤버의-파라미터-인터페이스도-내보내기"><a class="header-anchor" href="#외부로-내보내기-하는-멤버의-파라미터-인터페이스도-내보내기">#</a> 외부로 내보내기 하는 멤버의 파라미터 인터페이스도 내보내기</h3><h3 id="의존성-줄이고-순환-의존성-없애기"><a class="header-anchor" href="#의존성-줄이고-순환-의존성-없애기">#</a> 의존성 줄이고, 순환 의존성 없애기</h3><h3 id="선행-밑줄-파일명에는-링크-금지"><a class="header-anchor" href="#선행-밑줄-파일명에는-링크-금지">#</a> 선행 밑줄 파일명에는 링크 금지</h3><h3 id="jsdoc-사용"><a class="header-anchor" href="#jsdoc-사용">#</a> JSDoc 사용</h3><h3 id="테스트모듈-하나씩-독립적인-유닛테스트"><a class="header-anchor" href="#테스트모듈-하나씩-독립적인-유닛테스트">#</a> 테스트모듈 하나씩, 독립적인 유닛테스트</h3><h3 id="최상위-레벨-함수는-arrow-function-금지"><a class="header-anchor" href="#최상위-레벨-함수는-arrow-function-금지">#</a> 최상위 레벨 함수는 arrow function 금지</h3>',20),u={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("blockquote",null,[(0,e.Wm)("p",null,[t,(0,e.Wm)("a",o,[l,(0,e.Wm)(a)]),c]),r]),i],64)}}},5848:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-6e5d7db2",path:"/runtime/deno/contributing.html",title:"기여하기",lang:"ko-KR",frontmatter:{prev:"./tools.md"},excerpt:"",headers:[{level:2,title:"스타일 가이드",slug:"스타일-가이드",children:[{level:3,title:"저작권 헤더",slug:"저작권-헤더",children:[]},{level:3,title:"파일명에는 dash 대신 underscore 사용하기",slug:"파일명에는-dash-대신-underscore-사용하기",children:[]},{level:3,title:"새 기능에는 테스트 추가",slug:"새-기능에는-테스트-추가",children:[]},{level:3,title:"TODO 코멘트",slug:"todo-코멘트",children:[]},{level:3,title:"Meta-programming is discouraged. Including the use of Proxy",slug:"meta-programming-is-discouraged-including-the-use-of-proxy",children:[]},{level:3,title:"타입스크립트",slug:"타입스크립트",children:[]},{level:3,title:"외부로 내보내기 하는 함수: 최대 2개 argument",slug:"외부로-내보내기-하는-함수-최대-2개-argument",children:[]},{level:3,title:"외부로 내보내기 하는 멤버의 파라미터 인터페이스도 내보내기",slug:"외부로-내보내기-하는-멤버의-파라미터-인터페이스도-내보내기",children:[]},{level:3,title:"의존성 줄이고, 순환 의존성 없애기",slug:"의존성-줄이고-순환-의존성-없애기",children:[]},{level:3,title:"선행 밑줄 파일명에는 링크 금지",slug:"선행-밑줄-파일명에는-링크-금지",children:[]},{level:3,title:"JSDoc 사용",slug:"jsdoc-사용",children:[]},{level:3,title:"테스트모듈 하나씩, 독립적인 유닛테스트",slug:"테스트모듈-하나씩-독립적인-유닛테스트",children:[]},{level:3,title:"최상위 레벨 함수는 arrow function 금지",slug:"최상위-레벨-함수는-arrow-function-금지",children:[]}]}],filePathRelative:"runtime/deno/contributing.md",git:{updatedTime:1623301024e3}}}}]);