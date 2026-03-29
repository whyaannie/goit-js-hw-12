import{a as S,S as q,i as s}from"./assets/vendor-C2ySes1p.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const B="https://pixabay.com/api/",E="55216410-d425cac25254b9972be522906";async function m(o,r=1){const a={key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await S.get(B,{params:a})).data}const M=new q(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-more");function p(o){const r=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:c,comments:v,downloads:w})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img 
      class="gallery-image" 
      src="${a}" 
      alt="${e}" 
    />
  </a>
  <div class="info">
    <p><b>Likes</b> ${t}</p>
    <p><b>Views</b> ${c}</p>
    <p><b>Comments</b> ${v}</p>
    <p><b>Downloads</b> ${w}</p>
  </div>
</li>`).join("");f.insertAdjacentHTML("beforeend",r),M.refresh()}function $(){f.innerHTML=""}function h(){y.classList.add("active")}function b(){y.classList.remove("active")}function L(){g.classList.remove("hidden")}function l(){g.classList.add("hidden")}const P=document.querySelector(".form"),O=document.querySelector(".load-more");let d="",n=1,u=0;P.addEventListener("submit",x);O.addEventListener("click",A);async function x(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){s.warning({message:"Please enter a search query!",position:"topRight"});return}d=r,n=1,$(),l(),h();try{const a=await m(d,n);if(u=a.totalHits,a.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(a.hits),n*15<u?L():(l(),s.info({message:"We're sorry, but you've reached the end of search results."}))}catch{s.error({message:"Error loading more images"})}finally{b()}}async function A(){n+=1,l(),h();try{const o=await m(d,n);p(o.hits);const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"}),n*15<u?L():(l(),s.info({message:"We're sorry, but you've reached the end of search results."}))}catch{s.error({message:"Error loading more images"})}finally{b()}}
//# sourceMappingURL=index.js.map
