$(document).ready(function() {

    let solutionsSlider = new Swiper(".solutions-slider", {
        slidesPerView: 1,

        breakpoints: {
          744: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          }
        },

        navigation: {
          nextEl: '.solutions .slider-button-next',
          prevEl: '.solutions .slider-button-prev',
        }
    })

    let catSlider;
    let init;

    catSliderCheck();

    $(window).on('resize', function() {
      catSliderCheck()
    })

    function catSliderCheck() {

      if ($(window).width() < 744) {
        if (!init) {
          init = true;
          catSlider = new Swiper(".cat-tab-slider", {
            slidesPerView: 'auto',
            freeMode: true,
          })
        }
      } else {
        if (typeof(catSlider) !== "undefined" ) {
          init = false;
          catSlider.destroy();
        }
      }
    }

})