$(document).ready(function() {

    // Header menu
    $('.header__burger').on('click', function() {
        $('.header__nav').addClass('mobile-menu')
        $('body').addClass('overflow-hidden')
    })

    $('.close-menu').on('click', function() {
        $('.header__nav').removeClass('mobile-menu')
        $('body').removeClass('overflow-hidden')
    })

    $('.nav-toggle').on('click', function() {
        $(this).parent().parent().find('.nav__submenu').slideToggle()
    })

    // Popup
    $('.header__cities, .mobile-header__cities').on('click', function() {
        $('.popup').removeClass('hide')
        $('.mobile-menu').removeClass('mobile-menu')
    })

    $('.popup-close').on('click', function() {
        $('.popup').addClass('hide')
    })

    $('.geo-search-remove').on('click', function() {
        $('.geo-search-input input').val('');
    })

});