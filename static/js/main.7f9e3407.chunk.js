(this.webpackJsonpteste_conect=this.webpackJsonpteste_conect||[]).push([[0],{54:function(n,e,t){},85:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i=t(1),d=t.n(i),s=t(24),b=t.n(s),l=(t(54),t(5)),x=(t(48),t(6)),p=t(15),j=t(8),u=t.n(j),f=t(16),h=t(9),g=t(42),O=t.n(g).a.create({baseURL:"http://localhost:3333"}),m=t(2),v=t(3),w=v.b.div(r||(r=Object(m.a)(["\n  align-items: center;\n  background-image: linear-gradient(\n    to left,\n    #d9dff8,\n    #e4e7fa,\n    #eeeefb,\n    #f7f7fd,\n    #ffffff\n  );\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n"]))),y=v.b.div(c||(c=Object(m.a)(["\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  display: grid;\n  justify-items: center;\n  min-height: 40%;\n  padding: 30px;\n  /* width: 30%; */\n  @media (max-width: 1200px) {\n    grid-column: auto;\n  }\n"]))),k=v.b.label(a||(a=Object(m.a)(["\n  font-size: 1.8rem;\n  text-align: center;\n"]))),C=Object(v.b)(p.b)(o||(o=Object(m.a)(["\n  align-items: center;\n  background: #000;\n  border-radius: 10px;\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  font-size: 1rem;\n  justify-content: center;\n  margin-top: 10px;\n  text-decoration: none;\n  width: 30%;\n"]))),z=t(25),S=t(26),B=Object(S.b)({name:"login",initialState:{loading:!1,data:null,error:null},reducers:{fetchStarted:function(n){n.loading=!0},fetchSuccess:function(n,e){n.loading=!1,n.data=e.payload,n.error=null},fetchError:function(n,e){n.loading=!1,n.data=null,n.error=e.payload}}}),L=B.actions,D=(L.fetchStarted,L.fetchSuccess,L.fetchError,B.reducer),_=t(0),E={name:"",password:""};var N,J,I,M,P,R,F,q=function(){var n=d.a.useState(E),e=Object(h.a)(n,2),t=e[0],r=e[1],c=d.a.useState(""),a=Object(h.a)(c,2),o=a[0];return a[1],Object(x.g)(),Object(z.b)(),Object(_.jsx)(w,{children:Object(_.jsxs)(y,{children:[Object(_.jsx)(k,{children:"Login"}),Object(_.jsx)("input",{type:"text",onChange:function(n){return r(Object(l.a)(Object(l.a)({},t),{},{name:n.target.value}))},value:t.name,style:{fontSize:"2rem",width:"80%"}}),Object(_.jsx)(k,{children:"Password"}),Object(_.jsx)("input",{type:"password",onChange:function(n){return r(Object(l.a)(Object(l.a)({},t),{},{password:n.target.value}))},value:t.password,style:{fontSize:"2rem",width:"80%"}}),o,Object(_.jsx)(C,{to:"/home",children:"Enviar"})]})})},G=v.b.div(N||(N=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  padding: 20px;\n  @media (max-width: 1024px) {\n    gap: 10px;\n    grid-template-columns: 1fr;\n  }\n"]))),U=v.b.button(J||(J=Object(m.a)(["\n  background-color: transparent;\n  border-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  font-size: 1rem;\n  justify-content: flex-end;\n  margin-left: auto;\n  padding: 5px;\n  &:hover {\n    background-image: linear-gradient(\n      to left,\n      #d9dff8,\n      #e4e7fa,\n      #eeeefb,\n      #f7f7fd,\n      #ffffff\n    );\n    color: #000;\n  }\n"]))),A=v.b.div(I||(I=Object(m.a)(["\n  align-items: center;\n  /* background-color: #0066ff; */\n  background-image: linear-gradient(\n    to left,\n    #d9dff8,\n    #e4e7fa,\n    #eeeefb,\n    #f7f7fd,\n    #ffffff\n  );\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  height: 100%;\n  justify-items: stretch;\n  padding: 30px;\n  width: 100%;\n"]))),H=v.b.h1(M||(M=Object(m.a)(["\n  grid-column: 1/-1;\n  text-align: center;\n"]))),K=v.b.button(P||(P=Object(m.a)(["\n  background-color: ",";\n  border-color: #000;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #000;\n  cursor: pointer;\n  font-size: 1rem;\n  margin: 10px;\n  padding: 10px 25px;\n"])),(function(n){return n.color})),Q=(v.b.table(R||(R=Object(m.a)(["\n  background-color: #0066ff;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  font-size: 1rem;\n  @media (max-width: 1024px) {\n    margin: 0 10px;\n  }\n"]))),v.b.input(F||(F=Object(m.a)(["\n  font-size: 1.5rem;\n  padding: 10px;\n  width: 100%;\n"]))));function T(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=Object(i.useState)((function(){try{var t=window.localStorage.getItem(n);return t?JSON.parse(t):e}catch(r){return e}})),r=Object(h.a)(t,2),c=r[0],a=r[1],o=function(t){try{var r="function"===typeof t?t(c):t;a(r),window.localStorage.setItem(n,JSON.stringify(r))}catch(o){return e}};return[c,o]}var V,W,X,Y,Z,$,nn,en,tn,rn,cn,an,on,dn,sn,bn,ln,xn,pn,jn,un,fn,hn,gn,On,mn=t(97),vn=t(98),wn=t(99),yn=t(100),kn=v.b.div(V||(V=Object(m.a)(["\n  background: #fff;\n  border-radius: 4px;\n  width: 100%;\n  box-shadow: var(--box-shadow);\n  / min-width: calc((100vw - 1000px) / 3); /\n"]))),Cn=v.b.div(W||(W=Object(m.a)(["\n  background: #fff;\n  box-shadow: var(--box-shadow);\n  border-bottom: 1px solid #c0c0c0;\n"]))),zn=v.b.div(X||(X=Object(m.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #c0c0c0;\n  background: #fff;\n  @media (max-width: 800px) {\n    position: initial;\n    flex-direction: column;\n    padding: 10px;\n  }\n"]))),Sn=v.b.div(Y||(Y=Object(m.a)(["\n  padding-right: 10px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  outline: 1px solid #000;\n\n  &:hover {\n    outline: 1px solid #c0c0c0;\n  }\n  @media (max-width: 800px) {\n    margin-top: 10px;\n    width: 100%;\n  }\n"]))),Bn=v.b.input(Z||(Z=Object(m.a)(["\n  padding: 10px 5px;\n  width: 300px;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-weight: bold;\n  background: none;\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]))),Ln=v.b.h1($||($=Object(m.a)(["\n  font-weight: bold;\n  font-size: 19px;\n"]))),Dn=v.b.div(nn||(nn=Object(m.a)(["\n  overflow: auto;\n  height: calc((100vh - 240px));\n"]))),_n=v.b.table(en||(en=Object(m.a)(["\n  border-collapse: collapse;\n  text-align: left;\n  width: 100%;\n"]))),En=v.b.thead(tn||(tn=Object(m.a)(["\n  box-shadow: var(--box-shadow);\n  background: #fff;\n  position: sticky;\n  top: 0;\n"]))),Nn=v.b.tr(rn||(rn=Object(m.a)(["\n  border-bottom: solid 1px #e0e0e0;\n"]))),Jn=v.b.th(cn||(cn=Object(m.a)(["\n  padding: 16px;\n  font-weight: bold;\n"]))),In=v.b.td(an||(an=Object(m.a)(["\n  padding: 16px;\n"]))),Mn=v.b.tbody(on||(on=Object(m.a)([""]))),Pn=v.b.div(dn||(dn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  background: #fff;\n  padding: 0 6px;\n  @media (max-width: 1000px) {\n    flex-direction: column;\n    margin-top: 15px;\n  }\n"]))),Rn=v.b.div(sn||(sn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  gap: 10px;\n"]))),Fn=v.b.div(bn||(bn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: 800px) {\n    flex-direction: column;\n  }\n"]))),qn=v.b.div(ln||(ln=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n"]))),Gn=v.b.label(xn||(xn=Object(m.a)(["\n  margin-right: 10px;\n"]))),Un=v.b.select(pn||(pn=Object(m.a)(["\n  background: transparent;\n  outline: 1px solid #000;\n  padding: 5px;\n  border: none;\n\n  &:hover {\n    outline: 1px solid #c0c0c0;\n  }\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]))),An=v.b.div(jn||(jn=Object(m.a)([""]))),Hn=v.b.button(un||(un=Object(m.a)(["\n  cursor: pointer;\n  background: transparent;\n  outline: none;\n  border: none;\n  min-width: 50px;\n  min-height: 50px;\n"]))),Kn=(v.b.button(fn||(fn=Object(m.a)(['\n  border: 3px solid #00ff00;\n  border-radius: 5px;\n  color: #000;\n  font-size: 1rem;\n  /* height: "30px"; */\n  padding: 10px;\n  /* width: 10%; */\n  &:hover {\n    background-color: #fff;\n    border-color: #00ff00;\n    color: #00ff00;\n  }\n']))),v.b.button(hn||(hn=Object(m.a)(['\n  border: 3px solid #f1c72f;\n  border-radius: 5px;\n  color: #000;\n  font-size: 1rem;\n  /* height: "30px"; */\n  padding: 10px;\n  /* width: 10%; */\n  &:hover {\n    background-color: #fff;\n    border-color: #f1c72f;\n    color: #f1c72f;\n  }\n'])))),Qn=v.b.button(gn||(gn=Object(m.a)(['\n  border: 3px solid #ff3300;\n  border-radius: 5px;\n  color: #000;\n  font-size: 1rem;\n  /* height: "30px"; */\n  padding: 10px;\n  /* width: 10%; */\n  &:hover {\n    background-color: #fff;\n    border-color: #ff3300;\n    color: #ff3300;\n  }\n']))),Tn=v.b.option(On||(On=Object(m.a)([""]))),Vn={limit:10,page:1,search:"",orderByColumns:"",orderByDirection:"desc"};function Wn(n){var e=n.data,t=void 0===e?[]:e,r=n.columns,c=void 0===r?[]:r,a=n.columnNames,o=void 0===a?[]:a,i=n.columnButtons,d=void 0===i?[]:i,s=n.columnsModify,b=void 0===s?{}:s,x=n.title,p=void 0===x?"":x,j=T(n.keyStorage,Vn),u=Object(h.a)(j,2),f=u[0],g=f.limit,O=f.orderByColumns,m=f.orderByDirection,v=f.page,w=f.search,y=u[1],k=function(n){return Object.values(n).toString().toLowerCase().replace(",","").includes(w.toLowerCase())},C=Math.ceil(t.filter(k).length/g);return Object(_.jsxs)(kn,{children:[Object(_.jsxs)(Cn,{children:[Object(_.jsxs)(zn,{children:[Object(_.jsx)(Ln,{children:p}),Object(_.jsxs)(Sn,{children:[Object(_.jsx)(Bn,{type:"text",value:w,placeholder:"Pesquisar",id:"search",onChange:function(n){var e=n.target;return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{search:e.value,page:1})}))}}),Object(_.jsx)("label",{for:"search",children:w.length>0?Object(_.jsx)(mn.a,{onClick:function(){y((function(n){return Object(l.a)(Object(l.a)({},n),{},{search:""})}))},style:{cursor:"pointer"}}):Object(_.jsx)(vn.a,{})})]})]}),Object(_.jsxs)(Pn,{children:[Object(_.jsxs)(Rn,{children:[Object(_.jsxs)(Un,{value:O,onChange:function(n){var e=n.target;return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{orderByColumns:e.value})}))},children:[Object(_.jsx)(Tn,{value:"",children:"Ordenar por coluna"}),c.map((function(n,e){return Object(_.jsx)(Tn,{value:n,children:n},e)}))]}),Object(_.jsxs)(Un,{value:m,onChange:function(n){var e=n.target;return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{orderByDirection:e.value})}))},children:[Object(_.jsx)(Tn,{value:"",children:"Ordenar por tipo"}),Object(_.jsx)(Tn,{value:"asc",children:"Crescente"}),Object(_.jsx)(Tn,{value:"desc",children:"Descrecente"})]})]}),Object(_.jsx)(Rn,{children:Object(_.jsxs)(Fn,{children:[Object(_.jsxs)(qn,{children:[Object(_.jsx)(Gn,{children:"Linha(s) selecionada(s)"}),Object(_.jsxs)(Un,{value:g,onChange:function(n){var e=n.target;return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{limit:e.value,page:1})}))},children:[Object(_.jsx)(Tn,{value:10,children:"10"}),Object(_.jsx)(Tn,{value:50,children:"50"}),Object(_.jsx)(Tn,{value:100,children:"100"})]})]}),Object(_.jsxs)(qn,{children:[Object(_.jsxs)(An,{children:["pagina ",v," de ",C]}),Object(_.jsx)(Hn,{disabled:1===v,onClick:function(){return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{page:n.page-1})}))},children:Object(_.jsx)(wn.a,{})}),Object(_.jsx)(Hn,{disabled:v>=C,onClick:function(){return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{page:n.page+1})}))},children:Object(_.jsx)(yn.a,{})})]})]})})]})]}),Object(_.jsx)(Dn,{children:Object(_.jsxs)(_n,{children:[Object(_.jsx)(En,{children:Object(_.jsxs)(Nn,{children:[o.map((function(n,e){return Object(_.jsx)(Jn,{children:n},e)})),d.map((function(n,e){return Object(_.jsx)(Jn,{},e)}))]})}),Object(_.jsx)(Mn,{children:t.filter(k).sort((function(n,e){if(""===O)return 0;switch(m){case"desc":return e[O]>n[O]?1:e[O]<n[O]?-1:0;case"asc":return n[O]>e[O]?1:n[O]<e[O]?-1:0;default:return 0}})).slice((v-1)*g,(v-1)*g+g).map((function(n,e){return Object(_.jsxs)(Nn,{children:[c.map((function(e,t){return Object.keys(b).includes(e)?Object(_.jsx)(In,{children:b[e](n[e])},t):Object(_.jsx)(In,{children:n[e]},t)})),d.map((function(e,t){return Object(_.jsx)(In,{children:e(n)},t)}))]},e)}))})]})})]})}var Xn={id:void 0,nome:"",cidade:"",posicao:"",date_nasc:null};var Yn,Zn,$n,ne,ee,te=function(){var n=d.a.useState(Xn),e=Object(h.a)(n,2),t=e[0],r=e[1],c=d.a.useState(null),a=Object(h.a)(c,2),o=a[0],i=a[1],s=Object(x.g)();function b(){return p.apply(this,arguments)}function p(){return(p=Object(f.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.get("/teste");case 2:e=n.sent,console.log(e.data),i(e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(){return(j=Object(f.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.id){n.next=7;break}return n.next=3,O.put("/edit/".concat(t.id),{nome:t.nome,cidade:t.cidade,posicao:t.posicao,date_nasc:t.date_nasc});case 3:b(),r(Xn),n.next=12;break;case 7:return n.next=9,O.post("/cadastro",t);case 9:console.log(t),b(),r(Xn);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(){return(g=Object(f.a)(u.a.mark((function n(e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.delete("/delete/".concat(e));case 2:b();case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=Object(f.a)(u.a.mark((function n(e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e),r(e);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return d.a.useEffect((function(){b()}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(U,{onClick:function(){s.push("/home")},children:"Retorno"}),Object(_.jsxs)(G,{children:[Object(_.jsx)("div",{children:Object(_.jsxs)(A,{children:[Object(_.jsx)(H,{children:"Cadastre o jogador"}),Object(_.jsx)(Q,{type:"text",value:t.nome,onChange:function(n){return r(Object(l.a)(Object(l.a)({},t),{},{nome:n.target.value}))},placeholder:"Nome do jogador"}),Object(_.jsx)(Q,{type:"text",value:t.cidade,onChange:function(n){return r(Object(l.a)(Object(l.a)({},t),{},{cidade:n.target.value}))},placeholder:"Cidade"}),Object(_.jsx)(Q,{type:"text",value:t.posicao,onChange:function(n){return r(Object(l.a)(Object(l.a)({},t),{},{posicao:n.target.value}))},placeholder:"Posi\xe7\xe3o"}),Object(_.jsx)(Q,{type:"date",value:t.date_nasc,onChange:function(n){return r(Object(l.a)(Object(l.a)({},t),{},{date_nasc:n.target.value}))},placeholder:"Data de nascimento"}),Object(_.jsx)(K,{onClick:function(){return j.apply(this,arguments)},style:{background:"#b3b3b3"},children:"Cadastrar"})]})}),Object(_.jsx)("div",{children:Object(_.jsx)(Wn,{columns:o?Object.keys(o[0]):[],data:o||[],title:"Lista de jogadores",columnButtons:[function(n){return Object(_.jsx)(Kn,{onClick:function(){return function(n){return m.apply(this,arguments)}(n)},children:"Editar"})},function(n){return Object(_.jsx)(Qn,{onClick:function(){return function(n){return g.apply(this,arguments)}(n.id)},children:"Deletar"})}]})})]})]})},re=v.b.nav(Yn||(Yn=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 1200px) {\n    align-items: center;\n    font-size: small;\n    flex-direction: column;\n    justify-content: center;\n  }\n"]))),ce=v.b.ul(Zn||(Zn=Object(m.a)(["\n  cursor: pointer;\n  padding: 0;\n  ul {\n    display: none;\n  }\n  @media (max-width: 1200px) {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n  }\n"]))),ae=v.b.li($n||($n=Object(m.a)(["\n  background-color: transparent;\n  border-radius: 5px;\n  color: #fff;\n  float: left;\n  font-size: 1rem;\n  height: 40px;\n  line-height: 40px;\n  list-style: none;\n  text-align: center;\n  width: 200px;\n  &:hover {\n    background-color: #fff;\n    background-image: linear-gradient(\n      to left,\n      #d9dff8,\n      #e4e7fa,\n      #eeeefb,\n      #f7f7fd,\n      #ffffff\n    );\n    color: #000;\n    ul {\n      display: block;\n    }\n  }\n"]))),oe=Object(v.b)(p.b)(ne||(ne=Object(m.a)(["\n  color: #fff;\n  text-decoration: none;\n  &:hover {\n    color: #000;\n  }\n"]))),ie=v.b.button(ee||(ee=Object(m.a)(["\n  background: transparent;\n  border-color: transparent;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  cursor: pointer;\n  font-size: 1rem;\n  color: #fff;\n  &:hover {\n    background-image: linear-gradient(\n      to left,\n      #d9dff8,\n      #e4e7fa,\n      #eeeefb,\n      #f7f7fd,\n      #ffffff\n    );\n    color: #000;\n  }\n  text-align: center;\n"])));var de,se,be,le,xe,pe,je,ue,fe,he,ge,Oe,me,ve,we,ye,ke,Ce,ze,Se,Be,Le,De,_e,Ee,Ne,Je,Ie,Me,Pe,Re,Fe,qe=function(){return Object(_.jsxs)(re,{class:"menu",children:[Object(_.jsxs)(ce,{children:[Object(_.jsx)(ae,{children:Object(_.jsx)(oe,{to:"/home",children:"Inicio"})}),Object(_.jsxs)(ae,{children:[Object(_.jsx)(oe,{to:"/player",children:"Jogador"}),Object(_.jsxs)(ce,{children:[Object(_.jsx)(ae,{children:Object(_.jsx)(oe,{to:"/registration",children:"Cadastrar jogador"})}),Object(_.jsx)(ae,{children:Object(_.jsx)(oe,{to:"/spent",children:"Gasto jogador"})})]})]}),Object(_.jsx)(ae,{children:Object(_.jsx)(oe,{to:"/contact",children:"Contato"})})]}),Object(_.jsx)(ie,{children:Object(_.jsx)(oe,{to:"/",children:"Sair"})})]})},Ge=(v.b.div(de||(de=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  justify-items: center;\n  @media (max-width: 1024px) {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n"]))),v.b.div(se||(se=Object(m.a)(["\n  background-color: #000;\n  border: 3px solid #000;\n  display: flex;\n  grid-column: 1/-1;\n  justify-content: flex-end;\n  margin-bottom: 40px;\n  padding: 10px;\n  width: 100%;\n  @media (max-width: 1024px) {\n    justify-content: center;\n    margin-bottom: 20px;\n  }\n"]))),v.b.button(be||(be=Object(m.a)(["\n  background-color: #ff0000;\n  border-color: #000;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  font-size: 1rem;\n  padding: 5px;\n"]))),v.b.div(le||(le=Object(m.a)(["\n  align-items: center;\n  background-color: #0066ff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  justify-items: stretch;\n  padding: 30px;\n"]))),v.b.h1(xe||(xe=Object(m.a)(["\n  grid-column: 1/-1;\n  text-align: center;\n"]))),v.b.button(pe||(pe=Object(m.a)(["\n  background-color: ",";\n  border-color: #000;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #000;\n  font-size: 1rem;\n  margin: 10px;\n  padding: 10px 25px;\n"])),(function(n){return n.color})),v.b.table(je||(je=Object(m.a)(["\n  background-color: #0066ff;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  font-size: 1.8rem;\n  @media (max-width: 1024px) {\n    display: flex;\n    width: 100%;\n  }\n"]))),v.b.input(ue||(ue=Object(m.a)(["\n  padding: 10px;\n"]))),v.b.div(fe||(fe=Object(m.a)(["\n  padding: 80px; ;\n"])))),Ue=v.b.button(he||(he=Object(m.a)(["\n  background-color: transparent;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  font-size: 1rem;\n  justify-content: flex-end;\n  margin-left: auto;\n  padding: 5px;\n  &:hover {\n    background-image: linear-gradient(\n      to left,\n      #d9dff8,\n      #e4e7fa,\n      #eeeefb,\n      #f7f7fd,\n      #ffffff\n    );\n    color: #000;\n  }\n"]))),Ae=v.b.div(ge||(ge=Object(m.a)(["\n  background: #fff;\n  border-radius: 4px;\n  width: 100%;\n  box-shadow: var(--box-shadow);\n  / min-width: calc((100vw - 1000px) / 3); /\n"]))),He=v.b.div(Oe||(Oe=Object(m.a)(["\n  background: #fff;\n  box-shadow: var(--box-shadow);\n  border-bottom: 1px solid #c0c0c0;\n"]))),Ke=v.b.div(me||(me=Object(m.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #c0c0c0;\n  background: #fff;\n  @media (max-width: 800px) {\n    position: initial;\n    flex-direction: column;\n    padding: 10px;\n  }\n"]))),Qe=v.b.div(ve||(ve=Object(m.a)(["\n  padding-right: 10px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  outline: 1px solid #000;\n\n  &:hover {\n    outline: 1px solid #c0c0c0;\n  }\n  @media (max-width: 800px) {\n    margin-top: 10px;\n    width: 100%;\n  }\n"]))),Te=v.b.input(we||(we=Object(m.a)(["\n  padding: 10px 5px;\n  width: 300px;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  font-weight: bold;\n  background: none;\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]))),Ve=v.b.h1(ye||(ye=Object(m.a)(["\n  font-weight: bold;\n  font-size: 19px;\n"]))),We=v.b.div(ke||(ke=Object(m.a)(["\n  overflow: auto;\n  height: calc((100vh - 240px));\n"]))),Xe=v.b.table(Ce||(Ce=Object(m.a)(["\n  border-collapse: collapse;\n  text-align: left;\n  width: 100%;\n"]))),Ye=v.b.thead(ze||(ze=Object(m.a)(["\n  box-shadow: var(--box-shadow);\n  background: #fff;\n  position: sticky;\n  top: 0;\n"]))),Ze=v.b.tr(Se||(Se=Object(m.a)(["\n  border-bottom: solid 1px #e0e0e0;\n"]))),$e=v.b.th(Be||(Be=Object(m.a)(["\n  padding: 16px;\n  font-weight: bold;\n"]))),nt=v.b.td(Le||(Le=Object(m.a)(["\n  padding: 16px;\n"]))),et=v.b.tbody(De||(De=Object(m.a)([""]))),tt=v.b.div(_e||(_e=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  background: #fff;\n  padding: 0 6px;\n  @media (max-width: 1000px) {\n    flex-direction: column;\n    margin-top: 15px;\n  }\n"]))),rt=v.b.div(Ee||(Ee=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  gap: 10px;\n"]))),ct=v.b.div(Ne||(Ne=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: 800px) {\n    flex-direction: column;\n  }\n"]))),at=v.b.div(Je||(Je=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 10px;\n"]))),ot=v.b.label(Ie||(Ie=Object(m.a)(["\n  margin-right: 10px;\n"]))),it=v.b.select(Me||(Me=Object(m.a)(["\n  background: transparent;\n  outline: 1px solid #000;\n  padding: 5px;\n  border: none;\n\n  &:hover {\n    outline: 1px solid #c0c0c0;\n  }\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]))),dt=v.b.div(Pe||(Pe=Object(m.a)([""]))),st=v.b.button(Re||(Re=Object(m.a)(["\n  cursor: pointer;\n  background: transparent;\n  outline: none;\n  border: none;\n  min-width: 50px;\n  min-height: 50px;\n"]))),bt=v.b.option(Fe||(Fe=Object(m.a)([""]))),lt={limit:10,page:1,search:"",orderByColumns:"",orderByDirection:"desc"};function xt(n){var e=n.data,t=void 0===e?[]:e,r=n.columns,c=void 0===r?[]:r,a=n.columnNames,o=void 0===a?[]:a,i=n.columnButtons,d=void 0===i?[]:i,s=n.columnsModify,b=void 0===s?{}:s,x=n.title,p=void 0===x?"":x,j=T(n.keyStorage,lt),u=Object(h.a)(j,2),f=u[0],g=f.limit,O=f.orderByColumns,m=f.orderByDirection,v=f.page,w=f.search,y=u[1],k=function(n){return Object.values(n).toString().toLowerCase().replace(",","").includes(w.toLowerCase())},C=Math.ceil(t.filter(k).length/g);return Object(_.jsxs)(Ae,{children:[Object(_.jsxs)(He,{children:[Object(_.jsxs)(Ke,{children:[Object(_.jsx)(Ve,{children:p}),Object(_.jsxs)(Qe,{children:[Object(_.jsx)(Te,{type:"text",value:w,placeholder:"Pesquisar",id:"search",onChange:function(n){var e=n.target;return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{search:e.value,page:1})}))}}),Object(_.jsx)("label",{for:"search",children:w.length>0?Object(_.jsx)(mn.a,{onClick:function(){y((function(n){return Object(l.a)(Object(l.a)({},n),{},{search:""})}))},style:{cursor:"pointer"}}):Object(_.jsx)(vn.a,{})})]})]}),Object(_.jsxs)(tt,{children:[Object(_.jsxs)(rt,{children:[Object(_.jsxs)(it,{value:O,onChange:function(n){var e=n.target;return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{orderByColumns:e.value})}))},children:[Object(_.jsx)(bt,{value:"",children:"Ordenar por coluna"}),c.map((function(n,e){return Object(_.jsx)(bt,{value:n,children:n},e)}))]}),Object(_.jsxs)(it,{value:m,onChange:function(n){var e=n.target;return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{orderByDirection:e.value})}))},children:[Object(_.jsx)(bt,{value:"",children:"Ordenar por tipo"}),Object(_.jsx)(bt,{value:"asc",children:"Crescente"}),Object(_.jsx)(bt,{value:"desc",children:"Descrecente"})]})]}),Object(_.jsx)(rt,{children:Object(_.jsxs)(ct,{children:[Object(_.jsxs)(at,{children:[Object(_.jsx)(ot,{children:"Linha(s) selecionada(s)"}),Object(_.jsxs)(it,{value:g,onChange:function(n){var e=n.target;return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{limit:e.value,page:1})}))},children:[Object(_.jsx)(bt,{value:10,children:"10"}),Object(_.jsx)(bt,{value:50,children:"50"}),Object(_.jsx)(bt,{value:100,children:"100"})]})]}),Object(_.jsxs)(at,{children:[Object(_.jsxs)(dt,{children:["pagina ",v," de ",C]}),Object(_.jsx)(st,{disabled:1===v,onClick:function(){return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{page:n.page-1})}))},children:Object(_.jsx)(wn.a,{})}),Object(_.jsx)(st,{disabled:v>=C,onClick:function(){return y((function(n){return Object(l.a)(Object(l.a)({},n),{},{page:n.page+1})}))},children:Object(_.jsx)(yn.a,{})})]})]})})]})]}),Object(_.jsx)(We,{children:Object(_.jsxs)(Xe,{children:[Object(_.jsx)(Ye,{children:Object(_.jsxs)(Ze,{children:[o.map((function(n,e){return Object(_.jsx)($e,{children:n},e)})),d.map((function(n,e){return Object(_.jsx)($e,{},e)}))]})}),Object(_.jsx)(et,{children:t.filter(k).sort((function(n,e){if(""===O)return 0;switch(m){case"desc":return e[O]>n[O]?1:e[O]<n[O]?-1:0;case"asc":return n[O]>e[O]?1:n[O]<e[O]?-1:0;default:return 0}})).slice((v-1)*g,(v-1)*g+g).map((function(n,e){return Object(_.jsxs)(Ze,{children:[c.map((function(e,t){return Object.keys(b).includes(e)?Object(_.jsx)(nt,{children:b[e](n[e])},t):Object(_.jsx)(nt,{children:n[e]},t)})),d.map((function(e,t){return Object(_.jsx)(nt,{children:e(n)},t)}))]},e)}))})]})})]})}var pt,jt,ut,ft=function(){var n=d.a.useState(null),e=Object(h.a)(n,2),t=e[0],r=e[1],c=Object(x.g)();function a(){return(a=Object(f.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.get("/teste");case 2:e=n.sent,console.log(e.data),r(e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return d.a.useEffect((function(){!function(){a.apply(this,arguments)}()}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Ue,{onClick:function(){c.push("/home")},children:"Retorno"}),Object(_.jsx)(Ge,{children:Object(_.jsx)(xt,{columnNames:["nome","cidade","data_nasc","posicao"],columns:["nome","cidade","date_nasc","posicao"],data:t||[],title:"Lista de jogadores"})})]})},ht=v.b.div(pt||(pt=Object(m.a)(["\n  align-items: center;\n  background: transparent;\n  border-radius: 10px;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n"]))),gt=v.b.div(jt||(jt=Object(m.a)(["\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  display: grid;\n  font-size: 1rem;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 20px;\n  @media (max-width: 1200px) {\n    font-size: small;\n    gap: 10px;\n    grid-column: auto;\n  }\n"]))),Ot=v.b.button(ut||(ut=Object(m.a)(["\n  display: flex;\n  background-color: transparent;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #fff;\n  cursor: pointer;\n  font-size: 1rem;\n  justify-content: flex-end;\n  margin-left: auto;\n  padding: 5px;\n  &:hover {\n    background-image: linear-gradient(\n      to left,\n      #d9dff8,\n      #e4e7fa,\n      #eeeefb,\n      #f7f7fd,\n      #ffffff\n    );\n    color: #000;\n  }\n"]))),mt=t(101),vt=t(102),wt=t(103);var yt=function(){var n=Object(x.g)();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Ot,{onClick:function(){n.push("/home")},children:"Retorno"}),Object(_.jsx)(ht,{children:Object(_.jsxs)(gt,{children:[Object(_.jsx)("h1",{children:Object(_.jsx)(mt.a,{style:{fontSize:"2rem"}})}),Object(_.jsx)("h1",{children:"josejls@hotmail.com.br"}),Object(_.jsx)("h1",{children:Object(_.jsx)(vt.a,{})}),Object(_.jsx)("h1",{children:"+55 (19) 99503-3572"}),Object(_.jsx)("h1",{children:Object(_.jsx)(wt.a,{})}),Object(_.jsx)("h1",{children:"Indaiatuba-SP"})]})})]})};var kt,Ct=function(){return Object(_.jsx)("div",{children:Object(_.jsx)(yt,{})})},zt=v.b.button(kt||(kt=Object(m.a)(["\n  background-color: transparent;\n  border-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  color: #fff;\n  cursor: pointer;\n  display: flex;\n  font-size: 1rem;\n  justify-content: flex-end;\n  margin-left: auto;\n  padding: 5px;\n  &:hover {\n    background-image: linear-gradient(\n      to left,\n      #d9dff8,\n      #e4e7fa,\n      #eeeefb,\n      #f7f7fd,\n      #ffffff\n    );\n    color: #000;\n  }\n"])));var St,Bt=function(){var n=d.a.useState(null),e=Object(h.a)(n,2),t=e[0],r=e[1],c=Object(x.g)();function a(){return(a=Object(f.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.get("/spent");case 2:e=n.sent,console.log(e),r(e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return d.a.useEffect((function(){!function(){a.apply(this,arguments)}()}),[]),Object(_.jsxs)("div",{children:[Object(_.jsx)(zt,{onClick:function(){c.push("/home")},children:"Retorno"}),Object(_.jsx)(xt,{title:"Lista de jogadores",columnNames:t?Object.keys(t[0]):[],columns:t?Object.keys(t[0]):[],data:t||[]})]})},Lt=function(){return Object(_.jsx)(p.a,{basename:"/Jsl",children:Object(_.jsxs)(x.d,{children:[Object(_.jsx)(x.b,{exact:!0,path:"/",render:function(){return Object(_.jsx)(q,{})}}),Object(_.jsx)(x.b,{exact:!0,path:"/home",render:function(){return Object(_.jsx)(qe,{})}}),Object(_.jsx)(x.b,{exact:!0,path:"/view",render:function(){return Object(_.jsx)(te,{})}}),Object(_.jsx)(x.b,{exact:!0,path:"/player",render:function(){return Object(_.jsx)(ft,{})}}),Object(_.jsx)(x.b,{exact:!0,path:"/contact",render:function(){return Object(_.jsx)(Ct,{})}}),Object(_.jsx)(x.b,{exact:!0,path:"/registration",render:function(){return Object(_.jsx)(te,{})}}),Object(_.jsx)(x.b,{exact:!0,path:"/spent",render:function(){return Object(_.jsx)(Bt,{})}})]})})},Dt=t.p+"static/media/pexels-photo-5597398.7841e5e2.jpeg",_t=Object(v.a)(St||(St=Object(m.a)(["\n *{margin: 0;\n padding: 0;\n box-sizing: border-box;\n }\n body{\n    ","\n    ","\n    background: url(",");\n    background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n }\n\n\n"])),"","",Dt),Et=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(_t,{}),Object(_.jsx)(Lt,{})]})},Nt=t(19),Jt=Object(Nt.b)({login:D}),It=Object(S.a)({reducer:Jt});b.a.render(Object(_.jsx)(d.a.StrictMode,{children:Object(_.jsx)(z.a,{store:It,children:Object(_.jsx)(Et,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.7f9e3407.chunk.js.map