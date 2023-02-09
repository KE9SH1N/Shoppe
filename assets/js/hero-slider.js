var swiper = new Swiper(".heroSwiper", {
    slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            centeredSlides: false,
            autoplay: {
              delay: 3500,
              disableOnInteraction: false,
            },
      pagination: {
        el: ".swiper-pagination",
      },
    });



const userProfile =  document.querySelector("#accountDashboard");
// console.log(userProfile);
const dashboardMenu = document.querySelector("#dashboardMenu");
// console.log(dashboardMenu);

window.addEventListener('click', (e)=>{
  // console.log(e.target);
  if(e.target.id === "menuOn" || e.target.id === "userProfileImg" || e.target.id === "userLogin" || e.target.id === "accountDashboard"){
    dashboardMenu.classList.toggle("hidden");
  }
  else{
    dashboardMenu.classList.add("hidden");
  }
  
})


const logoutMenuItem = document.querySelector("#logoutMenu");
const userNavIcon = document.querySelector("#userIcon");
const loginActiveState = document.querySelector("#userLogin");

logoutMenuItem.addEventListener("click", ()=>{
  if(userNavIcon.classList.contains("hidden")){
    userNavIcon.classList.remove("hidden");
    loginActiveState.classList.add("hidden");
  }
  else{
    userNavIcon.classList.add("hidden");
    loginActiveState.classList.remove("hidden");
  }
  
})


const shoppingBag = document.getElementById("bagSection");
const cartToggler = document.getElementById("cartBtnToggler");
const cartBagCross = document.getElementById("bagCrossBtn");
const crossBtn = document.querySelector("#crossBtn");
const productOne = document.querySelector("#product1");


cartToggler.addEventListener('click', (e)=>{
  
    if(e.target.id === "cartIcon" || e.target.id === "cartBtnToggler" || e.target.id === "cartNotification"){
      shoppingBag.classList.toggle("ct-hidden-bag");
    }
    else{
      shoppingBag.classList.add("ct-hidden-bag");
    }
})

cartBagCross.addEventListener("click", ()=>{
  shoppingBag.classList.add("ct-hidden-bag");
})

crossBtn.addEventListener("click",(e)=>{
  productOne.classList.add("hidden");
})



