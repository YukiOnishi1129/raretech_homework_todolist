(this.webpackJsonpraretech_homework_todo_list=this.webpackJsonpraretech_homework_todo_list||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n.n(o),a=n(9),i=n.n(a),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))},l=n(10),s=n(13),d=n(6),u=n(1),j=function(e){var t=e.inputTodo,n=e.onChange,o=e.onKeyPress,c=e.placeholder;return Object(u.jsx)("input",{type:"text",placeholder:c,value:t,onChange:n,onKeyPress:o})},h=n(11),b=n(12),O=function(e){var t=e.todos,n=e.onClickDelete;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{children:t.map((function(e){return Object(u.jsx)("div",{className:"todo-list",children:e.todoShowFlag&&Object(u.jsxs)("li",{className:"list-low",children:[e.title,Object(u.jsx)(h.a,{onClick:function(){return n(e.id)},icon:b.a,alt:"\u524a\u9664",className:"icon"})]})},e.id)}))})})},f=(n(24),function(){var e=Object(o.useState)(2),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(""),i=Object(d.a)(a,2),r=i[0],h=i[1],b=Object(o.useState)([{id:1,title:"Todo1",todoShowFlag:!0},{id:2,title:"Todo2",todoShowFlag:!0}]),f=Object(d.a)(b,2),g=f[0],p=f[1],x=Object(o.useState)(""),m=Object(d.a)(x,2),v=m[0],w=m[1];!function(){var e,t=new RegExp("^"+v,"i"),n=Object(l.a)(g);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.title.match(t)?o.todoShowFlag=!0:o.todoShowFlag=!1}}catch(c){n.e(c)}finally{n.f()}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"title",children:"Todo List"}),Object(u.jsx)("h2",{className:"sub-title",children:"ADD TODO"}),Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(j,{inputTodo:r,onChange:function(e){return h(e.target.value)},onKeyPress:function(e){if("Enter"===e.key){if(""===r||!r.match(/\S/g))return;var t={id:n+1,title:r,todoShowFlag:!0},o=[].concat(Object(s.a)(g),[t]);p(o),h(""),c(n+1)}},placeholder:"New Todo"}),Object(u.jsx)(j,{onChange:function(e){w(e.target.value)},placeholder:"Search Todo"}),Object(u.jsx)(O,{todos:g,onClickDelete:function(e){var t=g.filter((function(t){return t.id!==e}));p(t)}})]})]})});i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),r()}},[[25,1,2]]]);
//# sourceMappingURL=main.33a252af.chunk.js.map