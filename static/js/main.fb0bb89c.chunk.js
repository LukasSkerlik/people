(this.webpackJsonppeoplecollection=this.webpackJsonppeoplecollection||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(6),o=n.n(c),i=n(15),r=n.n(i),l=(n(21),n(10)),s=n(9),u=(n(22),n(13));u.a.initializeApp({apiKey:"AIzaSyCufu6wi_PaIc0A2IZGyTSVDMkYti9hiXs",authDomain:"code-test-people.firebaseapp.com",databaseURL:"https://code-test-people.firebaseio.com",projectId:"code-test-people",storageBucket:"code-test-people.appspot.com",messagingSenderId:"301664650413",appId:"1:301664650413:web:69fbdaf87f030681b27224"});var p=u.a;var j=function(e){var t=e.person,n=o.a.useState(t.fName),c=Object(s.a)(n,2),i=c[0],r=c[1],u=o.a.useState(t.lName),j=Object(s.a)(u,2),b=j[0],d=j[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{value:i,onChange:function(e){r(e.target.value)}}),Object(a.jsx)("input",{value:b,onChange:function(e){d(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){p.firestore().collection("people").doc(t.id).set(Object(l.a)(Object(l.a)({},t),{},{fName:i,lName:b}))},children:"Update"}),Object(a.jsx)("button",{onClick:function(){p.firestore().collection("people").doc(t.id).delete()},children:"Delete"}),Object(a.jsx)("br",{})]})};var b=function(){var e=o.a.useState([]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=o.a.useState([]),r=Object(s.a)(i,2),u=r[0],b=r[1],d=o.a.useState([]),f=Object(s.a)(d,2),O=f[0],h=f[1];return o.a.useEffect((function(){return p.firestore().collection("people").onSnapshot((function(e){var t=[];e.forEach((function(e){return t.push(Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id}))})),c(t)}))}),[]),Object(a.jsxs)("ul",{children:[Object(a.jsx)("label",{children:"First Name: "}),Object(a.jsx)("input",{value:u,onChange:function(e){return b(e.target.value)}}),Object(a.jsx)("label",{children:"Last Name: "}),Object(a.jsx)("input",{value:O,onChange:function(e){return h(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){p.firestore().collection("people").add({fName:u,lName:O})},children:"Create new person!"}),n.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(j,{person:e})},e.id)}))]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),d()}},[[27,1,2]]]);
//# sourceMappingURL=main.fb0bb89c.chunk.js.map