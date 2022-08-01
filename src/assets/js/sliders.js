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

          1280: {
            slidesPerView: 2,
            spaceBetween: 40,
          }
        },

        navigation: {
          nextEl: '.solutions .slider-button-next',
          prevEl: '.solutions .slider-button-prev',
        }
    })

    let catTabSlider;
    let init;

    catSliderCheck();

    $(window).on('resize', function() {
      catSliderCheck()
    })

    function catSliderCheck() {

      if ($(window).width() < 744) {
        if (!init) {
          init = true;
          catTabSlider = new Swiper(".cat-tab-slider", {
            slidesPerView: 'auto',
            freeMode: true,
          })
        }
      } else {
        if (typeof(catTabSlider) !== "undefined" ) {
          init = false;
          catTabSlider.destroy();
        }
      }
    }

    let catSlider = new Swiper(".cat-slider", {
      slidesPerView: 1,

      breakpoints: {
        744: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      },

      navigation: {
        nextEl: '.cat .slider-button-next',
        prevEl: '.cat .slider-button-prev',
      }
  })

})