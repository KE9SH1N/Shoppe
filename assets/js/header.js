
// USER LOGOUT ON CLICK BUTTON EVENT

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

    

// USER ACCOUNT DROPDOWN MENU

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



// SHOPPING BAG SLIDER ANIMATION ON CLICK EVENT

const shoppingBag = document.getElementById("shoppingBag");
const cartToggler = document.getElementById("cartBtnToggler");
const cartBagCross = document.getElementById("bagCrossBtn");
const crossBtn = document.querySelector("#crossBtn");
const productOne = document.querySelector("#product1");

cartToggler.addEventListener('click', (e)=>{
  
    if(e.target.id === "cartIcon" || e.target.id === "cartBtnToggler" || e.target.id === "cartNotification"){
      shoppingBag.classList.toggle("ct-hide-bag");
    }
    else{
      shoppingBag.classList.add("ct-hide-bag");
    }
})

cartBagCross.addEventListener("click", ()=>{
  shoppingBag.classList.add("ct-hide-bag");
})

crossBtn.addEventListener("click",(e)=>{
  productOne.classList.add("hidden");
})



// SEARCH BUTTON ON CLICK EVENT

function hightSlide(id, hSize) {
     if (id.classList.contains("h-0")) {
          id.classList.remove("h-0", "opacity-0", "invisible");
          id.classList.add(`${hSize}`, "opacity-100", "visible");
     } else {
          id.classList.add("h-0", "opacity-0", "invisible");
          id.classList.remove(`${hSize}`, "opacity-100", "visible");
     }
}