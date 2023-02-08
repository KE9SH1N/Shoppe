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
  console.log(e.target);
  if(e.target.id === "menuOn" || e.target.id === "userProfileImg"){
    dashboardMenu.classList.toggle("hidden");
  }
  else{
    dashboardMenu.classList.add("hidden");
  }
  
})


