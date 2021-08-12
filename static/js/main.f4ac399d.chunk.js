(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,s,l,d,u,b,j,f,h,g,x,m,p,O=t(1),k=t.n(O),v=t(12),w=t.n(v),y=t(2),D=t(3),T=Object(y.b)(r||(r=Object(D.a)(["\n    html {\n        box-sizing: border-box;\n        scroll-behavior: smooth;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        max-width: 1000px;\n        margin: 0 auto;\n        padding: 0 20px;\n        font-family: 'Montserrat', sans-serif;\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.color.gallery})),z=t(4),C=t(16),S=t(6),N=function(){var n=function(n,e){var t=Object(O.useState)((function(){return JSON.parse(localStorage.getItem(n))||e})),r=Object(z.a)(t,2),o=r[0],i=r[1];return Object(O.useEffect)((function(){localStorage.setItem(n,JSON.stringify(o))}),[o]),[o,i]}("tasks",[]),e=Object(z.a)(n,2),t=e[0],r=e[1];return{tasks:t,removeTask:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){r((function(e){return e.map((function(e){return e.id===n?Object(S.a)(Object(S.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){r((function(n){return n.map((function(n){return Object(S.a)(Object(S.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){r((function(e){return[].concat(Object(C.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}},M=y.d.form(o||(o=Object(D.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 10px;\n    padding: 20px;\n    margin: 2px 5px;\n    background-color: ",";\n\n    @media(max-width: ","px){\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),F=y.d.input(i||(i=Object(D.a)(["\n    padding: 8px;\n    border: 1px solid ",";\n"])),(function(n){return n.theme.color.gallery})),A=y.d.button(c||(c=Object(D.a)(["\n    padding: 8px;\n    border: none;\n    background-color:  ",";\n    color:  ",";\n    cursor: pointer;\n    transition: background-color .5s linear, transform .2s linear;\n\n    &:hover{\n        filter: brightness(110%);\n        transform: scale(1.1);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.gallery})),H=t(0),I=function(n){var e=n.addNewTask,t=Object(O.useState)(""),r=Object(z.a)(t,2),o=r[0],i=r[1],c=Object(O.useRef)(null);return Object(H.jsxs)(M,{onSubmit:function(n){n.preventDefault();var t=o.trim();t&&(e(t),i(""),c.current.focus())},children:[Object(H.jsx)(F,{value:o,onChange:function(n){var e=n.target;return i(e.value)},ref:c,placeholder:"Co jest do zrobienia?"}),Object(H.jsx)(A,{children:"Dodaj zadanie"})]})},J=y.d.ul(a||(a=Object(D.a)(["\n    padding: 20px;\n    margin: 2px 5px;\n    background-color: ",";\n    list-style-type: none;\n"])),(function(n){return n.theme.color.white})),L=y.d.li(s||(s=Object(D.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 2px solid #eee;\n    margin-bottom: 10px;\n\n    ","\n"])),(function(n){return n.hidden&&Object(y.c)(l||(l=Object(D.a)(["\n        display: none;\n    "])))})),P=y.d.span(d||(d=Object(D.a)(["\n    color: ",";\n    overflow-wrap: anywhere;\n    word-break: break-word;\n\n    ","\n"])),(function(n){return n.theme.color.mineshaft}),(function(n){return n.done&&Object(y.c)(u||(u=Object(D.a)(["\n        text-decoration: line-through;\n    "])))})),B=y.d.button(b||(b=Object(D.a)(["\n    margin-right: 10px;\n    color: ",";\n    border: none;\n    width: 30px;\n    height: 30px;\n    font-size: 10px;\n    cursor: pointer;\n    transition: background-color .5s linear;\n\n    ","\n        \n    ","   \n"])),(function(n){return n.theme.color.gallery}),(function(n){return n.toggleDone&&Object(y.c)(j||(j=Object(D.a)(["   \n        background-color: ",";\n\n        &:hover {\n            filter: brightness(110%);\n        }\n\n        &:active {\n            filter: brightness(130%);\n        }\n    "])),(function(n){return n.theme.color.forestGreen}))}),(function(n){return n.remove&&Object(y.c)(f||(f=Object(D.a)(["\n        background-color: ",";\n\n        &:hover{\n            filter: brightness(110%);\n        }\n\n        &:active{\n            filter: brightness(130%);\n        }\n    "])),(function(n){return n.theme.color.crimson}))})),E=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,o=n.toggleTaskDone;return Object(H.jsx)(J,{children:e.map((function(n){return Object(H.jsxs)(L,{hidden:n.done&&t,children:[Object(H.jsx)(B,{toggleDone:!0,onClick:function(){return o(n.id)},children:n.done?Object(H.jsx)("i",{className:"fas fa-check"}):""}),Object(H.jsx)(P,{done:n.done,children:n.content}),Object(H.jsx)(B,{remove:!0,onClick:function(){return r(n.id)},children:Object(H.jsx)("i",{className:"fas fa-trash-alt"})})]},n.id)}))})},G=y.d.div(h||(h=Object(D.a)(["\n    display: flex;\n\n    @media (max-width: ","px) {\n        flex-direction: column;\n        padding: 30px;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),U=y.d.button(g||(g=Object(D.a)(["\n    color: ",";\n    font-size: 18px;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    transition: color .5s linear;\n\n    @media (max-width: ","px) {\n        padding: 10px;\n    }\n\n    &:hover{\n        filter: brightness(110%);\n    }\n\n    &:active{\n        filter: brightness(130%);\n    }\n\n    &:disabled{\n        color: ",";\n        pointer-events: none; \n    }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.breakpoint.mobileMax}),(function(n){return n.theme.color.silver})),R=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,o=n.setAllDone;return Object(H.jsx)(G,{children:e.length>0&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(U,{onClick:r,children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(H.jsx)(U,{onClick:o,disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})})},q=y.d.section(x||(x=Object(D.a)(["\n    margin-top: 10px;\n    box-shadow: 0 0 3px ",";\n"])),(function(n){return n.theme.color.gallery})),K=y.d.h2(m||(m=Object(D.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 15px;\n    margin: 2px 5px;\n    background-color: ",";\n\n    @media (max-width: ","px){\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),Q=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(H.jsxs)(q,{children:[Object(H.jsxs)(K,{children:[e,r]}),t]})},V=y.d.header(p||(p=Object(D.a)(["\n    margin: 0px 5px;\n"]))),W=function(n){var e=n.title;return Object(H.jsx)(V,{children:Object(H.jsx)("h1",{children:e})})},X=function(n){var e=n.children;return Object(H.jsx)("main",{className:"container",children:e})};var Y=function(){var n=Object(O.useState)(!1),e=Object(z.a)(n,2),t=e[0],r=e[1],o=N(),i=o.tasks,c=o.removeTask,a=o.toggleTaskDone,s=o.setAllDone,l=o.addNewTask;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(W,{title:"Lista zada\u0144"}),Object(H.jsxs)(X,{children:[Object(H.jsx)(Q,{title:"Dodaj nowe zadanie",body:Object(H.jsx)(I,{addNewTask:l})}),Object(H.jsx)(Q,{title:"Lista zada\u0144",body:Object(H.jsx)(E,{tasks:i,hideDone:t,removeTask:c,toggleTaskDone:a}),extraHeaderContent:Object(H.jsx)(R,{tasks:i,hideDone:t,toggleHideDone:function(){r((function(n){return!n}))},setAllDone:s})})]})]})},Z=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),i(n),c(n)}))};w.a.render(Object(H.jsx)(k.a.StrictMode,{children:Object(H.jsxs)(y.a,{theme:{color:{black:"#000",mineshaft:"#333",silver:"#ccc",alto:"#ddd",gallery:"#eee",white:"#fff",teal:"#008080",crimson:"#db143c",forestGreen:"#228c22"},breakpoint:{mobileMax:767}},children:[Object(H.jsx)(T,{}),Object(H.jsx)(Y,{})]})}),document.getElementById("root")),Z()}},[[24,1,2]]]);
//# sourceMappingURL=main.f4ac399d.chunk.js.map