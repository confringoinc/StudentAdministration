(this.webpackJsonpstudentapp=this.webpackJsonpstudentapp||[]).push([[16,15],{37:function(e,t,s){"use strict";s.r(t);var a=s(31),r=s(32),n=s(36),c=s(0),i=s(1),d=s(10),o=s(35),l=s.n(o),m=s(39),j=s(7),b=s(3);t.default=function(){var e=Object(m.a)(),t=e.register,s=e.formState.errors,o=e.handleSubmit,u=Object(c.useState)({statusRadio:"student"}),p=Object(n.a)(u,2),h=p[0],x=p[1],O=function(e){var t=e.target,s=t.name,n=t.value;x(Object(r.a)(Object(r.a)({},h),{},Object(a.a)({},s,n)))},N=Object(i.g)(),f={"Content-Type":"application/x-www-form-urlencoded"};return Object(b.jsx)("div",{className:"container col-md-5",children:Object(b.jsxs)("div",{className:"mt-5 mb-5 card card-body p-md-5",children:[Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{children:["Student",Object(b.jsx)("span",{className:"text-primary",children:"Center"})]})}),Object(b.jsxs)("div",{className:"row ms mt-5",children:[Object(b.jsxs)("div",{className:"form-check col-6",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"statusRadio",id:"student",value:"student",checked:"student"===h.statusRadio,onChange:O}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"student",children:"Student"})]}),Object(b.jsxs)("div",{className:"form-check col-6",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"statusRadio",id:"admin",value:"admin",checked:"admin"===h.statusRadio,onChange:O}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"admin",children:"Admin"})]})]}),"student"===h.statusRadio?Object(b.jsxs)("form",{className:"mt-5",onSubmit:o((function(e){var t=Object.keys(e).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))})).join("&");l.a.post(j.a+"/student/login",t,{headers:f}).then((function(e){!0===e.data.success?N.push({pathname:"/StudentAdministration/",state:e.data.token}):alert("Incorrect enrollment number or password!")})).catch((function(){alert("Incorrect enrollment number or password!")}))})),children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"enrollmentNo",className:"form-label",children:"Enrollment number"}),Object(b.jsx)("input",Object(r.a)({type:"text",className:"form-control",id:"enrollmentNo"},t("enrollmentNo",{required:!0,minLength:12,maxLength:12,pattern:/^[0-9]+$/i}))),Object(b.jsx)("div",{id:"enrollmentNoError",className:"form-text text-danger",children:s.enrollmentNo?"required"===s.enrollmentNo.type?"* Enrollment no is required":"* Enrollment no is not valid!":""})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(b.jsx)("input",Object(r.a)({type:"password",className:"form-control",id:"password"},t("password",{required:!0,minLength:6}))),Object(b.jsx)("div",{id:"passwordError",className:"form-text text-danger text-preline",children:s.password?"required"===s.password.type?"* Password is required":"* Password is not valid!":""})]}),Object(b.jsx)("div",{className:"mt-5 d-grid gap-2",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})})]}):Object(b.jsxs)("form",{className:"mt-5",onSubmit:o((function(e){var t=Object.keys(e).map((function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))})).join("&");l.a.post(j.a+"/admin/login",t,{headers:f}).then((function(e){!0===e.data.success?N.push({pathname:"/StudentAdministration/admin",state:e.data.token}):alert("Incorrect email or password!")})).catch((function(){alert("Incorrect email or password!")}))})),children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(b.jsx)("input",Object(r.a)({type:"email",className:"form-control",id:"email"},t("email",{required:!0,pattern:/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i}))),Object(b.jsx)("div",{id:"emailError",className:"form-text text-danger",children:s.email?"required"===s.email.type?"* Email is required":"* Email is not valid!":""})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(b.jsx)("input",Object(r.a)({type:"password",className:"form-control",id:"password"},t("password",{required:!0,minLength:6}))),Object(b.jsx)("div",{id:"passwordError",className:"form-text text-danger text-preline",children:s.password?"required"===s.password.type?"* Password is required":"* Password is not valid!":""})]}),Object(b.jsx)("div",{className:"mt-5 d-grid gap-2",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})})]}),Object(b.jsxs)("div",{className:"mt-5",children:["Not registered yet? ",Object(b.jsx)(d.b,{to:"/StudentAdministration/register",children:"Register yourself"})]})]})})}}}]);
//# sourceMappingURL=16.b90d502d.chunk.js.map