(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var l=a("FfOG");a.d(t,"a",(function(){return l["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var l=a("mn0l"),n=a("iojd"),c=a("ahKI"),r=a.n(c),m=a("vumQ"),o=a("17ds");a("Qf6j"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,c=e.showCopy,u=void 0===c||c,d=Object(o["useCopy"])(),i=Object(n["a"])(d,2),s=i[0],E=i[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(m["a"],Object(l["a"])({},m["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,l=e.style,n=e.tokens,c=e.getLineProps,m=e.getTokenProps;return r.a.createElement("pre",{className:a,style:l},u&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),n.map(((e,t)=>r.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>r.a.createElement("span",m({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("mn0l"),a("ahKI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var l=a("mn0l"),n=a("ahKI"),c=a.n(n);a("tCeM");t["a"]=e=>c.a.createElement("div",Object(l["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return j}));var l=a("ahKI"),n=a.n(l),c=a("iojd"),r=a("/7QA"),m=a("9kvl"),o=a("17ds"),u=a("wQXD"),d=a.n(u),i="https://codesandbox.io/api/v1/sandboxes/define";function s(e){return d.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function E(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",l={},n={},r=Object.values(e.dependencies).filter((e=>e.css)),m="app".concat(a),o="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],l=t[1].version;n[a]=l})),n["react-dom"]||(n["react-dom"]=n.react||"latest"),l["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},l["index.html"]={content:'<div id="root"></div>'},l[o]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(r.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var u=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],n=t[1],r=n.tsx,o=n.jsx,d=n.content,i={content:r||o||d};l["_"===a?m:a]=i,u=u||i.content.includes("from 'demos'"),i.content=i.content.replace("from 'demos'","from './demos-util'")})),u&&(n["lorem-ipsum"]="^2.0.8",l["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),l["package.json"]={content:JSON.stringify({name:e.title,main:o,dependencies:n,devDependencies:t?{typescript:"^3"}:{}},null,2)},s({files:l})}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a=Object(l["useState"])(),n=Object(c["a"])(a,2),r=n[0],m=n[1];return Object(l["useEffect"])((()=>{if(e){var a=document.createElement("form"),l=E(e);function n(e,t){var l=document.createElement("input");a.appendChild(l),l.name=e,l.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,n("parameters",l),n("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),m((()=>()=>a.submit())),()=>a.remove()}}),[e]),r}var h=a("Bjia");a("YWOM");function v(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var f=e=>{var t,a=Object(l["useRef"])(null),u=Object(l["useContext"])(o["context"]),d=u.locale,i=Object(o["useLocaleProps"])(d,e),s=(null===m["a"]||void 0===m["a"]?void 0:m["a"].location.hash)==="#".concat(i.identifier),E=1===Object.keys(i.sources).length,f=p(null!==(t=i.hideActions)&&void 0!==t&&t.includes("CSB")?null:i),b=Object(o["useMotions"])(i.motions||[],a.current),g=Object(c["a"])(b,2),k=g[0],y=g[1],x=Object(o["useCopy"])(),w=Object(c["a"])(x,2),j=w[0],O=w[1],_=Object(l["useState"])("_"),I=Object(c["a"])(_,2),N=I[0],L=I[1],C=Object(l["useState"])(v(N,i.sources[N])),A=Object(c["a"])(C,2),U=A[0],M=A[1],P=i.sources[N][U]||i.sources[N].content,S=Object(o["useTSPlaygroundUrl"])(d,P),T=Object(o["usePrefersColor"])(),Z=Object(c["a"])(T,1);Z[0];function V(e){L(e),M(v(e,i.sources[e]))}return n.a.createElement("div",{style:i.style,className:[i.className,"__dumi-default-previewer",s?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:i.identifier,"data-debug":i.debug||void 0},n.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":i.title},i.title&&n.a.createElement(o["AnchorLink"],{to:"#".concat(i.identifier)},i.title),i.description&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.description}})),n.a.createElement("div",{className:"__dumi-default-previewer-actions"},i.debug&&n.a.createElement("span",{className:"debug-badge"},"Debug Only"),f&&n.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:f}),i.motions&&n.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:y,onClick:()=>k()}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":O,onClick:()=>j(P)}),"tsx"===U&&n.a.createElement(o["Link"],{target:"_blank",to:S},n.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),n.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!E&&n.a.createElement(r["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:N,onChange:V},Object.keys(i.sources).map((e=>n.a.createElement(r["Tabs"].Tab,{title:"_"===e?"index.".concat(v(e,i.sources[e])):e,key:e})))),n.a.createElement("div",{className:"__dumi-default-previewer-source"},n.a.createElement(h["a"],{code:P,lang:U,showCopy:!1}))))},b=f,g=(a("oeoJ"),a("NEWu")),k=(a("q9vG"),e=>{var t=e.url,a=Object(l["useState"])(Math.random()),m=Object(c["a"])(a,2),u=m[0],d=m[1],i=Object(o["usePrefersColor"])(),s=Object(c["a"])(i,1),E=s[0],p=Object(l["useContext"])(o["context"]),h=p.config.mode;return Object(l["useEffect"])((()=>{d(Math.random())}),[E]),Object(l["useEffect"])((()=>{var e=["light","dark"].map((e=>window.matchMedia("(prefers-color-scheme: ".concat(e,")")))),t=()=>{d(Math.random())};e.forEach((e=>e.addEventListener("change",t)))}),[]),n.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":h},n.a.createElement("iframe",{title:"dumi-previewer",src:t,key:u}),n.a.createElement("div",{className:"adm-doc-device-action"},n.a.createElement("a",{onClick:()=>d(Math.random())},y),n.a.createElement(r["Popover"],{content:n.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},n.a.createElement("a",null,x)),n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},w)))}),y=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),x=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),w=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),j="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(o["useDemoUrl"])(e.identifier);return n.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},n.a.createElement("div",{className:"adm-doc-previewer-source"},n.a.createElement(b,e)),n.a.createElement("div",{className:"adm-doc-previewer-device"},n.a.createElement(k,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),c=a("eqKt"),r=a.n(c),m=e=>n.a.createElement("a",{className:r.a.card,href:e.link,target:"_blank"},e.image&&n.a.createElement("img",{src:e.image,alt:e.title}),n.a.createElement("div",{className:r.a.content},n.a.createElement("div",{className:r.a.title},e.title),n.a.createElement("div",{className:r.a.description},e.description)));t["a"]=m},hPU5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),c=a("bIC1"),r=a.n(c);a("nxnQ");function m(e,t){return s(e)||i(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function i(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,c=[],r=!0,m=!1;try{for(a=a.call(e);!(r=(l=a.next()).done);r=!0)if(c.push(l.value),t&&c.length===t)break}catch(o){m=!0,n=o}finally{try{r||null==a["return"]||a["return"]()}finally{if(m)throw n}}return c}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(l["useRef"])(),c=Object(l["useState"])(!1),o=m(c,2),u=o[0],d=o[1],i=Object(l["useState"])(!1),s=m(i,2),E=s[0],p=s[1];return Object(l["useEffect"])((function(){var e=a.current,t=r()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},mVOg:function(e,t,a){"use strict";var l=a("iojd"),n=a("ahKI"),c=a.n(n),r=a("17ds"),m=a("/7QA");t["a"]=()=>{var e=Object(n["useContext"])(r["context"]),t=e.locale,a=Object(n["useState"])(!1),o=Object(l["a"])(a,2),u=o[0],d=o[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(m["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:u,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},nxnQ:function(e,t,a){},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},wPdq:function(e,t,a){"use strict";a.r(t);var l=a("ahKI"),n=a.n(l),c=a("17ds"),r=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg")),m=a("ekZX"),o=(a("gKi5"),a("Bjia")),u=(a("0m3q"),a("hPU5")),d=n.a.memo((e=>{var t=e.demos,a=t["image-uploader-demo1"].component,l=t["image-uploader-demo2"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"imageuploader-\u56fe\u7247\u4e0a\u4f20"},n.a.createElement(c["AnchorLink"],{to:"#imageuploader-\u56fe\u7247\u4e0a\u4f20","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"ImageUploader \u56fe\u7247\u4e0a\u4f20 ",n.a.createElement(r["a"],null)),n.a.createElement("h2",{id:"\u793a\u4f8b"},n.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),n.a.createElement(m["default"],t["image-uploader-demo1"].previewerProps,n.a.createElement(a,null)),n.a.createElement(m["default"],t["image-uploader-demo2"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"imageuploader"},n.a.createElement(c["AnchorLink"],{to:"#imageuploader","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"ImageUploader"),n.a.createElement("h3",{id:"\u5c5e\u6027"},n.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"accept"),n.a.createElement("td",null,"\u6587\u4ef6\u7c7b\u578b\uff0c",n.a.createElement("code",null,"image/gif")," ",n.a.createElement("code",null,"image/jpeg")," ",n.a.createElement("code",null,"image/jpg")," ",n.a.createElement("code",null,"image/png")),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"image/*"))),n.a.createElement("tr",null,n.a.createElement("td",null,"beforeUpload"),n.a.createElement("td",null,"\u6587\u4ef6\u8bfb\u53d6\u524d\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8fd4\u56de ",n.a.createElement("code",null,"null")," \u53ef\u7ec8\u6b62\u6587\u4ef6\u8bfb\u53d6\uff0c\u652f\u6301\u8fd4\u56de ",n.a.createElement("code",null,"Promise")),n.a.createElement("td",null,n.a.createElement("code",null,"(file: File, files: File[]) => Promise<File | null> | File | null")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"capture"),n.a.createElement("td",null,"\u56fe\u7247\u9009\u53d6\u6a21\u5f0f\uff0c\u53ef\u9009\u503c\u4e3a ",n.a.createElement("code",null,"camera"),"\uff08\u76f4\u63a5\u8c03\u8d77\u6444\u50cf\u5934\uff09"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean | string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"children"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u4e0a\u4f20\u6309\u94ae"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"columns"),n.a.createElement("td",null,"\u5217\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultValue"),n.a.createElement("td",null,"\u9ed8\u8ba4\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868"),n.a.createElement("td",null,n.a.createElement("code",null,"ImageUploadItem[]")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"deletable"),n.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u5220\u9664\u6309\u94ae"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"deleteIcon"),n.a.createElement("td",null,"\u5220\u9664\u6309\u94ae\u7684 ",n.a.createElement("code",null,"icon")," \u56fe\u6807"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"<CloseOutline />"))),n.a.createElement("tr",null,n.a.createElement("td",null,"disableUpload"),n.a.createElement("td",null,"\u662f\u5426\u7981\u7528\u4e0a\u4f20\u6309\u94ae"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"imageFit"),n.a.createElement("td",null,"\u56fe\u7247\u586b\u5145\u6a21\u5f0f\uff0c\u540c ",n.a.createElement(c["AnchorLink"],{to:"/zh/components/image#%E5%B1%9E%E6%80%A7"},"Image")),n.a.createElement("td",null,n.a.createElement("code",null,"'contain' | 'cover' | 'fill' | 'none' | 'scale-down'")),n.a.createElement("td",null,n.a.createElement("code",null,"cover"))),n.a.createElement("tr",null,n.a.createElement("td",null,"maxCount"),n.a.createElement("td",null,"\u6700\u591a\u4e0a\u4f20\u51e0\u5f20\u56fe\u7247\uff0c\u8d85\u51fa\u6570\u91cf\u4f1a\u81ea\u52a8\u9690\u85cf\u4e0a\u4f20\u6309\u94ae\uff0c",n.a.createElement("code",null,"0")," \u8868\u793a\u4e0d\u505a\u9650\u5236"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"0"))),n.a.createElement("tr",null,n.a.createElement("td",null,"multiple"),n.a.createElement("td",null,"\u662f\u5426\u652f\u6301\u9009\u62e9\u591a\u5f20\u56fe\u7247"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,"\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868\u53d8\u5316\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(items: ImageUploadItem[]) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onCountExceed"),n.a.createElement("td",null,"\u7528\u6237\u9009\u62e9\u7684\u56fe\u7247\u6570\u91cf\u8d85\u51fa\u6700\u5927\u9650\u5236\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(exceed: number) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onDelete"),n.a.createElement("td",null,"\u5220\u9664\u5df2\u4e0a\u4f20\u6210\u529f\u7684\u56fe\u7247\u65f6\u89e6\u53d1\uff0c\u5982\u679c\u8fd4\u56de ",n.a.createElement("code",null,"false")," \u8868\u793a\u963b\u6b62\u5220\u9664\uff0c\u652f\u6301\u8fd4\u56de ",n.a.createElement("code",null,"Promise")),n.a.createElement("td",null,n.a.createElement("code",null,"(item: ImageUploadItem) => boolean | Promise<boolean> | void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onPreview"),n.a.createElement("td",null,"\u70b9\u51fb\u9884\u89c8\u56fe\u7247"),n.a.createElement("td",null,n.a.createElement("code",null,"(index: number, item: ImageUploadItem) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"preview"),n.a.createElement("td",null,"\u662f\u5426\u652f\u6301\u9884\u89c8"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"showFailed"),n.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u4e0a\u4f20\u5931\u8d25\u72b6\u6001\u4e0b\u7684\u56fe\u7247"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"showUpload"),n.a.createElement("td",null,"\u662f\u5426\u5c55\u793a\u4e0a\u4f20\u6309\u94ae"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"upload"),n.a.createElement("td",null,"\u4e0a\u4f20\u65b9\u6cd5\uff0c\u5165\u53c2\u662f\u9700\u8981\u88ab\u4e0a\u4f20\u7684\u6587\u4ef6\u5bf9\u8c61\uff0c\u7ecf\u8fc7\u5f02\u6b65\u5904\u7406\u4e4b\u540e\uff0c\u8fd4\u56de\u4e0a\u4f20\u7ed3\u679c"),n.a.createElement("td",null,n.a.createElement("code",null,"(file: File) => Promise<ImageUploadItem>")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,"\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6\u5217\u8868"),n.a.createElement("td",null,n.a.createElement("code",null,"ImageUploadItem[]")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onUploadQueueChange"),n.a.createElement("td",null,"\u56fe\u7247\u4e0a\u4f20\u961f\u5217\u53d8\u5316\u65f6\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(tasks: UploadTask[]) => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"renderItem"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u4e0a\u4f20\u5217\u8868\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"(originNode: React.ReactElement, file: ImageUploadItem, fileList: ImageUploadItem[] ) => React.ReactNode")),n.a.createElement("td",null,"-")))),n.a.createElement("h3",{id:"ref"},n.a.createElement(c["AnchorLink"],{to:"#ref","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Ref"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u7248\u672c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"nativeElement"),n.a.createElement("td",null,"\u539f\u751f\u8f93\u5165\u6846\u8282\u70b9"),n.a.createElement("td",null,n.a.createElement("code",null,"HTMLInputElement | null")),n.a.createElement("td",null,"5.33.0")))),n.a.createElement("h3",{id:"imageuploaditem"},n.a.createElement(c["AnchorLink"],{to:"#imageuploaditem","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"ImageUploadItem"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"extra"),n.a.createElement("td",null,"\u9644\u5e26\u4e00\u4e9b\u989d\u5916\u4fe1\u606f\uff0c\u53ef\u4ee5\u4e1a\u52a1\u4e2d\u81ea\u5df1\u968f\u610f\u5b9a\u4e49"),n.a.createElement("td",null,n.a.createElement("code",null,"any")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"key"),n.a.createElement("td",null,"\u552f\u4e00\u6807\u8bc6"),n.a.createElement("td",null,n.a.createElement("code",null,"string | number")),n.a.createElement("td",null,"\u6570\u7ec4\u4e0b\u6807")),n.a.createElement("tr",null,n.a.createElement("td",null,"thumbnailUrl"),n.a.createElement("td",null,"\u7f29\u7565\u56fe\u7684\u8d44\u6e90\u5730\u5740"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"url"))),n.a.createElement("tr",null,n.a.createElement("td",null,"url"),n.a.createElement("td",null,"\u56fe\u7247\u7684\u8d44\u6e90\u5730\u5740"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")))),n.a.createElement("h3",{id:"uploadtask"},n.a.createElement(c["AnchorLink"],{to:"#uploadtask","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"UploadTask"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"id"),n.a.createElement("td",null,"\u4e0a\u4f20\u56fe\u7247 id"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"status"),n.a.createElement("td",null,"\u56fe\u7247\u4e0a\u4f20\u72b6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"'pending' | 'fail' | 'success'")),n.a.createElement("td",null,"-")))),n.a.createElement("h3",{id:"css-\u53d8\u91cf"},n.a.createElement(c["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"--cell-size"),n.a.createElement("td",null,"\u56fe\u7247\u548c\u4e0a\u4f20\u6309\u94ae\u7684\u5927\u5c0f\uff08\u4ec5\u5728\u975e columns \u6a21\u5f0f\u4e0b\u6709\u6548\uff09"),n.a.createElement("td",null,n.a.createElement("code",null,"80px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--gap"),n.a.createElement("td",null,"\u95f4\u8ddd\u5927\u5c0f"),n.a.createElement("td",null,n.a.createElement("code",null,"12px"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--gap-horizontal"),n.a.createElement("td",null,"\u6c34\u5e73\u65b9\u5411\u7684\u95f4\u8ddd\u5927\u5c0f"),n.a.createElement("td",null,n.a.createElement("code",null,"var(--gap)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"--gap-vertical"),n.a.createElement("td",null,"\u5782\u76f4\u65b9\u5411\u7684\u95f4\u8ddd\u5927\u5c0f"),n.a.createElement("td",null,n.a.createElement("code",null,"var(--gap)"))))),n.a.createElement("h2",{id:"faq"},n.a.createElement(c["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"FAQ"),n.a.createElement("h3",{id:"\u914d\u7f6e\u4e86-capture-\u5c5e\u6027\u4e3a\u4ec0\u4e48\u90e8\u5206\u5b89\u5353\u673a\u578b\u8fd8\u662f\u4f1a\u5e26\u4e0a\u6587\u4ef6\u9009\u9879"},n.a.createElement(c["AnchorLink"],{to:"#\u914d\u7f6e\u4e86-capture-\u5c5e\u6027\u4e3a\u4ec0\u4e48\u90e8\u5206\u5b89\u5353\u673a\u578b\u8fd8\u662f\u4f1a\u5e26\u4e0a\u6587\u4ef6\u9009\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u914d\u7f6e\u4e86 ",n.a.createElement("code",null,"capture")," \u5c5e\u6027\uff0c\u4e3a\u4ec0\u4e48\u90e8\u5206\u5b89\u5353\u673a\u578b\u8fd8\u662f\u4f1a\u5e26\u4e0a\u6587\u4ef6\u9009\u9879\uff1f"),n.a.createElement("p",null,"ImageUploader \u6240\u63d0\u4f9b\u7684 ",n.a.createElement("code",null,"capture")," \u662f\u6765\u81ea HTML \u539f\u751f\u7684\u80fd\u529b\uff0c\u800c\u5728\u90e8\u5206\u64cd\u4f5c\u7cfb\u7edf/\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\uff0c\u53ef\u80fd\u5e76\u4e0d\u652f\u6301\u8be5\u5c5e\u6027\uff0c\u56e0\u6b64\u8fd9\u4e2a\u95ee\u9898\u65e0\u6cd5\u907f\u514d\u3002"),n.a.createElement("p",null,"\u8be6\u89c1\u6b64 ",n.a.createElement(c["Link"],{to:"https://github.com/ant-design/ant-design-mobile/issues/5254"},"issue")," \u4e2d\u7684\u8ba8\u8bba\u3002"),n.a.createElement("h3",{id:"columns-\u5c5e\u6027\u8bf4\u660e"},n.a.createElement(c["AnchorLink"],{to:"#columns-\u5c5e\u6027\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"columns")," \u5c5e\u6027\u8bf4\u660e"),n.a.createElement("p",null,n.a.createElement("code",null,"columns")," \u5c5e\u6027\u4f9d\u8d56 ",n.a.createElement(c["Link"],{to:"./grid"},"Grid")," \u5e03\u5c40\uff0c\u8be5\u5c5e\u6027\u5b58\u5728\u65f6\uff0c\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49 ",n.a.createElement("code",null,"--cell-size")," \u5c5e\u6027\uff0c\u56e0\u4e3a\u56fe\u7247\u548c\u4e0a\u4f20\u6309\u94ae\u7684\u5927\u5c0f\u662f\u81ea\u52a8\u8ba1\u7b97\u7684\u3002"),n.a.createElement("h3",{id:"\u5982\u4f55\u5728-app-\u4e2d\u4f7f\u7528\u5ba2\u6237\u7aef\u63d0\u4f9b\u7684\u4e0a\u4f20\u80fd\u529b"},n.a.createElement(c["AnchorLink"],{to:"#\u5982\u4f55\u5728-app-\u4e2d\u4f7f\u7528\u5ba2\u6237\u7aef\u63d0\u4f9b\u7684\u4e0a\u4f20\u80fd\u529b","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u5728 App \u4e2d\u4f7f\u7528\u5ba2\u6237\u7aef\u63d0\u4f9b\u7684\u4e0a\u4f20\u80fd\u529b\uff1f"),n.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",n.a.createElement("code",null,"disableUpload")," \u7981\u7528\u539f\u751f\u4e0a\u4f20\uff0c\u7136\u540e\u81ea\u5b9a\u4e49\u4e0a\u4f20\u6309\u94ae\u3002"),n.a.createElement(o["a"],{code:"const App = () => {\n  const [fileList, setFileList] = useState([])\n\n  const handleUpload = async () => {\n    // \u8c03\u7528app\u4e0a\u4f20\n    const url = await hybrid.upload()\n    setFileList(fileList => [...fileList, { url }])\n  }\n\n  return (\n    <ImageUploader\n      value={fileList}\n      onChange={setFileList}\n      disableUpload\n    >\n      <span\n        className='adm-image-uploader-cell adm-image-uploader-upload-button'\n        onClick={handleUpload}\n      >\n        <span className='adm-image-uploader-upload-button-icon'>\n          <AddOutline />\n        </span>\n      </span>\n    </ImageUploader>\n  )\n}",lang:"tsx"}))))}));t["default"]=e=>{var t=n.a.useContext(c["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(d,{demos:a})}}}]);