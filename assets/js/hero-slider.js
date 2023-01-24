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