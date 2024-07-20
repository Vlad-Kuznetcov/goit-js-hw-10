import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const r={formEl:document.querySelector(".form"),btnEl:document.querySelector("button")};r.formEl.addEventListener("submit",m=>{m.preventDefault();const s=new FormData(r.formEl),e=s.get("delay"),i=s.get("state")==="fulfilled";new Promise((t,n)=>{setTimeout(()=>{i?t():n()},e)}).then(t=>o.success({message:`✅ Fulfilled promise in ${e}ms
`})).catch(t=>o.error({message:`❌ Rejected promise in ${e}ms
`}))});
//# sourceMappingURL=commonHelpers2.js.map
