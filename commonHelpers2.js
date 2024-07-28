import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const r={form:document.querySelector(".form")};r.form.addEventListener("submit",m=>{m.preventDefault();const t=new FormData(r.form),e=t.get("delay"),i=t.get("state")==="fulfilled";new Promise((s,a)=>{setTimeout(()=>{i?s():a()},e)}).then(s=>o.success({message:`✅ Fulfilled promise in ${e}ms
`})).catch(s=>o.error({message:`❌ Rejected promise in ${e}ms
`}))});
//# sourceMappingURL=commonHelpers2.js.map
