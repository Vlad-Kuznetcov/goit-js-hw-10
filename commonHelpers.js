import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as b,i}from"./assets/vendor-77e16229.js";document.body.style.backgroundColor="#fff";const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(i.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0,n.classList.remove("active-btn"),s.classList.remove("active-input")):(l=t,n.disabled=!1,n.classList.add("active-btn"),s.classList.add("active-input"))}},s=document.getElementById("datetime-picker"),n=document.querySelector("button[data-start]"),r={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let l=null,d=null;n.disabled=!0;b(s,v);n.addEventListener("click",p);function p(){n.disabled=!0,s.disabled=!0,i.success({title:"Timer started",message:"The timer was run successfully"}),d=setInterval(()=>{const t=l-new Date;if(s.classList.add("active-clock"),t<1e3){document.body.style.backgroundColor="red",setTimeout(()=>{document.body.style.backgroundColor="#fff"},1e3),clearInterval(d),u(0,0,0,0),s.disabled=!1,s.classList.remove("active-clock");return}const o=k(t);u(o.days,o.hours,o.minutes,o.seconds)},1e3)}function k(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:y,seconds:h}}function a(e){return String(e).padStart(2,"0")}function u(e,t,o,c){r.days.textContent=a(e),r.hours.textContent=a(t),r.minutes.textContent=a(o),r.seconds.textContent=a(c)}
//# sourceMappingURL=commonHelpers.js.map