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

    if ($('.cat-tab-slider').length) {

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

  /////////////////////////////////////////////////////////////////////
  // КАРТОЧКА ТОВАРА
  ////////////////////////////////////////////////////////////////////
  let item_cart_pagination;

  item_cart_pagination = new Swiper('.product__slider-pagination .swiper', {
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      direction: 'vertical'
  });

  let item_cart;

  item_cart = new Swiper('.product__slider', {
      slidesPerView: "auto",
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
      thumbs: {
        swiper: item_cart_pagination,
      },

      navigation: {
        nextEl: '.product__item .slider-button-next',
        prevEl: '.product__item .slider-button-prev',
      }
  });

  let productTabSlider;
  let sliderInit;

  prodTabCheck();

  $(window).on('resize', function() {
    prodTabCheck()
  })

  function prodTabCheck() {

    if ($('.tabs-slide').length) {

      if ($(window).width() < 744) {
        if (!sliderInit) {
          sliderInit = true;
          productTabSlider = new Swiper(".tabs-slide", {
            slidesPerView: 'auto',
            freeMode: true,
          })
        }
      } else {
        if (typeof(productTabSlider) !== "undefined" ) {
          sliderInit = false;
          productTabSlider.destroy();
        }
      }

    }
  }

  let interiorSlider = new Swiper(".interior__slider .swiper", {
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
      nextEl: '.interior__slider .slider-button-next',
      prevEl: '.interior__slider .slider-button-prev',
    }
  })

})