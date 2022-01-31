const nav = document.querySelector(".primary-navigation");
const navBtn = document.querySelector(".menu-toggle");

navBtn.addEventListener('click', ()=>{
  const visible = nav.getAttribute('data-visible');
  if (visible === "false"){
    nav.setAttribute('data-visible', true);
    navBtn.setAttribute('aria-expanded', true);
  }else if (visible === "true"){
    nav.setAttribute('data-visible', false);
    navBtn.setAttribute('aria-expanded', false);
  }
});