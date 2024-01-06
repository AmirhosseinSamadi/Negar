const navBtn = document.querySelectorAll(".nav__btn");
const navMenu = document.querySelectorAll(".nav-menu");
let navOpen = false;

navBtn.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    if (navOpen) {
      btn.classList.remove("nav__btn--open");
      navMenu[index].classList.remove("nav-menu--open");
      navOpen = false;
    } else {
      btn.classList.add("nav__btn--open");
      navMenu[index].classList.add("nav-menu--open");
      navOpen = true;
    }
  });
});




// const navBtn = document.querySelectorAll(".nav__btn")
// const navMenu = document.querySelectorAll(".nav-menu")
// let navOpen = false

// navBtn.forEach((btn, index) => {
//     btn.addEventListener("click", function(){
//         if (navOpen){
//             btn.classList.remove("nav__btn--open")
//             navMenu[index].classList.remove("nav-menu--open")
//             navOpen = false
//         } else {
//             btn.classList.add("nav__btn--open")
//             navMenu[index].classList.add("nav-menu--open")
//             navOpen = true
//         }
//     })
// })





// navBtn.addEventListener(("click"), function(){
//     if(navOpen){
//         // navBtn.classList.remove("nav__btn--open")
//         navMenu.classList.remove("nav-menu--open")
//         navOpen = false
//     }else{
//         // navBtn.classList.add("nav__btn--open")
//         navMenu.classList.add("nav-menu--open")
//         navOpen = true
//     }
// })