(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(17),c=n(1),a={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s={sendMessage:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},106:function(e,t,n){"use strict";n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return N})),n.d(t,"b",(function(){return U}));var r=n(9),c=n.n(r),a=n(13),s=n(17),i=n(1),u={"messages-received":[],"status-changed":[]},o=null,l=function(){h("pending"),setTimeout(p,3e3)},d=function(e){var t=JSON.parse(e.data);u["messages-received"].forEach((function(e){return e(t)}))},f=function(){h("ready")},j=function(){h("error"),console.error("REFRESH PAGE")},b=function(){var e,t,n,r;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(t=o)||void 0===t||t.removeEventListener("message",d),null===(n=o)||void 0===n||n.removeEventListener("open",f),null===(r=o)||void 0===r||r.removeEventListener("error",j)},h=function(e){u["status-changed"].forEach((function(t){return t(e)}))};function p(){var e;b(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),h("pending"),o.addEventListener("close",l),o.addEventListener("message",d),o.addEventListener("open",f),o.addEventListener("error",j)}var O=function(){p()},g=function(){var e;u["messages-received"]=[],u["status-changed"]=[],b(),null===(e=o)||void 0===e||e.close()},S=function(e,t){return u[e].push(t),function(){u[e]=u[e].filter((function(e){return e!==t}))}},x=function(e,t){u[e]=u[e].filter((function(e){return e!==t}))},v=function(e){var t;null===(t=o)||void 0===t||t.send(e)},m=n(179),E={messages:[],status:"pending"},w=function(e){return{type:"SN/chat/MESSAGES_RECEVIED",payload:{messages:e}}},y=function(e){return{type:"SN/chat/STATUS_CHANGED",payload:{status:e}}},_=null,T=function(e){return null===_&&(_=function(t){e(w(t))}),_},C=null,P=function(e){return null===C&&(C=function(t){e(y(t))}),C},I=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(),S("messages-received",T(t)),S("status-changed",P(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x("messages-received",T(t)),S("status-changed",P(t)),g();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/chat/MESSAGES_RECEVIED":return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(s.a)(e.messages),Object(s.a)(t.payload.messages.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(m.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"SN/chat/STATUS_CHANGED":return Object(i.a)(Object(i.a)({},e),{},{status:t.payload.status});default:return e}}},137:function(e,t,n){},138:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(28),s=n.n(a),i=(n(137),function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,189)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),u=n(32),o=n(33),l=n(35),d=n(34),f=(n(138),n(27)),j=n(14),b=n(12),h=n(70),p=n(108),O=Object(p.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),g=function(e){return e.usersPage.pageSize},S=function(e){return e.usersPage.totalUsersCount},x=function(e){return e.usersPage.currentPage},v=function(e){return e.usersPage.isFetching},m=function(e){return e.usersPage.followingInProgress},E=function(e){return e.usersPage.filter},w=n(1),y=n(8),_=n(6),T=n(87),C=n.n(T),P=n(4),I=n.n(P),N=n(2),U=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,a=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(t/n),o=[],l=1;l<=u;l++)o.push(l);var d=Math.ceil(u/i),f=Object(r.useState)(1),j=Object(_.a)(f,2),b=j[0],h=j[1],p=(b-1)*i+1,O=b*i;return Object(N.jsxs)("div",{className:C.a.paginator,children:[b>1&&Object(N.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),o.filter((function(e){return e>=p&&e<=O})).map((function(e){return Object(N.jsx)("span",{className:I()(Object(y.a)({},C.a.selectedPage,c===e),C.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),d>b&&Object(N.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},R=n(65),k=n.n(R),L=n(96),A=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return Object(N.jsxs)("div",{children:[Object(N.jsxs)("span",{children:[Object(N.jsx)("div",{children:Object(N.jsx)(f.c,{to:"/profile/"+t.id,children:Object(N.jsx)("img",{src:null!=t.photos.small?t.photos.small:L.a,className:k.a.userPhoto})})}),Object(N.jsx)("div",{children:t.followed?Object(N.jsx)("button",{className:k.a.buttonFollow,disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(N.jsx)("button",{className:k.a.buttonFollow,disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(N.jsxs)("span",{children:[Object(N.jsxs)("span",{children:[Object(N.jsx)("div",{children:t.name}),Object(N.jsx)("div",{children:t.status})]}),Object(N.jsxs)("span",{children:[Object(N.jsx)("div",{children:"user.location.country"}),Object(N.jsx)("div",{children:"user.location.city"})]})]})]})},F=n(41),G=function(e){return{}},D=c.a.memo((function(e){var t=e.onFilterChanged,n=Object(b.d)(E);return Object(N.jsx)("div",{children:Object(N.jsx)(F.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},validate:G,onSubmit:function(e,n){var r=n.setSubmitting,c={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(N.jsxs)(F.b,{children:[Object(N.jsx)(F.a,{type:"text",name:"term"}),Object(N.jsxs)(F.a,{name:"friend",as:"select",children:[Object(N.jsx)("option",{value:"null",children:"All"}),Object(N.jsx)("option",{value:"true",children:"Only followed"}),Object(N.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(N.jsx)("button",{className:k.a.find,type:"submit",disabled:t,children:"Find"})]})}})})})),z=n(9),M=n.n(z),H=n(13),V=n(17),W=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},B=n(19),Y={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return B.a.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return B.a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return B.a.delete("follow/".concat(e)).then((function(e){return e.data}))}},q={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},J=function(e){return{type:"SN/USERS/FOLLOW",userId:e}},X=function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},K=function(e){return{type:"SN/USERS/SET_USERS",users:e}},Z=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},Q=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},$=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},ee=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},te=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ne=function(e,t,n){return function(){var r=Object(H.a)(M.a.mark((function r(c,a){var s;return M.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(ee(!0)),c(Z(e)),c(Q(n)),r.next=5,Y.getUsers(e,t,n.term,n.friend);case 5:s=r.sent,c(ee(!1)),c(K(s.items)),c($(s.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},re=function(){var e=Object(H.a)(M.a.mark((function e(t,n,r,c){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(te(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(w.a)(Object(w.a)({},e),{},{users:W(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(w.a)(Object(w.a)({},e),{},{users:W(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(w.a)(Object(w.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(w.a)(Object(w.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(V.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ae=n(94),se=function(e){var t=Object(b.d)(O),n=Object(b.d)(S),c=Object(b.d)(x),a=Object(b.d)(g),s=Object(b.d)(E),i=Object(b.d)(m),u=Object(b.c)(),o=Object(j.g)();Object(r.useEffect)((function(){var e=ae.parse(o.location.search.substr(1)),t=c,n=s;switch(e.page&&(t=Number(e.page)),e.term&&(n=Object(w.a)(Object(w.a)({},n),{},{term:e.term})),e.friend){case"null":n=Object(w.a)(Object(w.a)({},n),{},{friend:null});break;case"true":n=Object(w.a)(Object(w.a)({},n),{},{friend:!0});break;case"false":n=Object(w.a)(Object(w.a)({},n),{},{friend:!1})}u(ne(t,a,n))}),[]),Object(r.useEffect)((function(){var e={};s.term&&(e.term=s.term),null!==s.friend&&(e.friend=String(s.friend)),1!==c&&(e.page=String(c)),o.push({pathname:"/users",search:ae.stringify(e)})}),[s,c]);var l=function(e){u(function(e){return function(){var t=Object(H.a)(M.a.mark((function t(n){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re(n,e,Y.follow.bind(Y),J);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},d=function(e){u(function(e){return function(){var t=Object(H.a)(M.a.mark((function t(n){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re(n,e,Y.unfollow.bind(Y),X);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(N.jsxs)("div",{children:[Object(N.jsx)(D,{onFilterChanged:function(e){u(ne(1,a,e))}}),Object(N.jsx)(U,{currentPage:c,onPageChanged:function(e){u(ne(e,a,s))},totalItemsCount:n,pageSize:a}),Object(N.jsx)("div",{children:t.map((function(e){return Object(N.jsx)(A,{user:e,followingInProgress:i,unfollow:d,follow:l},e.id)}))})]})},ie=function(e){var t=e.pageTitle,n=Object(b.d)(v);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h2",{children:t}),n?Object(N.jsx)(h.a,{}):null,Object(N.jsx)(se,{})]})},ue=function(){return B.a.get("auth/me").then((function(e){return e.data}))},oe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return B.a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},le=function(){return B.a.delete("auth/login")},de=function(){return B.a.get("security/get-captcha-url").then((function(e){return e.data}))},fe={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},je=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},be=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},he=function(){return function(){var e=Object(H.a)(M.a.mark((function e(t){var n,r,c,a,s;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue();case 2:(n=e.sent).resultCode===B.b.Success&&(r=n.data,c=r.id,a=r.login,s=r.email,t(je(c,s,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe=function(){return function(){var e=Object(H.a)(M.a.mark((function e(t){var n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:n=e.sent,r=n.url,t(be(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(w.a)(Object(w.a)({},e),t.payload);default:return e}},ge=function(e){return e.auth.isAuth},Se=function(e){return e.auth.login},xe=function(e){var t=e.logoutCollBack;return e.isAuth?Object(N.jsx)(j.a,{to:"/profile"}):Object(N.jsx)("div",{children:Object(N.jsx)(F.c,{initialValues:{email:"",password:"",rememberMe:!1,captcha:""},onSubmit:function(e,n){t(e)},children:function(e){return Object(N.jsxs)(F.b,{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(N.jsx)(F.a,{name:"email",placeholder:"email"})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(N.jsx)(F.a,{name:"password",type:"password",placeholder:"password"})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c"}),"  ",Object(N.jsx)(F.a,{name:"rememberMe",type:"checkbox"})]}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{type:"submit",children:"Submit"})})]})}})})},ve=function(){var e=Object(b.d)(ge),t=Object(b.c)();return Object(N.jsx)(xe,{isAuth:e,logoutCollBack:function(e){var n=e.email,r=e.password,c=e.rememberMe;t(function(e,t,n,r){return function(){var c=Object(H.a)(M.a.mark((function c(a){var s;return M.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,oe(e,t,n,r);case 2:(s=c.sent).resultCode===B.b.Success?a(he()):s.resultCode===B.c.CaptchaIsRequired&&a(pe());case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(n,r,c))}})},me=n(57),Ee={initialized:!1,errorText:null},we=function(){return{type:"INITIALIZED_SUCCESS"}},ye=function(e){return{type:"ERROR_SUCCESS",textError:e}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});case"ERROR_SUCCESS":return Object(w.a)(Object(w.a)({},e),{},{errorText:t.textError});default:return e}},Te=n(95),Ce=n(105),Pe={},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe;return e},Ne=n(115),Ue=n(106),Re=Object(me.b)({profilePage:Te.b,dialogsPage:Ce.b,sidebar:Ie,usersPage:ce,auth:Oe,app:_e,chat:Ue.a}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.c,Le=Object(me.d)(Re,ke(Object(me.a)(Ne.a)));window.__store__=Le;var Ae=Le;function Fe(e){return function(t){return Object(N.jsx)(c.a.Suspense,{fallback:Object(N.jsx)("div",{children:"loading..."}),children:Object(N.jsx)(e,Object(w.a)({},t))})}}var Ge=function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:e.errorText}),Object(N.jsx)("p",{children:"We are sorry but the page you are looking for does not exist."})]})},De=(n(169),n(178)),ze=n(174),Me=n(182),He=n(183),Ve=n(180),We=n(181),Be=n(177),Ye=n(176),qe=function(e){var t=Object(b.d)(ge),n=Object(b.d)(Se),r=Object(b.c)(),c=ze.a.Header;return Object(N.jsx)(c,{className:"header",children:Object(N.jsxs)(Ve.a,{children:[Object(N.jsxs)(We.a,{span:18,children:[" ",Object(N.jsx)(De.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(N.jsx)(De.a.Item,{children:Object(N.jsx)(f.b,{to:"/users",children:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0441\u0438\u0442\u044b"})},"1")})]}),t?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(We.a,{span:1,children:Object(N.jsx)(Be.a,{alt:n||"",style:{backgroundColor:"#87d068"},icon:Object(N.jsx)(Me.a,{})})}),Object(N.jsxs)(We.a,{span:5,children:[Object(N.jsx)(Ye.a,{onClick:function(){r(function(){var e=Object(H.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:0===e.sent.data.resultCode&&t(je(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})," "]})]}):Object(N.jsxs)(We.a,{span:6,children:[Object(N.jsx)(f.b,{to:"/login",children:"Login"}),"  "]})]})})},Je=De.a.SubMenu,Xe=ze.a.Content,Ke=ze.a.Footer,Ze=ze.a.Sider,Qe=c.a.lazy((function(){return n.e(4).then(n.bind(null,191))})),$e=c.a.lazy((function(){return n.e(3).then(n.bind(null,190))})),et=c.a.lazy((function(){return n.e(5).then(n.bind(null,192))})),tt=Fe(Qe),nt=Fe($e),rt=Fe(et),ct=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(t){e.props.error("".concat(t.reason))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?null!=this.props.errorText?Object(N.jsx)(Ge,{errorText:this.props.errorText}):Object(N.jsxs)(ze.a,{children:[Object(N.jsx)(qe,{}),Object(N.jsx)(Xe,{style:{padding:"0 50px"},children:Object(N.jsxs)(ze.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(N.jsx)(Ze,{className:"site-layout-background",width:200,children:Object(N.jsxs)(De.a,{mode:"inline",style:{height:"100%"},children:[Object(N.jsxs)(Je,{icon:Object(N.jsx)(Me.a,{}),title:"My profile",children:[Object(N.jsx)(De.a.Item,{children:Object(N.jsx)(f.b,{to:"/profile",children:"Profile"})},"1"),Object(N.jsx)(De.a.Item,{children:Object(N.jsx)(f.b,{to:"/dialogs",children:"Messages"})},"2"),Object(N.jsx)(De.a.Item,{children:Object(N.jsx)(f.b,{to:"/chat",children:"Chat"})},"3")]},"sub1"),Object(N.jsx)(Je,{icon:Object(N.jsx)(He.a,{}),title:"Users",children:Object(N.jsx)(De.a.Item,{children:Object(N.jsx)(f.b,{to:"/users",children:"Users"})},"5")},"sub2")]})}),Object(N.jsx)(Xe,{style:{padding:"0 24px",minHeight:280},children:Object(N.jsxs)(j.d,{children:[Object(N.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(N.jsx)(j.a,{to:"/profile"})}}),Object(N.jsx)(j.b,{path:"/dialogs",render:function(){return Object(N.jsx)(tt,{})}}),Object(N.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(N.jsx)(nt,{})}}),Object(N.jsx)(j.b,{path:"/users",render:function(){return Object(N.jsx)(ie,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0438"})}}),Object(N.jsx)(j.b,{path:"/login",render:function(){return Object(N.jsx)(ve,{})}}),Object(N.jsx)(j.b,{path:"/chat",render:function(){return Object(N.jsx)(rt,{})}}),Object(N.jsx)(j.b,{path:"*",render:function(){return Object(N.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})}),Object(N.jsx)(Ke,{style:{textAlign:"center"},children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0442\u044c 2021"})]}):Object(N.jsx)(h.a,{})}}]),n}(r.Component),at=Object(me.c)(j.h,Object(b.b)((function(e){return{initialized:e.app.initialized,errorText:e.app.errorText}}),{initializeApp:function(){return function(e){var t=e(he());Promise.all([t]).then((function(){e(we())}))}},error:function(e){return function(t){t(ye(e));setTimeout((function(){return t(ye(null))}),2e3)}}}))(ct),st=function(){return Object(N.jsx)(f.a,{children:Object(N.jsx)(b.a,{store:Ae,children:Object(N.jsx)(at,{})})})};s.a.render(Object(N.jsx)(st,{}),document.getElementById("root")),i()},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c}));var r,c,a=n(114),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"fe43f864-7186-466f-88ee-13b781ec408f"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},65:function(e,t,n){e.exports={userPhoto:"users_userPhoto__31bNT",selectedPage:"users_selectedPage__B3En2",find:"users_find__ubOz_",buttonFollow:"users_buttonFollow__3RYt-"}},70:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.5788b05c.svg",c=n(2);t.a=function(){return Object(c.jsx)("div",{style:{backgroundColor:"white"},children:Object(c.jsx)("img",{src:r})})}},87:function(e,t,n){e.exports={paginator:"Paginator_paginator__1wsLv",pageNumber:"Paginator_pageNumber__1i6A9",selectedPage:"Paginator_selectedPage__2Q9RP"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return x}));var r=n(9),c=n.n(r),a=n(13),s=n(17),i=n(1),u=n(19),o=function(e){return u.a.get("profile/"+e).then((function(e){return e.data}))},l=function(e){return u.a.get("profile/status/"+e).then((function(e){return e.data}))},d=function(e){return u.a.put("profile/status",{status:e}).then((function(e){return e.data}))},f=function(e){var t=new FormData;return t.append("image",e),u.a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},j=function(e){return u.a.put("profile",e)},b={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:"",isFetchingSave:!1},h={addPostActionCreator:function(e){return{type:"ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SET_STATUS",status:e}},deletePost:function(e){return{type:"DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SAVE_PHOTO_SUCCESS",photos:e}},isFetchingTogle:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}}},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r=t.sent,n(h.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(h.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:0===t.sent.resultCode&&n(h.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(h.isFetchingTogle(!0)),t.next=3,f(e);case 3:0===(r=t.sent).resultCode&&n(h.savePhotoSuccess(r.data.photos)),n(h.isFetchingTogle(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,j(e);case 3:if(0!==t.sent.data.resultCode){t.next=11;break}if(null==a){t.next=10;break}n(p(a)),t.next=11;break;case 10:throw new Error("userId null");case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetchingSave:t.isFetching});default:return e}}},96:function(e,t,n){"use strict";t.a=n.p+"static/media/user.96e310a6.png"}},[[171,1,2]]]);
//# sourceMappingURL=main.c25cb593.chunk.js.map