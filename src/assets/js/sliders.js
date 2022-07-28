$(document).ready(function() {

    let solutionsSlider = new Swiper(".solutions", {
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
          744: {
            centeredSlides: true,
          }
        },

        navigation: {
          nextEl: '.brands__slider .swiper-button-next',
          prevEl: '.brands__slider .swiper-button-prev',
        }
    })

})