(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{185:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__21M_R",contact:"ProfileInfo_contact__2LNkH",forma:"ProfileInfo_forma__17cXK",button:"ProfileInfo_button__207nZ",customFileUpload:"ProfileInfo_customFileUpload__1gjjO"}},186:function(t,e,s){t.exports={textarea:"ProfileDataForm_textarea__1pF3G",button:"ProfileDataForm_button__2oHV6",Field:"ProfileDataForm_Field__2u1S7",flex2:"ProfileDataForm_flex2__1tkMn"}},187:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__1I-et",posts:"MyPosts_posts__3Uvqy",ebutton:"MyPosts_ebutton__3pO3d"}},188:function(t,e,s){t.exports={item:"Post_item__178Hg"}},190:function(t,e,s){"use strict";s.r(e);var c=s(1),o=s(32),a=s(33),n=s(35),i=s(34),r=s(0),j=s.n(r),l=s(6),u=s(185),b=s.n(u),d=s(70),p=s(2),h=function(t){var e=Object(r.useState)(!1),s=Object(l.a)(e,2),c=s[0],o=s[1],a=Object(r.useState)(t.status),n=Object(l.a)(a,2),i=n[0],j=n[1];Object(r.useEffect)((function(){j(t.status)}),[t.status]);return Object(p.jsxs)("div",{children:[!c&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Status:"})," ",Object(p.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"-------"})]}),c&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(i)},value:i})})]})},O=s(96),x=s(41),f=s(186),m=s.n(f),v=function(t){var e=t.profile,s=t.onSubmit;t.goToEditMode;return Object(p.jsx)("div",{children:Object(p.jsx)(x.c,{initialValues:{FullName:e.fullName,lookingForAJob:!1,lookingForAJobDescription:e.lookingForAJobDescription,aboutMe:e.aboutMe,contacts:{facebook:e.contacts.facebook,website:e.contacts.website,vk:e.contacts.vk,twitter:e.contacts.twitter,instagram:e.contacts.instagram,youtube:e.contacts.youtube,github:e.contacts.github,mainLink:e.contacts.mainLink}},onSubmit:function(t){s(t)},children:function(t){return Object(p.jsxs)(x.b,{children:[Object(p.jsxs)("div",{className:m.a.Field,children:[Object(p.jsxs)("div",{className:m.a.flex1,children:[Object(p.jsx)("p",{children:"FullName"}),"  ",Object(p.jsx)(x.a,{name:"FullName",placeholder:"FullName"}),Object(p.jsx)("td",{}),Object(p.jsx)("b",{children:"lookingForAJob:"}),Object(p.jsx)(x.a,{name:"lookingForAJob",type:"checkbox"}),Object(p.jsx)("p",{children:"lookingForAJobDescription"}),"  ",Object(p.jsx)(x.a,{className:m.a.textarea,name:"lookingForAJobDescription",placeholder:"lookingForAJobDescription"}),Object(p.jsx)("td",{}),Object(p.jsx)("p",{children:"aboutMe"}),Object(p.jsx)(x.a,{className:m.a.textarea,name:"aboutMe",placeholder:"aboutMe"}),Object(p.jsx)("td",{})]}),Object(p.jsxs)("div",{className:m.a.flex2,children:[Object(p.jsx)("p",{children:"facebook"}),Object(p.jsx)(x.a,{name:"contacts.facebook"}),Object(p.jsx)("td",{}),Object(p.jsx)("p",{children:"website"}),Object(p.jsx)(x.a,{name:"contacts.website"}),Object(p.jsx)("td",{}),Object(p.jsx)("p",{children:"vk"}),Object(p.jsx)(x.a,{name:"contacts.vk"}),Object(p.jsx)("td",{}),Object(p.jsx)("p",{children:"twitter"}),Object(p.jsx)(x.a,{name:"contacts.twitter"}),Object(p.jsx)("td",{}),Object(p.jsx)("p",{children:"instagram"}),Object(p.jsx)(x.a,{name:"contacts.instagram"}),Object(p.jsx)("td",{}),Object(p.jsx)("p",{children:"github"}),Object(p.jsx)(x.a,{name:"contacts.github"}),Object(p.jsx)("td",{}),Object(p.jsx)("p",{children:"mainLink"}),Object(p.jsx)(x.a,{name:"contacts.mainLink"})]})]}),Object(p.jsx)("button",{className:m.a.button,type:"submit",children:"Submit"})]})}})})},g=s(176),k=function(t){var e=t.isOwner,s=t.goToEditMode,c=t.profile;return Object(p.jsxs)("div",{className:b.a.forma,children:[e&&Object(p.jsx)("div",{children:Object(p.jsx)(g.a,{type:"primary",className:b.a.button,onClick:s,children:"Edit"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),":",c.fullName]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Lookin for a job"}),":  ",c.lookingForAJob?"yes":"no"]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),":  ",c.lookingForAJobDescription]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),": ",c.aboutMe]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Contacts"}),":  ",Object.keys(c.contacts).map((function(t){return Object(p.jsx)(_,{contactTitle:t,contactValue:c.contacts[t]},t)}))]})]})},_=function(t){var e=t.contactTitle,s=t.contactValue;return Object(p.jsxs)("div",{className:b.a.contact,children:[Object(p.jsx)("b",{children:e}),": ",s]})},P=function(t){var e=t.profile,s=t.savePhoto,c=t.saveProfile,o=t.isFetchingSave,a=t.isOwner,n=t.status,i=t.updateStatus,j=Object(r.useState)(!1),u=Object(l.a)(j,2),x=u[0],f=u[1];if(!e)return Object(p.jsx)(d.a,{});return o?Object(p.jsx)(d.a,{}):Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(p.jsx)("img",{src:e.photos.large||O.a}),a&&Object(p.jsxs)("label",{className:b.a.customFileUpload,children:[Object(p.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&s(t.target.files[0])}}),"Add photo"]}),x?Object(p.jsx)(v,{profile:e,onSubmit:function(t){c(t).then((function(){f(!1)}))},goToEditMode:function(){f(!1)}}):Object(p.jsx)(k,{profile:e,isOwner:a,goToEditMode:function(){f(!0)}}),Object(p.jsx)(h,{status:n,updateStatus:i})]})})},F=s(95),y=s(17),S=s(187),N=s.n(S),M=s(188),A=s.n(M),w=function(t){return Object(p.jsxs)("div",{className:A.a.item,children:[Object(p.jsx)("img",{src:"https://i.pinimg.com/originals/9c/c6/03/9cc6035f13a665dd82c57100f2b70c83.png"}),t.message,Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"like"})," ",t.likesCount]})]})},I=function(t){var e=Object(x.d)({initialValues:{textarea:""},onSubmit:function(s){t.onAddPost(e.values.textarea)}});return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{value:e.values.textarea,onChange:e.handleChange,type:"textarea",name:"textarea",placeholder:"textarea"})}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:N.a.ebutton,type:"submit",children:"Send"})})]})})},D=function(t){var e=Object(y.a)(t.posts).reverse().map((function(t){return Object(p.jsx)(w,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(p.jsxs)("div",{className:N.a.postsBlock,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)("div",{children:Object(p.jsx)(I,{onAddPost:function(e){t.addPost(e)}})}),Object(p.jsx)("div",{className:N.a.posts,children:e})]})},C=s(12),J=Object(C.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:F.a.addPostActionCreator})(D),U=function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(P,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,saveProfile:t.saveProfile,updateStatus:t.updateStatus}),Object(p.jsx)(J,{})]})},B=s(14),T=s(57),E=function(t){Object(n.a)(s,t);var e=Object(i.a)(s);function s(t){return Object(o.a)(this,s),e.call(this,t)}return Object(a.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getUserProfile(t),this.props.getStatus(t)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(p.jsx)(U,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(j.a.Component);e.default=Object(T.c)(Object(C.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:F.d,getStatus:F.c,updateStatus:F.g,savePhoto:F.e,saveProfile:F.f}),B.h)(E)}}]);
//# sourceMappingURL=3.4cf27d6a.chunk.js.map