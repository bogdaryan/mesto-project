(()=>{"use strict";var e,t,r,n,o={542:(e,t,r)=>{r.d(t,{AB:()=>f,Nk:()=>p,PR:()=>i,f1:()=>d,iW:()=>u,k8:()=>s,ps:()=>c,vm:()=>l});var n={url:"https://nomoreparties.co/v1/plus-cohort-27",headers:{authorization:"47ce978d-8dd3-4a82-9cc9-4dd45f83b925","Content-Type":"application/json"}};function o(e){return e.ok||Promise.reject("Ошибка ".concat(e)),e.json()}var a=function(e,t){return fetch(n.url+e,t).then(o)};function i(){return a("/users/me",{headers:n.headers})}function c(e,t){return a("/users/me",{method:"PATCH",headers:n.headers,body:JSON.stringify({name:e,about:t})})}function u(e){return a("/users/me/avatar",{method:"PATCH",headers:n.headers,body:JSON.stringify(e)})}function l(){return a("/cards",{headers:n.headers})}function s(e,t){return a("/cards",{method:"POST",headers:n.headers,body:JSON.stringify({name:e,link:t})})}function d(e){return a("/cards/".concat(e),{method:"DELETE",headers:n.headers})}function f(e){return a("/cards/likes/".concat(e),{method:"PUT",headers:n.headers})}function p(e){return a("/cards/likes/".concat(e),{method:"DELETE",headers:n.headers})}},211:(e,t,r)=>{r.a(e,(async(e,n)=>{try{r.d(t,{g:()=>S});var o=r(372),a=r(113),i=r(542);function y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function _(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=document.querySelector("#template-card").content,u=document.querySelector(".popup-type_full-size"),l=u.querySelector(".popup-type_full-size__image"),s=u.querySelector(".popup-type_full-size__title"),d=document.querySelector(".cards__list"),f=(await(0,i.vm)().then((function(e){return e})),await(0,i.PR)().then((function(e){return e})));function b(e){var t=c.querySelector(".card").cloneNode(!0),r=t.querySelector(".card__img"),n=t.querySelector(".card__title"),a=t.querySelector(".card__btn-like"),d=t.querySelector(".card__number-of-likes"),p=t.querySelector(".card__btn-delete"),m=e.likes;r.src=e.link,r.alt=e.name,n.textContent=e.name,d.textContent=e.likes.length,a.addEventListener("click",(function(t){a.className.includes("card__btn-like_active")?(0,i.Nk)(e._id).then((function(e){a.classList.remove("card__btn-like_active"),d.textContent=e.likes.length})).catch((function(e){return console.error(e)})):(0,i.AB)(e._id).then((function(e){a.classList.add("card__btn-like_active"),d.textContent=e.likes.length})).catch((function(e){return console.error(e)}))}));var v,_=y(m);try{for(_.s();!(v=_.n()).done;)v.value._id===f._id?a.classList.add("card__btn-like_active"):a.classList.remove("card__btn-like_active")}catch(e){_.e(e)}finally{_.f()}return f._id===e.owner._id||p.remove(),p.addEventListener("click",(function(){(0,i.f1)(e._id).then((function(){t.remove()})).catch((function(e){return console.error(e)}))})),r.addEventListener("click",(function(){(0,o.Mw)(u),l.src=e.link,l.alt=e.name,s.textContent=e.name})),t}function S(e){d.innerHTML=" ";var t,r=y(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;d.prepend(b(n))}}catch(e){r.e(e)}finally{r.f()}}var p=a.rq.querySelector(".form"),m=document.querySelector("#title-input"),v=document.querySelector("#image-link-input");function k(e){(0,o.ip)((function(){return(0,i.k8)(m.value,v.value).then((function(e){return function(e){return d.append(b(e))}(e)}))}),e)}p.addEventListener("submit",k),n()}catch(g){n(g)}}),1)},113:(e,t,r)=>{r.d(t,{rq:()=>i});var n=r(372),o=document.querySelector(".profile__add-btn"),a=document.querySelector(".profile__edit-btn"),i=document.querySelector(".popup_type_add-photo"),c=document.querySelector(".popup_type_edit-profile"),u=document.querySelector(".popup_type_edit-avatar"),l=document.querySelector(".profile__image-edit");a.addEventListener("click",(function(){n.hX.value=n.rC.textContent,n.sD.value=n.bR.textContent,(0,n.Mw)(c)})),o.addEventListener("click",(function(){(0,n.Mw)(i)})),l.addEventListener("click",(function(){(0,n.Mw)(u)})),window.addEventListener("click",(function(e){var t=e.target.className.includes("popup"),r=e.target.className.includes("popup__btn-close");if((!e.target.closest(".popup__inner")||r)&&t){var o=e.target.closest(".popup");(0,n.j4)(o)}}))},372:(e,t,r)=>{r.d(t,{Mw:()=>l,bR:()=>o,hX:()=>i,ip:()=>f,j4:()=>s,qt:()=>a,rC:()=>n,sD:()=>c});var n=document.querySelector(".profile__name"),o=document.querySelector(".profile__description"),a=document.forms["edit-form"],i=a.elements["user-name"],c=a.elements["user-description"];function u(e){"Escape"===e.key&&s(document.querySelector(".popup_opened"))}function l(e){e.classList.add("popup_opened"),document.addEventListener("keydown",u)}function s(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",u)}function d(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?n:r}function f(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.preventDefault();var n=t.submitter,o=n.textContent;d(!0,n,o,r),e().then((function(){s(document.querySelector(".popup_opened")),n.classList.add("form__submit_disabled"),n.disabled=!0,t.target.reset()})).catch((function(e){return console.error("Ошибка: ".concat(e))})).finally((function(){return d(!1,n,o)}))}},108:(e,t,r)=>{r.d(t,{u:()=>n});var n=function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){return function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);function o(e,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(r.disabled=!1,r.classList.remove(t.inactiveButtonClass)):(r.disabled=!0,r.classList.add(t.inactiveButtonClass))}o(r,n),r.forEach((function(a){a.addEventListener("input",(function(){!function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""}(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.classList.add(n.errorClass),o.textContent=r}(e,t,t.validationMessage,r)}(e,a,t),o(r,n)}))}))}(t,e)}))}},579:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var n=r(211),o=(r(113),r(372)),a=r(108),i=r(542),c=e([n]);function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}function v(e){if(Array.isArray(e))return e}n=(c.then?(await c)():c)[0];var u=document.querySelector(".profile__image"),l=document.forms["edit-avatar"],s=l.elements["avatar-input"];function y(e){(0,o.ip)((function(){return(0,i.ps)(o.hX.value,o.sD.value).then((function(e){o.rC.textContent=e.name,o.bR.textContent=e.about}))}),e)}function _(e){(0,o.ip)((function(){return(0,i.iW)({avatar:s.value}).then((function(e){u.src=e.avatar}))}),e)}await(0,i.PR)().then((function(e){u.src=e.avatar})),Promise.all([(0,i.PR)(),(0,i.vm)()]).then((function(e){var t,r,a=(2,v(t=e)||m(t,2)||f(t,2)||d()),i=a[0],c=a[1];(0,n.g)(c),r=i,o.rC.textContent=r.name,o.bR.textContent=r.about})),(0,a.u)({formSelector:"form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"}),l.addEventListener("submit",_),o.qt.addEventListener("submit",y),t()}catch(h){t(h)}}),1)}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return o[e](r,r.exports,i),r.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=-1);var u,l,s,d=new Set,f=o.exports,p=new Promise(((e,t)=>{s=t,l=e}));p[t]=f,p[e]=e=>(c&&e(c),d.forEach(e),p.catch((e=>{}))),o.exports=p,a((o=>{var a;u=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,n(a)}),(e=>{i[r]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var c={};return c[e]=e=>{},c[t]=o,c})))(o);var i=()=>u.map((e=>{if(e[r])throw e[r];return e[t]})),l=new Promise((t=>{(a=()=>t(i)).r=0;var r=e=>e!==c&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));u.map((t=>t[e](r)))}));return a.r?l:i()}),(e=>(e?s(p[r]=e):l(f),n(c)))),c&&c.d<0&&(c.d=0)},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i(579)})();