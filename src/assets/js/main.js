$(document).ready(function() {

    // Header mobile menu:Start
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
    // Header mobile menu:End

});