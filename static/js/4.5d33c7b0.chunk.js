(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{184:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__3iu9n",dialogsItems:"Dialogs_dialogsItems__3JK0A",active:"Dialogs_active__B89V3",messages:"Dialogs_messages__XFsA-",message:"Dialogs_message__2unMA",ebutton:"Dialogs_ebutton__38Kq4"}},191:function(e,a,s){"use strict";s.r(a);var t=s(1),i=s(105),n=(s(0),s(184)),c=s.n(n),l=s(27),d=s(2),o=function(e){var a="/dialogs/"+e.id;return Object(d.jsx)("div",{className:c.a.dialog+" "+c.a.active,children:Object(d.jsx)(l.c,{to:a,children:e.name})})},r=function(e){return Object(d.jsx)("div",{className:c.a.dialog,children:e.message})},u=s(41),j=function(e){var a=e.onSendMessageClick,s=Object(u.d)({initialValues:{textarea:""},onSubmit:function(e){a(s.values.textarea)}});return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{value:s.values.textarea,onChange:s.handleChange,type:"textarea",name:"textarea",placeholder:"textarea"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:c.a.ebutton,type:"submit",children:"Send"})})]})})},b=function(e){var a=e.dialogsPage,s=e.sendMessage,t=a,i=t.dialogs.map((function(e){return Object(d.jsx)(o,{name:e.name,id:e.id},e.id)})),n=t.messages.map((function(e){return Object(d.jsx)(r,{message:e.message},e.id)}));return Object(d.jsxs)("div",{className:c.a.dialogs,children:[Object(d.jsx)("div",{className:c.a.dialogsItems,children:i}),Object(d.jsxs)("div",{className:c.a.messages,children:[Object(d.jsx)("div",{children:n}),Object(d.jsx)("div",{children:Object(d.jsx)(j,{onSendMessageClick:function(e){s(e)}})})]})]})},g=s(12),m=s(10),h=s(14),x=["isAuth"],O=function(e){return{isAuth:e.auth.isAuth}};var v=s(57);a.default=Object(v.c)(Object(g.b)((function(e){return{dialogsPage:e.dialogsPage}}),Object(t.a)({},i.a)),(function(e){return Object(g.b)(O,{})((function(a){var s=a.isAuth,i=Object(m.a)(a,x);return s?Object(d.jsx)(e,Object(t.a)({},i)):Object(d.jsx)(h.a,{to:"/login"})}))}))(b)}}]);
//# sourceMappingURL=4.5d33c7b0.chunk.js.map