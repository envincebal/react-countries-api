(this["webpackJsonpreact-countries-api"]=this["webpackJsonpreact-countries-api"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(15),i=c.n(s),r=c(9),l=c(7),o=c(2),j=(c(22),c(0)),d=function(e){var t=e.toggleMode;return Object(j.jsx)("div",{className:"navbar",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsx)("h2",{children:"Where in the world?"}),Object(j.jsxs)("div",{className:"mode-toggle",onClick:t,children:[Object(j.jsx)("i",{className:"fas fa-moon"}),Object(j.jsx)("span",{children:" Dark Mode"})]})]})})},b=(c(24),function(e){return Object(j.jsx)(l.b,{style:{textDecoration:"none"},to:{pathname:"/".concat(e.name),state:{name:e.name}},children:Object(j.jsxs)("div",{className:"country-card",children:[Object(j.jsx)("img",{className:"country-img",src:e.flag,alt:e.name}),Object(j.jsxs)("div",{className:"country-info",children:[Object(j.jsx)("h3",{className:"country-title",children:e.name}),Object(j.jsxs)("p",{className:"population",children:["Population: ",Object(j.jsx)("span",{children:e.population.toLocaleString()})]}),Object(j.jsxs)("p",{className:"region",children:["Region: ",Object(j.jsx)("span",{children:e.region})]}),Object(j.jsxs)("p",{className:"capital",children:["Capital: ",Object(j.jsx)("span",{children:e.capital})]}),Object(j.jsx)("p",{})]})]})})}),u=(c(30),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),l=i[0],o=i[1],d=Object(n.useState)(""),u=Object(r.a)(d,2),O=u[0],h=u[1];return Object(n.useEffect)((function(){localStorage.getItem("countries")?a(JSON.parse(localStorage.getItem("countries"))):fetch("https://restcountries.com/v2/all").then((function(e){return e.json()})).then((function(e){localStorage.setItem("countries",JSON.stringify(e)),a(e)}))}),[]),Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsxs)("div",{className:"filter-div",children:[Object(j.jsxs)("div",{className:"search-div",children:[Object(j.jsx)("i",{className:"fas fa-search"}),Object(j.jsx)("input",{className:"nav-input",type:"text",placeholder:"Search for a country",value:l,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("select",{className:"nav-input",onChange:function(e){h(e.target.value)},children:[Object(j.jsx)("option",{value:"",children:"All"}),Object(j.jsx)("option",{value:"Africa",children:"Africa"}),Object(j.jsx)("option",{value:"Americas",children:"Americas"}),Object(j.jsx)("option",{value:"Asia",children:"Asia"}),Object(j.jsx)("option",{value:"Europe",children:"Europe"}),Object(j.jsx)("option",{value:"Oceania",children:"Oceania"}),Object(j.jsx)("option",{value:"Polar",children:"Antarctica"})]})]}),Object(j.jsx)("div",{className:"countries-grid",children:c.filter((function(e){return e.name.toLowerCase().includes(l)})).filter((function(e){return""===O||e.region===O})).map((function(e,t){return Object(j.jsx)(b,{flag:e.flag,name:e.name,population:e.population,region:e.region,capital:e.capital},t)}))})]})}),O=(c(31),function(e){var t=Object(o.f)();localStorage.setItem("location",JSON.stringify(t));var c=JSON.parse(localStorage.getItem("location")),n=JSON.parse(localStorage.getItem("countries")),a=n.find((function(e){return e.name===c.pathname.slice(1)})),s=[],i=a.name,r=a.nativeName,d=a.flag,b=a.population,u=a.region,O=a.subregion,h=a.capital,p=a.topLevelDomain,m=a.currencies,x=a.languages,f=a.borders;return f&&f.forEach((function(e){for(var t=0;t<n.length;t++)e===n[t].cioc&&s.push(n[t])})),Object(j.jsxs)("div",{className:"details-wrapper",children:[Object(j.jsx)(l.b,{to:"/",children:Object(j.jsxs)("button",{className:"btn back-button",children:[Object(j.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"Back"]})}),Object(j.jsxs)("div",{className:"details-container",children:[Object(j.jsx)("img",{className:"flag",src:d,alt:i}),Object(j.jsxs)("div",{className:"details-div",children:[Object(j.jsx)("h2",{className:"country-name",children:i}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("div",{className:"details-1",children:[Object(j.jsxs)("p",{children:["Native Name: ",Object(j.jsx)("span",{children:r})]}),Object(j.jsxs)("p",{children:["Population: ",Object(j.jsx)("span",{children:b.toLocaleString()})]}),Object(j.jsxs)("p",{children:["Region: ",Object(j.jsx)("span",{children:u})]}),Object(j.jsxs)("p",{children:["Sub Region: ",Object(j.jsx)("span",{children:O})]}),Object(j.jsxs)("p",{children:["Capital: ",Object(j.jsx)("span",{children:h})]})]}),Object(j.jsxs)("div",{className:"details-2",children:[Object(j.jsxs)("p",{children:["Top Level Domain: ",Object(j.jsx)("span",{children:p})]}),Object(j.jsxs)("p",{children:["Currencies: ",Object(j.jsx)("span",{children:m[0].name})]}),Object(j.jsxs)("p",{children:["Languages:"," ",x.map((function(e,t){return t===x.length-1?Object(j.jsx)("span",{children:e.name},t):Object(j.jsx)("span",{children:e.name+", "},t)}))]})]})]}),Object(j.jsxs)("div",{className:"borders-container",children:[Object(j.jsx)("span",{className:"border-title",children:"Borders:"}),Object(j.jsx)("div",{className:"borders",children:s.map((function(e,t){return Object(j.jsx)(l.b,{style:{textDecoration:"none"},to:{pathname:"/".concat(e.name),state:{name:e.name}},children:Object(j.jsx)("button",{className:"btn border-btn",children:e.name})},t)}))})]})]})]})]})});c(32);var h=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(j.jsx)("div",{className:"App ".concat(c?"dark-mode":""),children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(d,{toggleMode:function(e){e.preventDefault(),a(!c)}}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(o.a,{path:"/:details",render:function(){return Object(j.jsx)(O,{})}})]})]})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e46b98ce.chunk.js.map