(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,n){"use strict";t.a=n.p+"static/media/user.96e310a6.png"},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(18),c=n(1),a={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s={sendMessage:function(e){return{type:"SN/DIALOGS/SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/DIALOGS/SEND_MESSAGE":var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},112:function(e,t,n){"use strict";n.d(t,"c",(function(){return P})),n.d(t,"d",(function(){return U})),n.d(t,"b",(function(){return N}));var r=n(10),c=n.n(r),a=n(14),s=n(18),i=n(1),u={"messages-received":[],"status-changed":[]},o=null,l=function(){h("pending"),setTimeout(p,3e3)},d=function(e){var t=JSON.parse(e.data);u["messages-received"].forEach((function(e){return e(t)}))},j=function(){h("ready")},f=function(){h("error"),console.error("REFRESH PAGE")},b=function(){var e,t,n,r;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(t=o)||void 0===t||t.removeEventListener("message",d),null===(n=o)||void 0===n||n.removeEventListener("open",j),null===(r=o)||void 0===r||r.removeEventListener("error",f)},h=function(e){u["status-changed"].forEach((function(t){return t(e)}))};function p(){var e;b(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),h("pending"),o.addEventListener("close",l),o.addEventListener("message",d),o.addEventListener("open",j),o.addEventListener("error",f)}var O=function(){p()},g=function(){var e;u["messages-received"]=[],u["status-changed"]=[],b(),null===(e=o)||void 0===e||e.close()},x=function(e,t){return u[e].push(t),function(){u[e]=u[e].filter((function(e){return e!==t}))}},m=function(e,t){u[e]=u[e].filter((function(e){return e!==t}))},S=function(e){var t;null===(t=o)||void 0===t||t.send(e)},v=n(186),E={messages:[],status:"pending"},y=function(e){return{type:"SN/chat/MESSAGES_RECEVIED",payload:{messages:e}}},w=function(e){return{type:"SN/chat/STATUS_CHANGED",payload:{status:e}}},C=null,_=function(e){return null===C&&(C=function(t){e(y(t))}),C},T=null,I=function(e){return null===T&&(T=function(t){e(w(t))}),T},P=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(),x("messages-received",_(t)),x("status-changed",I(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m("messages-received",_(t)),x("status-changed",I(t)),g();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/chat/MESSAGES_RECEVIED":return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(s.a)(e.messages),Object(s.a)(t.payload.messages.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(v.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"SN/chat/STATUS_CHANGED":return Object(i.a)(Object(i.a)({},e),{},{status:t.payload.status});default:return e}}},117:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2Ibmq",selectedPage:"users_selectedPage__2B7XU"}},146:function(e,t,n){},147:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(28),s=n.n(a),i=(n(146),function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,345)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))}),u=n(32),o=n(33),l=n(34),d=n(35),j=(n(147),n(27)),f=n(15),b=n(16),h=n(73),p=n(114),O=Object(p.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),g=function(e){return e.usersPage.pageSize},x=function(e){return e.usersPage.totalUsersCount},m=function(e){return e.usersPage.currentPage},S=function(e){return e.usersPage.isFetching},v=function(e){return e.usersPage.followingInProgress},E=function(e){return e.usersPage.filter},y=n(1),w=n(8),C=n(6),_=n(89),T=n.n(_),I=n(4),P=n.n(I),U=n(2),N=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,a=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(t/n),o=[],l=1;l<=u;l++)o.push(l);var d=Math.ceil(u/i),j=Object(r.useState)(1),f=Object(C.a)(j,2),b=f[0],h=f[1],p=(b-1)*i+1,O=b*i;return Object(U.jsxs)("div",{className:T.a.paginator,children:[b>1&&Object(U.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),o.filter((function(e){return e>=p&&e<=O})).map((function(e){return Object(U.jsx)("span",{className:P()(Object(w.a)({},T.a.selectedPage,c===e),T.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),d>b&&Object(U.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},R=n(117),A=n.n(R),k=n(102),L=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,c=e.follow;return Object(U.jsxs)("div",{children:[Object(U.jsxs)("span",{children:[Object(U.jsx)("div",{children:Object(U.jsx)(j.c,{to:"/profile/"+t.id,children:Object(U.jsx)("img",{src:null!=t.photos.small?t.photos.small:k.a,className:A.a.userPhoto})})}),Object(U.jsx)("div",{children:t.followed?Object(U.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(U.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow"})})]}),Object(U.jsxs)("span",{children:[Object(U.jsxs)("span",{children:[Object(U.jsx)("div",{children:t.name}),Object(U.jsx)("div",{children:t.status})]}),Object(U.jsxs)("span",{children:[Object(U.jsx)("div",{children:"user.location.country"}),Object(U.jsx)("div",{children:"user.location.city"})]})]})]})},F=n(56),G=function(e){return{}},D=c.a.memo((function(e){var t=Object(b.d)(E);return Object(U.jsx)("div",{children:Object(U.jsx)(F.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:G,onSubmit:function(t,n){var r=n.setSubmitting,c={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(U.jsxs)(F.b,{children:[Object(U.jsx)(F.a,{type:"text",name:"term"}),Object(U.jsxs)(F.a,{name:"friend",as:"select",children:[Object(U.jsx)("option",{value:"null",children:"All"}),Object(U.jsx)("option",{value:"true",children:"Only followed"}),Object(U.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(U.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),M=n(10),H=n.n(M),z=n(14),V=n(18),W=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(y.a)(Object(y.a)({},e),r):e}))},B=n(20),Y={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return B.a.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return B.a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return B.a.delete("follow/".concat(e)).then((function(e){return e.data}))}},q={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},X=function(e){return{type:"SN/USERS/SET_USERS",users:e}},J=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},K=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},Z=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},Q=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},$=function(e,t,n){return function(){var r=Object(z.a)(H.a.mark((function r(c,a){var s;return H.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(Q(!0)),c(J(e)),c(K(n)),r.next=5,Y.getUsers(e,t,n.term,n.friend);case 5:s=r.sent,c(Q(!1)),c(X(s.items)),c(Z(s.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(y.a)(Object(y.a)({},e),{},{users:W(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(y.a)(Object(y.a)({},e),{},{users:W(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(y.a)(Object(y.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(y.a)(Object(y.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/SET_FILTER":return Object(y.a)(Object(y.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(y.a)(Object(y.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(V.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},te=n(97),ne=function(e){var t=Object(b.d)(O),n=Object(b.d)(x),c=Object(b.d)(m),a=Object(b.d)(g),s=Object(b.d)(E),i=Object(b.d)(v),u=Object(b.c)(),o=Object(f.g)();Object(r.useEffect)((function(){var e=te.parse(o.location.search.substr(1)),t=c,n=s;switch(e.page&&(t=Number(e.page)),e.term&&(n=Object(y.a)(Object(y.a)({},n),{},{term:e.term})),e.friend){case"null":n=Object(y.a)(Object(y.a)({},n),{},{friend:null});break;case"true":n=Object(y.a)(Object(y.a)({},n),{},{friend:!0});break;case"false":n=Object(y.a)(Object(y.a)({},n),{},{friend:!1})}u($(t,a,n))}),[]),Object(r.useEffect)((function(){var e={};s.term&&(e.term=s.term),null!==s.friend&&(e.friend=String(s.friend)),1!==c&&(e.page=String(c)),o.push({pathname:"/users",search:te.stringify(e)})}),[s,c]);var l=function e(t){u(e(t))},d=function e(t){u(e(t))};return Object(U.jsxs)("div",{children:[Object(U.jsx)(D,{onFilterChanged:function(e){u($(1,a,e))}}),Object(U.jsx)(N,{currentPage:c,onPageChanged:function(e){u($(e,a,s))},totalItemsCount:n,pageSize:a}),Object(U.jsx)("div",{children:t.map((function(e){return Object(U.jsx)(L,{user:e,followingInProgress:i,unfollow:d,follow:l},e.id)}))})]})},re=function(e){var t=Object(b.d)(S);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("h2",{children:e.pageTitle}),t?Object(U.jsx)(h.a,{}):null,Object(U.jsx)(ne,{})]})},ce=function(){return B.a.get("auth/me").then((function(e){return e.data}))},ae=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return B.a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},se=function(){return B.a.delete("auth/login")},ie=function(){return B.a.get("security/get-captcha-url").then((function(e){return e.data}))},ue={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},oe=function(e,t,n,r){return{type:"SN/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},le=function(e){return{type:"SN/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},de=function(){return function(){var e=Object(z.a)(H.a.mark((function e(t){var n,r,c,a,s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:(n=e.sent).resultCode===B.b.Success&&(r=n.data,c=r.id,a=r.login,s=r.email,t(oe(c,s,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},je=function(){return function(){var e=Object(z.a)(H.a.mark((function e(t){var n,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:n=e.sent,r=n.url,t(le(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/auth/SET_USER_DATA":case"SN/auth/GET_CAPTCHA_URL_SUCCESS":return Object(y.a)(Object(y.a)({},e),t.payload);default:return e}},be=n(57),he=n(99),pe=n(111),Oe={},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe;return e},xe=n(122),me={initialized:!1,errorText:null},Se=function(){return{type:"INITIALIZED_SUCCESS"}},ve=function(e){return{type:"ERROR_SUCCESS",textError:e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});case"ERROR_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{errorText:t.textError});default:return e}},ye=n(112),we=Object(be.b)({profilePage:he.b,dialogsPage:pe.b,sidebar:ge,usersPage:ee,auth:fe,app:Ee,chat:ye.a}),Ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.c,_e=Object(be.d)(we,Ce(Object(be.a)(xe.a)));window.__store__=_e;var Te=_e,Ie=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var c=Object(z.a)(H.a.mark((function c(a){var s;return H.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ae(e,t,n,r);case 2:(s=c.sent).resultCode===B.b.Success?a(de()):s.resultCode===B.c.CaptchaIsRequired&&a(je());case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=Object(F.d)({initialValues:{email:"",password:"",rememberMe:!1,captcha:""},onSubmit:function(n){e.login(t.values.email,t.values.password,t.values.rememberMe,t.values.captcha)}});return e.isAuth?Object(U.jsx)(f.a,{to:"/profile"}):Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{children:"LOGIN"}),Object(U.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{value:t.values.email,onChange:t.handleChange,type:"email",name:"email",placeholder:"Email"}),Object(U.jsx)("label",{children:"login"})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{value:t.values.password,onChange:t.handleChange,type:"password",name:"password",placeholder:"Password"}),Object(U.jsx)("label",{children:"password"})]}),Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{value:t.values.rememberMe,onChange:t.handleChange,name:"rememberMe",type:"checkbox"}),"remember me"]}),Object(U.jsx)("img",{src:e.captchaUrl}),Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{value:t.values.captcha,onChange:t.handleChange,name:"captcha",type:"text"}),"captcha"]}),Object(U.jsx)("button",{type:"submit",children:"Login"})]})]})]})}));function Pe(e){return function(t){return Object(U.jsx)(c.a.Suspense,{fallback:Object(U.jsx)("div",{children:"loading..."}),children:Object(U.jsx)(e,Object(y.a)({},t))})}}var Ue=function(e){return Object(U.jsxs)("div",{children:[Object(U.jsx)("h3",{children:e.errorText}),Object(U.jsx)("p",{children:"We are sorry but the page you are looking for does not exist."})]})},Ne=(n(178),n(98)),Re=n(183),Ae=n(184),ke=n(189),Le=n(190),Fe=n(191),Ge=n(187),De=n(188),Me=n(185),He=n(90),ze=function(e){return e.auth.isAuth},Ve=function(e){return e.auth.login},We=function(e){var t=Object(b.d)(ze),n=Object(b.d)(Ve),r=Object(b.c)(),c=Re.a.Header;return Object(U.jsx)(c,{className:"header",children:Object(U.jsxs)(Ge.a,{children:[Object(U.jsxs)(De.a,{span:18,children:[" ",Object(U.jsx)(Ne.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:Object(U.jsx)(Ne.a.Item,{children:Object(U.jsx)(j.b,{to:"/users",children:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0441\u0438\u0442\u044b"})},"1")})]}),t?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(De.a,{span:1,children:Object(U.jsx)(Me.a,{alt:n||"",style:{backgroundColor:"#87d068"},icon:Object(U.jsx)(ke.a,{})})}),Object(U.jsxs)(De.a,{span:5,children:[Object(U.jsx)(He.a,{onClick:function(){r(function(){var e=Object(z.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se();case 2:0===e.sent.data.resultCode&&t(oe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})," "]})]}):Object(U.jsxs)(De.a,{span:6,children:[Object(U.jsx)(j.b,{to:"/login",children:"Login"}),"  "]})]})})},Be=Ne.a.SubMenu,Ye=Re.a.Content,qe=Re.a.Footer,Xe=Re.a.Sider,Je=c.a.lazy((function(){return n.e(5).then(n.bind(null,347))})),Ke=c.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,346))})),Ze=c.a.lazy((function(){return n.e(6).then(n.bind(null,348))})),Qe=Pe(Je),$e=Pe(Ke),et=Pe(Ze),tt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(t){e.props.error("".concat(t.reason))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?null!=this.props.errorText?Object(U.jsx)(Ue,{errorText:this.props.errorText}):Object(U.jsxs)(Re.a,{children:[Object(U.jsx)(We,{}),Object(U.jsxs)(Ye,{style:{padding:"0 50px"},children:[Object(U.jsxs)(Ae.a,{style:{margin:"16px 0"},children:[Object(U.jsx)(Ae.a.Item,{children:"Home"}),Object(U.jsx)(Ae.a.Item,{children:"List"}),Object(U.jsx)(Ae.a.Item,{children:"App"})]}),Object(U.jsxs)(Re.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(U.jsx)(Xe,{className:"site-layout-background",width:200,children:Object(U.jsxs)(Ne.a,{mode:"inline",style:{height:"100%"},children:[Object(U.jsxs)(Be,{icon:Object(U.jsx)(ke.a,{}),title:"My profile",children:[Object(U.jsx)(Ne.a.Item,{children:Object(U.jsx)(j.b,{to:"/profile",children:"Profile"})},"1"),Object(U.jsx)(Ne.a.Item,{children:Object(U.jsx)(j.b,{to:"/dialogs",children:"Messages"})},"2"),Object(U.jsx)(Ne.a.Item,{children:Object(U.jsx)(j.b,{to:"/chat",children:"Chat"})},"3"),Object(U.jsx)(Ne.a.Item,{children:"option4"},"4")]},"sub1"),Object(U.jsxs)(Be,{icon:Object(U.jsx)(Le.a,{}),title:"Users",children:[Object(U.jsx)(Ne.a.Item,{children:Object(U.jsx)(j.b,{to:"/users",children:"Users"})},"5"),Object(U.jsx)(Ne.a.Item,{children:"option6"},"6"),Object(U.jsx)(Ne.a.Item,{children:"option7"},"7"),Object(U.jsx)(Ne.a.Item,{children:"option8"},"8")]},"sub2"),Object(U.jsxs)(Be,{icon:Object(U.jsx)(Fe.a,{}),title:"subnav 3",children:[Object(U.jsx)(Ne.a.Item,{children:"option9"},"9"),Object(U.jsx)(Ne.a.Item,{children:"option10"},"10"),Object(U.jsx)(Ne.a.Item,{children:"option11"},"11"),Object(U.jsx)(Ne.a.Item,{children:"option12"},"12")]},"sub3")]})}),Object(U.jsx)(Ye,{style:{padding:"0 24px",minHeight:280},children:Object(U.jsxs)(f.d,{children:[Object(U.jsx)(f.b,{exact:!0,path:"/",render:function(){return Object(U.jsx)(f.a,{to:"/profile"})}}),Object(U.jsx)(f.b,{path:"/dialogs",render:function(){return Object(U.jsx)(Qe,{})}}),Object(U.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(U.jsx)($e,{})}}),Object(U.jsx)(f.b,{path:"/users",render:function(){return Object(U.jsx)(re,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0438"})}}),Object(U.jsx)(f.b,{path:"/login",render:function(){return Object(U.jsx)(Ie,{})}}),Object(U.jsx)(f.b,{path:"/chat",render:function(){return Object(U.jsx)(et,{})}}),Object(U.jsx)(f.b,{path:"*",render:function(){return Object(U.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})]}),Object(U.jsx)(qe,{style:{textAlign:"center"},children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0442\u044c 2021"})]}):Object(U.jsx)(h.a,{})}}]),n}(r.Component),nt=Object(be.c)(f.h,Object(b.b)((function(e){return{initialized:e.app.initialized,errorText:e.app.errorText}}),{initializeApp:function(){return function(e){var t=e(de());Promise.all([t]).then((function(){e(Se())}))}},error:function(e){return function(t){t(ve(e));setTimeout((function(){return t(ve(null))}),2e3)}}}))(tt),rt=function(){return Object(U.jsx)(j.a,{children:Object(U.jsx)(b.a,{store:Te,children:Object(U.jsx)(nt,{})})})};s.a.render(Object(U.jsx)(rt,{}),document.getElementById("root")),i()},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c}));var r,c,a=n(121),s=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"fe43f864-7186-466f-88ee-13b781ec408f"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},73:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.5788b05c.svg",c=n(2);t.a=function(){return Object(c.jsx)("div",{style:{backgroundColor:"white"},children:Object(c.jsx)("img",{src:r})})}},89:function(e,t,n){e.exports={paginator:"Paginator_paginator__3WY-C",pageNumber:"Paginator_pageNumber__2dqUV",selectedPage:"Paginator_selectedPage__3YUE0"}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return m}));var r=n(10),c=n.n(r),a=n(14),s=n(18),i=n(1),u=n(20),o=function(e){return u.a.get("profile/"+e).then((function(e){return e.data}))},l=function(e){return u.a.get("profile/status/"+e).then((function(e){return e.data}))},d=function(e){return u.a.put("profile/status",{status:e}).then((function(e){return e.data}))},j=function(e){var t=new FormData;return t.append("image",e),u.a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},f=function(e){return u.a.put("profile",e).then((function(e){return e.data}))},b={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:"",isFetchingSave:!1},h={addPostActionCreator:function(e){return{type:"ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SET_STATUS",status:e}},deletePost:function(e){return{type:"DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SAVE_PHOTO_SUCCESS",photos:e}},isFetchingTogle:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}}},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r=t.sent,n(h.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(h.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:0===t.sent.resultCode&&n(h.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(h.isFetchingTogle(!0)),t.next=3,j(e);case 3:0===(r=t.sent).resultCode&&n(h.savePhotoSuccess(r.data.photos)),n(h.isFetchingTogle(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,f(e);case 3:if(0!==t.sent.resultCode){t.next=10;break}if(null==a){t.next=9;break}n(p(a)),t.next=10;break;case 9:throw new Error("userId null");case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case"SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetchingSave:t.isFetching});default:return e}}}},[[180,1,2]]]);
//# sourceMappingURL=main.92dbc94e.chunk.js.map