(this.webpackJsonpstudentapp=this.webpackJsonpstudentapp||[]).push([[11,16],{34:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(F){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=d;return function(o,a){if(n===m)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw a;return q()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?f:h,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=f,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",m="executing",f="completed",p={};function b(){}function y(){}function v(){}var j={};j[a]=function(){return this};var g=Object.getPrototypeOf,x=g&&g(g(S([])));x&&x!==r&&n.call(x,a)&&(j=x);var w=v.prototype=b.prototype=Object.create(j);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return y.prototype=w.constructor=v,v.constructor=y,y.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(N.prototype),N.prototype[i]=function(){return this},t.AsyncIterator=N,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new N(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(w),s(w,c,"Generator"),w[a]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},37:function(t,e,r){"use strict";r.r(e);var n=r(31),o=r(32),a=r(35),i=r(0),c=r(1),s=r(10),l=r(36),u=r.n(l),d=r(39),h=r(7),m=r(3);e.default=function(){var t=Object(d.a)(),e=t.register,r=t.formState.errors,l=t.handleSubmit,f=Object(i.useState)({statusRadio:"student"}),p=Object(a.a)(f,2),b=p[0],y=p[1],v=function(t){var e=t.target,r=e.name,a=e.value;y(Object(o.a)(Object(o.a)({},b),{},Object(n.a)({},r,a)))},j=Object(c.g)(),g={"Content-Type":"application/x-www-form-urlencoded"};return Object(m.jsx)("div",{className:"container col-md-5",children:Object(m.jsxs)("div",{className:"mt-5 mb-5 card card-body p-md-5",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("h1",{children:["Student",Object(m.jsx)("span",{className:"text-primary",children:"Center"})]})}),Object(m.jsxs)("div",{className:"row ms mt-5",children:[Object(m.jsxs)("div",{className:"form-check col-6",children:[Object(m.jsx)("input",{className:"form-check-input",type:"radio",name:"statusRadio",id:"student",value:"student",checked:"student"===b.statusRadio,onChange:v}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"student",children:"Student"})]}),Object(m.jsxs)("div",{className:"form-check col-6",children:[Object(m.jsx)("input",{className:"form-check-input",type:"radio",name:"statusRadio",id:"admin",value:"admin",checked:"admin"===b.statusRadio,onChange:v}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"admin",children:"Admin"})]})]}),"student"===b.statusRadio?Object(m.jsxs)("form",{className:"mt-5",onSubmit:l((function(t){var e=Object.keys(t).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&");u.a.post(h.a+"/student/login",e,{headers:g}).then((function(t){!0===t.data.success?j.push({pathname:"/",state:t.data.token}):alert("Incorrect enrollment number or password!")})).catch((function(){alert("Incorrect enrollment number or password!")}))})),children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"enrollmentNo",className:"form-label",children:"Enrollment number"}),Object(m.jsx)("input",Object(o.a)({type:"text",className:"form-control",id:"enrollmentNo"},e("enrollmentNo",{required:!0,minLength:12,maxLength:12,pattern:/^[0-9]+$/i}))),Object(m.jsx)("div",{id:"enrollmentNoError",className:"form-text text-danger",children:r.enrollmentNo?"required"===r.enrollmentNo.type?"* Enrollment no is required":"* Enrollment no is not valid!":""})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(m.jsx)("input",Object(o.a)({type:"password",className:"form-control",id:"password"},e("password",{required:!0,minLength:6}))),Object(m.jsx)("div",{id:"passwordError",className:"form-text text-danger text-preline",children:r.password?"required"===r.password.type?"* Password is required":"* Password is not valid!":""})]}),Object(m.jsx)("div",{className:"mt-5 d-grid gap-2",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})})]}):Object(m.jsxs)("form",{className:"mt-5",onSubmit:l((function(t){var e=Object.keys(t).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&");u.a.post(h.a+"/admin/login",e,{headers:g}).then((function(t){!0===t.data.success?j.push({pathname:"/admin",state:t.data.token}):alert("Incorrect email or password!")})).catch((function(){alert("Incorrect email or password!")}))})),children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(m.jsx)("input",Object(o.a)({type:"email",className:"form-control",id:"email"},e("email",{required:!0,pattern:/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i}))),Object(m.jsx)("div",{id:"emailError",className:"form-text text-danger",children:r.email?"required"===r.email.type?"* Email is required":"* Email is not valid!":""})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(m.jsx)("input",Object(o.a)({type:"password",className:"form-control",id:"password"},e("password",{required:!0,minLength:6}))),Object(m.jsx)("div",{id:"passwordError",className:"form-text text-danger text-preline",children:r.password?"required"===r.password.type?"* Password is required":"* Password is not valid!":""})]}),Object(m.jsx)("div",{className:"mt-5 d-grid gap-2",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})})]}),Object(m.jsxs)("div",{className:"mt-5",children:["Not registered yet? ",Object(m.jsx)(s.b,{to:"/register",children:"Register yourself"})]})]})})}},38:function(t,e,r){t.exports=r(34)}}]);
//# sourceMappingURL=11.766d7091.chunk.js.map