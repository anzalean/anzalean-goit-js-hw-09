import"./assets/modulepreload-polyfill-3cfb730f.js";const l="feedback-form-state",a=document.querySelector("form"),o=a.querySelector("input"),r=a.querySelector("textarea");i();const t={email:"",message:""};a.addEventListener("input",m);function m(e){const{name:n,value:s}=e.target;t[n]=s.trim(),localStorage.setItem(l,JSON.stringify(t))}function i(){const e=JSON.parse(localStorage.getItem(l));e&&(o.value=e.email,r.value=e.message)}a.addEventListener("submit",c);function c(e){if(e.preventDefault(),o.value.trim()===""||r.value.trim()==="")return alert("Fill please all fields");console.log(t),localStorage.clear(),a.reset(),t.email="",t.message=""}
//# sourceMappingURL=commonHelpers2.js.map
