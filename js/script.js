const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuToggle?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const langBtn=document.getElementById("langBtn");
let lang="en";
function setLanguage(next){
  lang=next;
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.textContent=el.getAttribute(lang==="en"?"data-en":"data-hi");
  });
  langBtn.textContent=lang==="en"?"हिन्दी":"English";
  document.documentElement.lang=lang==="en"?"en":"hi";
}
langBtn?.addEventListener("click",()=>setLanguage(lang==="en"?"hi":"en"));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form=document.getElementById("enquiryForm");
form?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const mobile=document.getElementById("mobile").value.trim();
  const service=document.getElementById("service").value;
  const date=document.getElementById("date").value||"Not specified";
  const adults=document.getElementById("adults").value||"0";
  const children=document.getElementById("children").value||"0";
  
  const message=document.getElementById("message").value.trim()||"No additional message";
  const text=`Hello Sikhar Quest Tour & Travels,

I would like to enquire about a trip.

Name: ${name}
Mobile: ${mobile}
Service: ${service}
Travel Date: ${date}
Adults: ${adults}
Children: ${children}

Message: ${message}

Please share the best available options/quotation.`;
  window.open("https://wa.me/919389763167?text="+encodeURIComponent(text),"_blank");
});
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("promoPopup");
  const closeBtn = document.getElementById("promoClose");

  if (popup && closeBtn) {
    setTimeout(() => {
      popup.style.display = "flex";
    }, 1200);

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
});
