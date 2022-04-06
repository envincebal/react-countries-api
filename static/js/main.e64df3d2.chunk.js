(this["webpackJsonpreact-countries-api"]=this["webpackJsonpreact-countries-api"]||[]).push([[0],{24:function(e,t,c){},27:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(16),i=c.n(a),r=c(9),l=c(7),o=c(2),j=(c(24),c(0)),d=function(e){var t=e.toggleMode;return Object(j.jsx)("div",{className:"navbar",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsx)("h2",{children:"Where in the world?"}),Object(j.jsxs)("div",{className:"mode-toggle",onClick:t,children:[Object(j.jsx)("i",{className:"fas fa-moon"}),Object(j.jsx)("span",{children:" Dark Mode"})]})]})})},b=c(13),u=c.n(b),p=c(17),O=(c(27),function(e){var t=e.name,c=e.population,n=e.region,s=e.flag,a=e.capital;return Object(j.jsx)(l.b,{style:{textDecoration:"none"},to:{pathname:"/".concat(t),state:{name:t}},children:Object(j.jsxs)("div",{className:"country-card",children:[Object(j.jsx)("img",{className:"country-img",src:s,alt:t}),Object(j.jsxs)("div",{className:"country-info",children:[Object(j.jsx)("h3",{className:"country-title",children:t}),Object(j.jsxs)("p",{className:"population",children:["Population: ",Object(j.jsx)("span",{children:c.toLocaleString()})]}),Object(j.jsxs)("p",{className:"region",children:["Region: ",Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("p",{className:"capital",children:["Capital: ",Object(j.jsx)("span",{children:a})]}),Object(j.jsx)("p",{})]})]})})}),h=(c(33),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),l=i[0],o=i[1],d=Object(n.useState)(""),b=Object(r.a)(d,2),h=b[0],x=b[1],m=function(){var e=Object(p.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/all");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,sessionStorage.setItem("countries",JSON.stringify(c)),s(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){sessionStorage.getItem("countries")?s(JSON.parse(sessionStorage.getItem("countries"))):m()}),[]),Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsxs)("div",{className:"filter-div",children:[Object(j.jsxs)("div",{className:"search-div",children:[Object(j.jsx)("i",{className:"fas fa-search"}),Object(j.jsx)("input",{className:"search-bar nav-input",type:"text",placeholder:"Search for a country",value:l,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("select",{className:"nav-input",onChange:function(e){x(e.target.value)},children:[Object(j.jsx)("option",{value:"",children:"All"}),Object(j.jsx)("option",{value:"Africa",children:"Africa"}),Object(j.jsx)("option",{value:"Americas",children:"Americas"}),Object(j.jsx)("option",{value:"Asia",children:"Asia"}),Object(j.jsx)("option",{value:"Europe",children:"Europe"}),Object(j.jsx)("option",{value:"Oceania",children:"Oceania"}),Object(j.jsx)("option",{value:"Polar",children:"Antarctica"})]})]}),Object(j.jsx)("div",{className:"countries-grid",children:c.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})).filter((function(e){return""===h||e.region===h})).map((function(e,t){return Object(j.jsx)(O,{flag:e.flags.png,name:e.name,population:e.population,region:e.region,capital:e.capital},t)}))})]})}),x=(c(34),function(e){var t=Object(o.f)();sessionStorage.setItem("location",JSON.stringify(t));var c=JSON.parse(sessionStorage.getItem("location")),n=JSON.parse(sessionStorage.getItem("countries")),s=n.find((function(e){return e.name===c.pathname.slice(1)})),a=[],i=s.name,r=s.nativeName,d=s.flag,b=s.population,u=s.region,p=s.subregion,O=s.capital,h=s.topLevelDomain,x=s.currencies,m=s.languages,f=s.borders;return f&&f.forEach((function(e){for(var t=0;t<n.length;t++)e===n[t].cioc&&a.push(n[t])})),Object(j.jsxs)("div",{className:"details-wrapper",children:[Object(j.jsx)(l.b,{to:"/",children:Object(j.jsxs)("button",{className:"btn back-button",children:[Object(j.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"Back"]})}),Object(j.jsxs)("div",{className:"details-container",children:[Object(j.jsx)("img",{className:"flag",src:d,alt:i}),Object(j.jsxs)("div",{className:"details-div",children:[Object(j.jsx)("h2",{className:"country-name",children:i}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("div",{className:"details-1",children:[Object(j.jsxs)("p",{children:["Native Name: ",Object(j.jsx)("span",{children:r})]}),Object(j.jsxs)("p",{children:["Population: ",Object(j.jsx)("span",{children:b.toLocaleString()})]}),Object(j.jsxs)("p",{children:["Region: ",Object(j.jsx)("span",{children:u})]}),Object(j.jsxs)("p",{children:["Sub Region: ",Object(j.jsx)("span",{children:p})]}),Object(j.jsxs)("p",{children:["Capital: ",Object(j.jsx)("span",{children:O})]})]}),Object(j.jsxs)("div",{className:"details-2",children:[Object(j.jsxs)("p",{children:["Top Level Domain: ",Object(j.jsx)("span",{children:h})]}),Object(j.jsxs)("p",{children:["Currencies: ",Object(j.jsx)("span",{children:x[0].name})]}),Object(j.jsxs)("p",{children:["Languages:"," ",m.map((function(e,t){return t===m.length-1?Object(j.jsx)("span",{children:e.name},t):Object(j.jsx)("span",{children:e.name+", "},t)}))]})]})]}),Object(j.jsxs)("div",{className:"borders-container",children:[Object(j.jsx)("span",{className:"border-title",children:"Borders:"}),Object(j.jsx)("div",{className:"borders",children:a.map((function(e,t){return Object(j.jsx)(l.b,{style:{textDecoration:"none"},to:{pathname:"/".concat(e.name),state:{name:e.name}},children:Object(j.jsx)("button",{className:"btn border-btn",children:e.name})},t)}))})]})]})]})]})});c(35);var m=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(j.jsx)(l.a,{basename:"/",children:Object(j.jsxs)("div",{className:"App ".concat(c?"dark-mode":""),children:[Object(j.jsx)(d,{toggleMode:function(e){e.preventDefault(),s(!c)}}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:h}),Object(j.jsx)(o.a,{path:"/:details",component:x})]})]})})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e64df3d2.chunk.js.map