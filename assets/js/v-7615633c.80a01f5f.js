(self.webpackChunktil=self.webpackChunktil||[]).push([[643],{4950:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>G});var n=s(6252);const r=(0,n.Wm)("h1",{id:"client-side-storage"},[(0,n.Wm)("a",{class:"header-anchor",href:"#client-side-storage"},"#"),(0,n.Uk)(" Client Side Storage")],-1),t={href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage",target:"_blank",rel:"noopener noreferrer"},l=(0,n.Uk)("MDN web Docs"),o=(0,n.uE)('<h2 id="overview"><a class="header-anchor" href="#overview">#</a> Overview</h2><p>모던 웹브라우저들은 사용자의 permission 하에 사용자의 컴퓨터에 데이터를 저장하는 방법들은 제공한다. 그리고 필요할 땐 retrieve 하고... 이 포스팅의 목적은 장기간 저장, 오프라인에서의 웹앱 사용, 유저별 설정 유지 등을 구현하는 방법을 학슴함에 있다. 간략히 어떤 기술이 있는지만 설명하며, 근시일 내에 사용하는 법과 예제를 작성할 예정이다.</p><p>대부분 모던 웹사이트들은 동적이다.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> 서버에 database 를 이용해 데이터를 저장(server-side storage)하고 필요한 데이터를 retrieve 하기 위해 서버 사이드의 코드를 실행한다. 그 후 스태틱 페이지 템플릿에 삽입하고, 결과 HTML을 사용자의 브라우저로 display 하기 위해 클라이언트에게 제공(serve)한다.</p><p>Client Side Storage 도 비슷한 원칙에 따라 작동하지만 용도가 다르다. 클라이언트(사용자의 컴퓨터)에 데이터를 저장 한 다음 필요할 때 retrieve 할 수있는 JavaScript API로 구성된다.</p><h3 id="사용처"><a class="header-anchor" href="#사용처">#</a> 사용처</h3><ul><li>개인별 사용 설정(사용자 정의 위젯, 컬러 scheme, 폰트 크기)</li><li>이전 사이트 활동 유지(장바구니, 로그인 했는지 등)</li><li>퍼포먼스 향상</li><li>오프라인에서의 웹앱 사용</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>일반적으로 client-side 와 server-side storage 는 같이 쓰인다.</p></div>',7),i={class:"custom-container warning"},c=(0,n.Wm)("p",{class:"custom-container-title"},"WARNING",-1),p={href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("저장용량제한"),h=(0,n.Wm)("h3",{id:"쿠키"},[(0,n.Wm)("a",{class:"header-anchor",href:"#쿠키"},"#"),(0,n.Uk)(" 쿠키")],-1),u=(0,n.Wm)("li",null,"더 이상 클라이언트 사이드 스토리지를 위해서는 사용하지 않는다. (다른 용도로는 사용)",-1),m={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("HTTP 쿠키 사용하기"),f=(0,n.Uk)(" 참고"),k=(0,n.uE)('<h3 id="web-storage-와-indexeddb"><a class="header-anchor" href="#web-storage-와-indexeddb">#</a> Web Storage 와 IndexedDB</h3><ul><li><a href="#webstorage">웹 스토리지</a>는 로그인 관련 정보, 배경색 등 간단한 형태의 데이터를 저장하는데 적합하다.</li><li><a href="#indexeddb">IndexedDB</a>는 complete sets of customer records, 오디오나 비디오 등의 복잡한 형태의 데이터를 저장하는데 적합하디.</li></ul><h3 id="future-cache-api"><a class="header-anchor" href="#future-cache-api">#</a> future: Cache API</h3><p>몇 모던 브라우저들은 새로운 <a href="#cache-api">Cache API</a> 를 제공한다. 이 API는 특정 HTTP 요청에 대한 HTTP 응답을 저장하고, 네트워크 커넥션이 없어도 웹사이트 어셋에 저장되어 동작하는 것을 위해 디자인되었다. 캐시는 주로 Service Worker API 와 함께 자주 사용된다.(반드시 그럴필요는 없지만)</p><h2 id="webstorage"><a class="header-anchor" href="#webstorage">#</a> WebStorage</h2>',5),v={href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",target:"_blank",rel:"noopener noreferrer"},b=(0,n.Uk)("MDN Web Storage API"),W=(0,n.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// save</span>\nlocalStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Chris&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// retrieve</span>\n<span class="token keyword">let</span> myName <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// remove</span>\nlocalStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>브라우저를 껐다가 켜도 잘 있음!</li><li>도메인마다 다르게 저장됨! (보안관련해서도 생각해보면 it makes sense!)</li></ul><h3 id="종류"><a class="header-anchor" href="#종류">#</a> 종류</h3><ul><li><code>sessionStorage</code>: 브라우저가 꺼지기 전까지 유지, 쿠키보다 용량이 큼 (최대 5MB).</li><li><code>localStorage</code>: 브라우저가 껐다 켜도 유지. expiration date 가 없고 javascript를 이용하거나 직접 제거해야함. 제일 용량이 큼.</li></ul><h2 id="indexeddb"><a class="header-anchor" href="#indexeddb">#</a> IndexedDB</h2>',5),I={href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",target:"_blank",rel:"noopener noreferrer"},S=(0,n.Uk)("MDN IndexedDB API"),P=(0,n.uE)('<h2 id="offline-asset-storage"><a class="header-anchor" href="#offline-asset-storage">#</a> Offline asset storage</h2><h3 id="service-worker"><a class="header-anchor" href="#service-worker">#</a> Service Worker?</h3><p>서비스 워커는 특정 오리진(웹사이트, 또는 특정 도메인에서의 웹사이트의 일부)이 브라우저에 의해 접근될 때, 그 오리진에 대해 등록되는 자바스크립트 파일이다. 등록되면 해당 오리진에서 사용 가능한 페이지를 제어 할 수 있다. 즉, 로드 된 페이지와 네트워크 사이에 페이지를 제어하며, 오리진을 겨냥한 네트워크 요청을 가로챈다(intercept).</p><p>고전적으로는 네트워크 응답을 오프라인으로 저장 한 다음 네트워크 응답 대신, 곧바로 요청에 대한 응답으로 제공한다. 이로써 특정 웹 앱이 <strong>완전한 오프라인 웹사이트 환경</strong>에서 작동할 수 있는 것이다.</p><p><strong>Cache API는 HTTP 응답을 저장하도록 설계</strong>되었기 때문에 서비스워커와 자주 같이 쓰이는 것.</p><blockquote><p>서비스 워커의 사용과 사용법 학습은 후에 예제를 만들어서 진행한다.</p></blockquote>',6),_={class:"custom-container tip"},w=(0,n.Wm)("p",{class:"custom-container-title"},"TIP",-1),U={href:"https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",target:"_blank",rel:"noopener noreferrer"},A=(0,n.Uk)("MDN 예제"),C=(0,n.Uk)(" 와 "),x={href:"https://github.com/mdn/learning-area/tree/master/javascript/apis/client-side-storage/cache-sw/video-store-offline",target:"_blank",rel:"noopener noreferrer"},D=(0,n.Uk)("소스코드"),T=(0,n.Wm)("h3",{id:"cache-api"},[(0,n.Wm)("a",{class:"header-anchor",href:"#cache-api"},"#"),(0,n.Uk)(" Cache API")],-1),B={href:"https://developer.mozilla.org/en-US/docs/Web/API/Cache",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("MDN Cache API"),z=(0,n.Uk)(" 참고"),N=(0,n.Wm)("hr",{class:"footnotes-sep"},null,-1),H={class:"footnotes"},M={class:"footnotes-list"},q={id:"fn1",class:"footnote-item"},L={href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview#static_sites",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("정적"),j=(0,n.Uk)(" 과 "),E={href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview#dynamic_sites",target:"_blank",rel:"noopener noreferrer"},R=(0,n.Uk)("동적"),F=(0,n.Uk)("사이트 "),J=(0,n.Wm)("a",{href:"#fnref1",class:"footnote-backref"},"↩︎",-1),G={render:function(e,a){const s=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[r,(0,n.Wm)("blockquote",null,[(0,n.Wm)("p",null,[(0,n.Wm)("a",t,[l,(0,n.Wm)(s)])])]),o,(0,n.Wm)("div",i,[c,(0,n.Wm)("p",null,[(0,n.Wm)("a",p,[d,(0,n.Wm)(s)])])]),h,(0,n.Wm)("ul",null,[u,(0,n.Wm)("li",null,[(0,n.Wm)("a",m,[g,(0,n.Wm)(s)]),f])]),k,(0,n.Wm)("blockquote",null,[(0,n.Wm)("p",null,[(0,n.Wm)("a",v,[b,(0,n.Wm)(s)])])]),W,(0,n.Wm)("blockquote",null,[(0,n.Wm)("p",null,[(0,n.Wm)("a",I,[S,(0,n.Wm)(s)])])]),P,(0,n.Wm)("div",_,[w,(0,n.Wm)("p",null,[(0,n.Wm)("a",U,[A,(0,n.Wm)(s)]),C,(0,n.Wm)("a",x,[D,(0,n.Wm)(s)])])]),T,(0,n.Wm)("blockquote",null,[(0,n.Wm)("p",null,[(0,n.Wm)("a",B,[y,(0,n.Wm)(s)]),z])]),N,(0,n.Wm)("section",H,[(0,n.Wm)("ol",M,[(0,n.Wm)("li",q,[(0,n.Wm)("p",null,[(0,n.Wm)("a",L,[O,(0,n.Wm)(s)]),j,(0,n.Wm)("a",E,[R,(0,n.Wm)(s)]),F,J])])])])],64)}}},4643:(e,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>n});const n={key:"v-7615633c",path:"/2021/04/12/clientsidestorage.html",title:"Client Side Storage",lang:"ko-KR",frontmatter:{permalinkPattern:"/:year/:month/:day/:slug.html",sidebar:"auto"},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[{level:3,title:"사용처",slug:"사용처",children:[]},{level:3,title:"쿠키",slug:"쿠키",children:[]},{level:3,title:"Web Storage 와 IndexedDB",slug:"web-storage-와-indexeddb",children:[]},{level:3,title:"future: Cache API",slug:"future-cache-api",children:[]}]},{level:2,title:"WebStorage",slug:"webstorage",children:[{level:3,title:"종류",slug:"종류",children:[]}]},{level:2,title:"IndexedDB",slug:"indexeddb",children:[]},{level:2,title:"Offline asset storage",slug:"offline-asset-storage",children:[{level:3,title:"Service Worker?",slug:"service-worker",children:[]},{level:3,title:"Cache API",slug:"cache-api",children:[]}]}],filePathRelative:"_posts/202104/2021-04-12-clientsidestorage.md",git:{updatedTime:1618238265e3}}}}]);