import{a as w,S,i as s}from"./assets/vendor-C2ySes1p.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const q="https://pixabay.com/api/",B="55216410-d425cac25254b9972be522906";async function m(a,r=1){const o={key:B,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await w.get(q,{params:o})).data}const M=new S(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-more");function h(a){const r=a.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:c,comments:L,downloads:v})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img 
      class="gallery-image" 
      src="${o}" 
      alt="${e}" 
    />
  </a>
  <div class="info">
    <p><b>Likes</b> ${t}</p>
    <p><b>Views</b> ${c}</p>
    <p><b>Comments</b> ${L}</p>
    <p><b>Downloads</b> ${v}</p>
  </div>
</li>`).join("");f.insertAdjacentHTML("beforeend",r),M.refresh()}function $(){f.innerHTML=""}function p(){y.classList.add("active")}function b(){y.classList.remove("active")}function E(){g.classList.remove("hidden")}function l(){g.classList.add("hidden")}const P=document.querySelector(".form"),O=document.querySelector(".load-more");let u="",n=1,d=0;P.addEventListener("submit",x);O.addEventListener("click",A);async function x(a){a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){s.warning({message:"Please enter a search query!",position:"topRight"});return}u=r,n=1,$(),l(),p();try{const o=await m(u,n);if(d=o.totalHits,o.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o.hits),n*15<d?E():(l(),s.info({message:"We're sorry, but you've reached the end of search results."}))}catch{s.error({message:"Something went wrong!"})}finally{b()}}async function A(){n+=1,l(),p();try{const a=await m(u,n);h(a.hits);const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"}),n*15>=d&&(l(),s.info({message:"We're sorry, but you've reached the end of search results."}))}catch{s.error({message:"Error loading more images"})}finally{b()}}
//# sourceMappingURL=index.js.map
