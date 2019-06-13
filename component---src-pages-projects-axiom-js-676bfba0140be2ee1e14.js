(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,M,N){"use strict";N.r(M);var a=N(0),t=N.n(a),I=N(170),g=N(172),D=N(153),i=N(158),n=N(230),c=N.n(n),j=N(231),z=N.n(j),A=N(232),r=N.n(A);M.default=function(){return t.a.createElement(I.a,null,t.a.createElement(i.a,{title:"Axiom",description:"Axiom - Design system powering the Brandwatch products"}),t.a.createElement("div",{className:"axiom-background",style:{background:"#F2F2F2"}},t.a.createElement(D.a,null,t.a.createElement("div",{className:c.a.main},t.a.createElement("div",null,t.a.createElement("h1",{className:c.a.headline},"Design system"),t.a.createElement("span",null,t.a.createElement("img",{src:z.a,alt:""})),t.a.createElement("h2",{className:c.a.headtitle},"Axiom"),t.a.createElement("h3",{className:c.a.headtitle2},"Brandwatch"),t.a.createElement("span",{className:c.a.date},"2018/19")))),t.a.createElement("img",{src:r.a,className:c.a.image,alt:""})),t.a.createElement("div",null,"page"),t.a.createElement(g.a,null))}},151:function(e,M,N){"use strict";N.d(M,"b",function(){return c});var a=N(0),t=N.n(a),I=N(4),g=N.n(I),D=N(32),i=N.n(D);N.d(M,"a",function(){return i.a});N(154);var n=t.a.createContext({}),c=function(e){return t.a.createElement(n.Consumer,null,function(M){return e.data||M[e.query]&&M[e.query].data?(e.render||e.children)(e.data?e.data.data:M[e.query].data):t.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:g.a.object,query:g.a.string.isRequired,render:g.a.func,children:g.a.func}},152:function(e,M,N){"use strict";var a=N(0),t=N.n(a);N(161);M.a=function(e){var M=e.children;return t.a.createElement("div",{className:"container"},M)}},153:function(e,M,N){"use strict";var a=N(152);N.d(M,"a",function(){return a.a})},154:function(e,M,N){var a;e.exports=(a=N(157))&&a.default||a},155:function(e,M,N){"use strict";var a=N(156),t=N(0),I=N.n(t),g=N(4),D=N.n(g),i=N(151),n=N(153),c=(N(162),function(e){var M=e.siteTitle;return I.a.createElement("header",{style:{background:"white",zIndex:"999",position:"relative",border:"1px solid #e7e7e7"}},I.a.createElement(n.a,null,I.a.createElement("div",{className:"header"},I.a.createElement("span",{className:"header-brand"},I.a.createElement(i.a,{to:"/",style:{color:"black",textDecoration:"none"}},M)),I.a.createElement("ul",{className:"header-navigation"},I.a.createElement("li",null,I.a.createElement(i.a,{to:"/",className:"header-navigation--link",activeClassName:"header-navigation--link-active"},"Home")),I.a.createElement("li",null,I.a.createElement(i.a,{to:"/projects",className:"header-navigation--link",activeClassName:"header-navigation--link-active"},"Portfolio")),I.a.createElement("li",null,I.a.createElement(i.a,{to:"/about",className:"header-navigation--link",activeClassName:"header-navigation--link-active"},"About")),I.a.createElement("li",null,I.a.createElement(i.a,{to:"/tips",className:"header-navigation--link",activeClassName:"header-navigation--link-active"},"Design Tips"))))))});c.propTypes={siteTitle:D.a.string},c.defaultProps={siteTitle:""};var j=c,z=(N(163),function(e){var M=e.children;return I.a.createElement(i.b,{query:"755544856",render:function(e){return I.a.createElement(I.a.Fragment,null,I.a.createElement(j,{siteTitle:e.site.siteMetadata.title}),I.a.createElement("main",null,M))},data:a})});z.propTypes={children:D.a.node.isRequired};M.a=z},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Evans"}}}}},157:function(e,M,N){"use strict";N.r(M);N(33);var a=N(0),t=N.n(a),I=N(4),g=N.n(I),D=N(54),i=N(2),n=function(e){var M=e.location,N=i.default.getResourcesForPathnameSync(M.pathname);return t.a.createElement(D.a,Object.assign({location:M,pageResources:N},N.json))};n.propTypes={location:g.a.shape({pathname:g.a.string.isRequired}).isRequired},M.default=n},158:function(e,M,N){"use strict";var a=N(159),t=N(0),I=N.n(t),g=N(4),D=N.n(g),i=N(164),n=N.n(i);function c(e){var M=e.description,N=e.lang,t=e.meta,g=e.keywords,D=e.title,i=a.data.site,c=M||i.siteMetadata.description;return I.a.createElement(n.a,{htmlAttributes:{lang:N},title:D,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:D},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:D},{name:"twitter:description",content:c}].concat(g.length>0?{name:"keywords",content:g.join(", ")}:[]).concat(t)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:D.a.string,lang:D.a.string,meta:D.a.array,keywords:D.a.arrayOf(D.a.string),title:D.a.string.isRequired},M.a=c},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Evans",description:"Portfolio of Matt Evans - UI Designer from Brighton, UK.",author:"@flawwles"}}}}},170:function(e,M,N){"use strict";var a=N(155);N.d(M,"a",function(){return a.a})},172:function(e,M,N){"use strict";var a=N(0),t=N.n(a),I=N(153),g=(N(174),function(){return t.a.createElement("footer",{style:{backgroundColor:"#1b393d",marginTop:"3rem"}},t.a.createElement(I.a,null,t.a.createElement("div",{className:"footer"},t.a.createElement("div",{className:"footer--item"},t.a.createElement("h3",null,"About me"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("a",{href:"/about/"},"About")),t.a.createElement("li",null,t.a.createElement("a",{href:"https://github.com/flawwles",target:"_blank",rel:"noopener noreferrer"},"github@flawwles")),t.a.createElement("li",null,t.a.createElement("a",{href:"matilto:matt@matt-evans.co.uk",target:"_blank",rel:"noopener noreferrer"},"matt@matt-evans.co.uk")))),t.a.createElement("div",{className:"footer--item"},t.a.createElement("h3",null,"Projects"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("a",{href:"/pure360/"},"Pure360")),t.a.createElement("li",null,t.a.createElement("a",{href:"/split-script/"},"Split Script")),t.a.createElement("li",null,t.a.createElement("a",{href:"/email/"},"Emails Code/Design")))),t.a.createElement("div",{className:"footer--item"},t.a.createElement("p",null,"Copyright © ",(new Date).getFullYear(),t.a.createElement("br",null),"Matt Evans")))))});N.d(M,"a",function(){return g})},231:function(e,M){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTU4cHgiIGhlaWdodD0iMTU4cHgiIHZpZXdCb3g9IjAgMCAxNTggMTU4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NSAoNzgwNzYpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPmxvZ288L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXhpb20tLy1CcmFuZHdhdGNoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc0LjAwMDAwMCwgLTI3My4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3NC4wMDI5ODQsIDI3My40NTA5OTEpIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJCcmFuZGluZy0tLUxvZ28tLS1Mb2dvQm94LS0tV2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIxNTcuNTMzNTY1IiBoZWlnaHQ9IjE1Ny41MzM1NjUiIHJ4PSIyNS43NzgyMTk4Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjAwMzYzMiwgMjcuMzM4NzQwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02NC4wOTk0MTE1LDM1Ljc5MzQxODIgQzY0Ljk4ODg4NDYsMzEuNjc5NTI1NCA2OS4wNDczOTc2LDI5LjA2NTIxMzkgNzMuMTY0MTI5NSwyOS45NTQwNzM2IEM3Ny4yODA4NjEzLDMwLjg0MjkzMzMgNzkuODk2OTc3MSwzNC44OTgzMzYyIDc5LjAwNzUwMzksMzkuMDEyMjI4OSBDNzguMTE4MDMwOCw0My4xMjYxMjE3IDc0LjA1OTUxNzksNDUuNzQwNzQ0MyA2OS45NDI3ODYsNDQuODUxODg0NiBDNjUuODI2MDU0MSw0My45NjI3MTM4IDYzLjIwOTkzODQsMzkuOTA3MzEwOSA2NC4wOTk0MTE1LDM1Ljc5MzQxODIiIGlkPSJGaWxsIiBmaWxsPSIjRkY4RDAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOC4xMTQ2ODU4LDM5LjE2MTYyNzEgQzM5LjQ3NjEzNjksMzIuODY0OTQxMyA0NS42ODc4MTYxLDI4Ljg2MzM2MTYgNTEuOTg5MTU4OCwzMC4yMjM4NzM4IEM1OC4yOTAxOSwzMS41ODQzODYgNjIuMjk0NTMxNCwzNy43OTE3ODEzIDYwLjkzMzA4MDIsNDQuMDg4NDY3MSBDNTkuNTcxNjI5MSw1MC4zODUxNTI4IDUzLjM1OTk0OTgsNTQuMzg3MDQzNyA0Ny4wNTg2MDcyLDUzLjAyNjUzMTUgQzQwLjc1NzU3NTksNTEuNjY2MDE5MiAzNi43NTMyMzQ2LDQ1LjQ1ODMxMjggMzguMTE0Njg1OCwzOS4xNjE2MjcxIiBpZD0iRmlsbCIgZmlsbD0iI0Y2NjgwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTkuMTUzMTA2Niw1NC43MjkzNjUxIEM2MC4yOTY2MjU5LDQ5LjQ0MDA3NDQgNjUuNTE0NTM2MSw0Ni4wNzg3NzIzIDcwLjgwNzQ3NzEsNDcuMjIxNTAzIEM3Ni4xMDA0MTgxLDQ4LjM2NDIzMzcgNzkuNDY0MzUxMyw1My41Nzg1NDU0IDc4LjMyMDUyMDYsNTguODY3ODM2MSBDNzcuMTc3MDAxMyw2NC4xNTcxMjY4IDcxLjk1OTA5MTEsNjcuNTE4NzQgNjYuNjY2MTUwMSw2Ni4zNzU2OTgxIEM2MS4zNzMyMDkxLDY1LjIzMjk2NzQgNTguMDA5NTg3Myw2MC4wMTg2NTU4IDU5LjE1MzEwNjYsNTQuNzI5MzY1MSIgaWQ9IkZpbGwiIGZpbGw9IiNGRjU0NkIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTg4LjIzNTg1NzYsNDUuNTg1NDY2MSBDODguOTgwMjUwNCw0Mi4xNDMyNzM3IDkyLjM3NTkzOTMsMzkuOTU1ODE0IDk1LjgyMDUwNzIsNDAuNjk5MzgyMyBDOTkuMjY1MDc1MSw0MS40NDMyNjE3IDEwMS40NTQwNDQsNDQuODM2NjA4OCAxMDAuNzA5OTYzLDQ4LjI3ODgwMTIgQzk5Ljk2NTU3MDIsNTEuNzIwOTkzNSA5Ni41Njk4ODEzLDUzLjkwODc2NDQgOTMuMTI1MzEzNCw1My4xNjQ4ODQ5IEM4OS42ODA3NDU1LDUyLjQyMTAwNTUgODcuNDkxNDY0OCw0OS4wMjc2NTg0IDg4LjIzNTg1NzYsNDUuNTg1NDY2MSIgaWQ9IkZpbGwiIGZpbGw9IiM4RUE1MzQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjEwMDA0OCw2Mi45MjQ4ODc4IEMzMi43MzU0NzQ5LDU5Ljk4NjM5MyAzNS42MzQyNzkzLDU4LjExOTA3MjEgMzguNTc0ODAyMSw1OC43NTM3NDk3IEM0MS41MTUzMjQ4LDU5LjM4ODczODMgNDMuMzgzOTM0NCw2Mi4yODU1NDM2IDQyLjc0ODUwNzYsNjUuMjI0MDM4NCBDNDIuMTEzMzkyLDY4LjE2MjUzMzIgMzkuMjE0NTg3Niw3MC4wMzAxNjUyIDM2LjI3NDA2NDgsNjkuMzk1MTc2NiBDMzMuMzMzNTQyLDY4Ljc2MDE4NzkgMzEuNDY0NjIxMSw2NS44NjMzODI3IDMyLjEwMDA0OCw2Mi45MjQ4ODc4IiBpZD0iRmlsbCIgZmlsbD0iI0Y3QkQwMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTUuNzM0OTcwNywyNC4yMjQwODY1IEM1Ni4zMTU5MTQ2LDIxLjUzNzU5NiA1OC45NjYyNzY4LDE5LjgzMDE4ODkgNjEuNjU0NjIxMywyMC40MTA3MzIyIEM2NC4zNDMyNzcyLDIwLjk5MDk2NDQgNjYuMDUxODYyNiwyMy42Mzk0OTg3IDY1LjQ3MDkxODYsMjYuMzI2MzAwMyBDNjQuODg5OTc0NywyOS4wMTI3OTA4IDYyLjIzOTYxMjYsMzAuNzIwMTk3OSA1OS41NTA5NTY3LDMwLjEzOTY1NDYgQzU2Ljg2MjYxMjIsMjkuNTU5MTExMyA1NS4xNTQwMjY4LDI2LjkxMDU3NyA1NS43MzQ5NzA3LDI0LjIyNDA4NjUiIGlkPSJGaWxsIiBmaWxsPSIjRjdCRDAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNi4yOTQyODIzLDIuNjMxMzkxNzkgQzI2LjYzOTIzNzIsMS4wMzYyOTc3NyAyOC4yMTI3MDQ5LDAuMDIyMzY5MjcyNCAyOS44MDkyMTExLDAuMzY3MDg2Mjk0IEMzMS40MDU0MDU5LDAuNzExODAzMzE2IDMyLjQxOTcyMjgsMi4yODQ0OTY5NSAzMi4wNzUwNzkyLDMuODc5NTkwOTcgQzMxLjczMDEyNDMsNS40NzQ2ODQ5OCAzMC4xNTYzNDUzLDYuNDg4NjEzNDggMjguNTYwMTUwNSw2LjE0Mzg5NjQ2IEMyNi45NjM5NTU2LDUuNzk5MTc5NDQgMjUuOTQ5MzI3NCw0LjIyNjQ4NTggMjYuMjk0MjgyMywyLjYzMTM5MTc5IiBpZD0iRmlsbCIgZmlsbD0iIzlDN0NCNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4xMjI1NzEwNzYsNzQuODQwMDg3NyBDMC40NDk0Njg3OTEsNzMuMzI4OTk1MSAxLjk0MDEyMjM3LDcyLjM2ODU3ODcgMy40NTIyNTc4LDcyLjY5NDkzOTggQzQuOTY0NzA0NTYsNzMuMDIxNjEyMSA1LjkyNTc4Mzg0LDc0LjUxMTIzNzYgNS41OTg4ODYxMyw3Ni4wMjI2NDEzIEM1LjI3MjI5OTc0LDc3LjUzMzczMzkgMy43ODEzMzQ4Myw3OC40OTQxNTA0IDIuMjY5MTk5NCw3OC4xNjc0NzgxIEMwLjc1Njc1MjY0Myw3Ny44NDExMTY5IC0wLjIwNDMyNjYzOCw3Ni4zNTExODAzIDAuMTIyNTcxMDc2LDc0Ljg0MDA4NzciIGlkPSJGaWxsIiBmaWxsPSIjOTY5QzlFIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NC4wNjI3Nzk5LDg0LjQyMDM1ODYgQzU0LjUxNjcwMDgsODIuMzIxNTY3MSA1Ni41ODcwNTI5LDgwLjk4NzQ5OTggNTguNjg3NjA0Myw4MS40NDExMDc2IEM2MC43ODc4NDQyLDgxLjg5NDcxNTMgNjIuMTIyODMyMiw4My45NjM2Mzk3IDYxLjY2ODkxMTQsODYuMDYyNzQyNCBDNjEuMjE0OTkwNiw4OC4xNjE1MzM5IDU5LjE0NDYzODQsODkuNDk1NjAxMiA1Ny4wNDQwODcxLDg5LjA0MTk5MzQgQzU0Ljk0Mzg0NzEsODguNTg4Mzg1NyA1My42MDg4NTkxLDg2LjUxOTE1MDIgNTQuMDYyNzc5OSw4NC40MjAzNTg2IiBpZD0iRmlsbCIgZmlsbD0iIzAwOEZCNiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjEuNDA1MDEzMyw0MS45NDA4OTI1IEMyMS44NTg5MzQxLDM5Ljg0MjEwMDkgMjMuOTI5Mjg2MywzOC41MDgwMzM2IDI2LjAyOTgzNzYsMzguOTYxNjQxNCBDMjguMTMwMDc3NiwzOS40MTUyNDkyIDI5LjQ2NTA2NTYsNDEuNDg0MTczNSAyOS4wMTExNDQ4LDQzLjU4MzI3NjIgQzI4LjU1NzIyNCw0NS42ODIwNjc3IDI2LjQ4Njg3MTgsNDcuMDE2MTM1MSAyNC4zODYzMjA1LDQ2LjU2MjUyNzMgQzIyLjI4NjA4MDUsNDYuMTA4OTE5NSAyMC45NTEwOTI1LDQ0LjAzOTY4NCAyMS40MDUwMTMzLDQxLjk0MDg5MjUiIGlkPSJGaWxsIiBmaWxsPSIjNUNDNEU4Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00OC42NDIxNjIsNTguMzg2MDcyMiBDNDkuMDU5NjU3MSw1Ni40NTQ5NzI1IDUwLjk2NDY5MjUsNTUuMjI3OTI5MiA1Mi44OTY4MTM2LDU1LjY0NTEzNjQgQzU0LjgyOTI0NjEsNTYuMDYyMzQzNSA1Ni4wNTc0NDc1LDU3Ljk2NjA2NSA1NS42Mzk5NTI0LDU5Ljg5Njg1MzcgQzU1LjIyMjE0Niw2MS44Mjc5NTM1IDUzLjMxNzQyMiw2My4wNTUzMDc5IDUxLjM4NDk4OTUsNjIuNjM3Nzg5NiBDNDkuNDUyNTU3LDYyLjIyMDU4MjQgNDguMjI0NjY2OSw2MC4zMTcxNzIgNDguNjQyMTYyLDU4LjM4NjA3MjIiIGlkPSJGaWxsIiBmaWxsPSIjRjY2ODAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04NC4yMjEzNjY4LDE0Ljg3NDQxNSBDODQuNjkzMzQ0OSwxMi42OTE2MjIxIDg2Ljg0NjgyMjUsMTEuMzA0MzUzOCA4OS4wMzExMjE5LDExLjc3NjAwNjQgQzkxLjIxNTQyMTMsMTIuMjQ3NjU4OSA5Mi42MDM2NDY5LDE0LjM5OTY1MTQgOTIuMTMxNjY4OSwxNi41ODI0NDQzIEM5MS42NTk2OTA4LDE4Ljc2NTIzNzMgODkuNTA2MjEzMiwyMC4xNTI1MDU2IDg3LjMyMTkxMzgsMTkuNjgwODUzIEM4NS4xMzc2MTQ0LDE5LjIwOTIwMDUgODMuNzQ5Mzg4OCwxNy4wNTcyMDggODQuMjIxMzY2OCwxNC44NzQ0MTUiIGlkPSJGaWxsIiBmaWxsPSIjNUNDNEU4Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04NC45NzY0MDcyLDcwLjUyNDc3ODIgQzg0LjY4OTk4MjUsNjguNzQzNjM2NSA4NS45MDI2MTczLDY3LjA2Nzk2MzMgODcuNjg0OTg4Miw2Ni43ODE3MzYyIEM4OS40NjcwNDc4LDY2LjQ5NTUwOTEgOTEuMTQ0MTg4Nyw2Ny43MDczMDc2IDkxLjQzMDYxMzQsNjkuNDg4NDQ5MyBDOTEuNzE3MDM4LDcxLjI2OTI3OTggOTAuNTA0NDAzMiw3Mi45NDUyNjQxIDg4LjcyMjAzMjMsNzMuMjMxNDkxMiBDODYuOTM5NjYxNCw3My41MTc3MTg0IDg1LjI2MjgzMTgsNzIuMzA1OTE5OCA4NC45NzY0MDcyLDcwLjUyNDc3ODIiIGlkPSJGaWxsIiBmaWxsPSIjRkY4RDAwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},232:function(e,M,N){e.exports=N.p+"static/axiom-page-1ddd996c5f4fb6a524498ff6820b66b2.svg"}}]);
//# sourceMappingURL=component---src-pages-projects-axiom-js-676bfba0140be2ee1e14.js.map