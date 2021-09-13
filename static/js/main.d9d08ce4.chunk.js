(this["webpackJsonpreact-countries-api"]=this["webpackJsonpreact-countries-api"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(16),i=c.n(s),r=c(9),l=c(7),j=c(2),o=(c(22),c(0)),d=function(e){var t=e.toggleMode;return Object(o.jsx)("div",{className:"navbar",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)("h2",{children:"Where in the world?"}),Object(o.jsxs)("div",{className:"mode-toggle",onClick:t,children:[Object(o.jsx)("i",{className:"fas fa-moon"}),Object(o.jsx)("span",{children:" Dark Mode"})]})]})})},b=(c(24),function(e){return Object(o.jsx)(l.b,{style:{textDecoration:"none"},to:{pathname:"/".concat(e.name),state:{name:e.name}},children:Object(o.jsxs)("div",{className:"country-card",children:[Object(o.jsx)("img",{className:"country-img",src:e.flag,alt:e.name}),Object(o.jsxs)("div",{className:"country-info",children:[Object(o.jsx)("h3",{className:"country-title",children:e.name}),Object(o.jsxs)("p",{className:"population",children:["Population: ",Object(o.jsx)("span",{children:e.population.toLocaleString()})]}),Object(o.jsxs)("p",{className:"region",children:["Region: ",Object(o.jsx)("span",{children:e.region})]}),Object(o.jsxs)("p",{className:"capital",children:["Capital: ",Object(o.jsx)("span",{children:e.capital})]}),Object(o.jsx)("p",{})]})]})})}),u=(c(30),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(""),u=Object(r.a)(d,2),O=u[0],h=u[1];return Object(n.useEffect)((function(){localStorage.getItem("countries")?a(JSON.parse(localStorage.getItem("countries"))):fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){localStorage.setItem("countries",JSON.stringify(e)),a(e)}))}),[]),Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsxs)("div",{className:"filter-div",children:[Object(o.jsxs)("div",{className:"search-div",children:[Object(o.jsx)("i",{className:"fas fa-search"}),Object(o.jsx)("input",{className:"nav-input",type:"text",placeholder:"Search for a country",value:l,onChange:function(e){j(e.target.value)}})]}),Object(o.jsxs)("select",{className:"nav-input",onChange:function(e){h(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"All"}),Object(o.jsx)("option",{value:"Africa",children:"Africa"}),Object(o.jsx)("option",{value:"Americas",children:"Americas"}),Object(o.jsx)("option",{value:"Asia",children:"Asia"}),Object(o.jsx)("option",{value:"Europe",children:"Europe"}),Object(o.jsx)("option",{value:"Oceania",children:"Oceania"}),Object(o.jsx)("option",{value:"Polar",children:"Antarctica"})]})]}),Object(o.jsx)("div",{className:"countries-grid",children:c.filter((function(e){return e.name.toLowerCase().includes(l)})).filter((function(e){return""===O||e.region===O})).map((function(e,t){return Object(o.jsx)(b,{flag:e.flag,name:e.name,population:e.population,region:e.region,capital:e.capital},t)}))})]})}),O=(c(31),function(e){var t=Object(j.f)(),c=JSON.parse(localStorage.getItem("countries")),n=c.find((function(e){return e.name===t.state.name})),a=[],s=n.name,i=n.nativeName,r=n.flag,d=n.population,b=n.region,u=n.subregion,O=n.capital,h=n.topLevelDomain,p=n.currencies,x=n.languages;return n.borders.forEach((function(e){for(var t=0;t<c.length;t++)e===c[t].cioc&&a.push(c[t])})),Object(o.jsxs)("div",{className:"details-wrapper",children:[Object(o.jsx)(l.b,{to:"/",children:Object(o.jsxs)("button",{className:"btn back-button",children:[Object(o.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"Back"]})}),Object(o.jsxs)("div",{className:"details-container",children:[Object(o.jsx)("img",{className:"flag",src:r,alt:s}),Object(o.jsxs)("div",{className:"details-div",children:[Object(o.jsx)("h2",{className:"country-name",children:s}),Object(o.jsxs)("div",{className:"details",children:[Object(o.jsxs)("div",{className:"details-1",children:[Object(o.jsxs)("p",{children:["Native Name: ",Object(o.jsx)("span",{children:i})]}),Object(o.jsxs)("p",{children:["Population: ",Object(o.jsx)("span",{children:d.toLocaleString()})]}),Object(o.jsxs)("p",{children:["Region: ",Object(o.jsx)("span",{children:b})]}),Object(o.jsxs)("p",{children:["Sub Region: ",Object(o.jsx)("span",{children:u})]}),Object(o.jsxs)("p",{children:["Capital: ",Object(o.jsx)("span",{children:O})]})]}),Object(o.jsxs)("div",{className:"details-2",children:[Object(o.jsxs)("p",{children:["Top Level Domain: ",Object(o.jsx)("span",{children:h})]}),Object(o.jsxs)("p",{children:["Currencies: ",Object(o.jsx)("span",{children:p[0].name})]}),Object(o.jsxs)("p",{children:["Languages:"," ",x.map((function(e,t){return t===x.length-1?Object(o.jsx)("span",{children:e.name},t):Object(o.jsx)("span",{children:e.name+", "},t)}))]})]})]}),Object(o.jsxs)("div",{className:"borders-container",children:[Object(o.jsx)("span",{className:"border-title",children:"Borders:"}),Object(o.jsx)("div",{className:"borders",children:a.map((function(e,t){return Object(o.jsx)(l.b,{style:{textDecoration:"none"},to:{pathname:"/".concat(e.name),state:{name:e.name}},children:Object(o.jsx)("button",{className:"btn border-btn",children:e.name})},t)}))})]})]})]})]})});c(32);var h=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(o.jsx)("div",{className:"App ".concat(c?"dark-mode":""),children:Object(o.jsxs)(l.a,{basename:"/react-countries-api",children:[Object(o.jsx)(d,{toggleMode:function(e){e.preventDefault(),a(!c)}}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:u}),Object(o.jsx)(j.a,{exact:!0,path:"/:details",render:function(){return Object(o.jsx)(O,{})}})]})]})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d9d08ce4.chunk.js.map