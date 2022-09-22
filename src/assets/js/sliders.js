$(document).ready(function() {

    let heroSlider = new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 50,

        pagination: {
            el: '.swiper-pagination',
          },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

});