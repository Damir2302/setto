$(document).ready(function() {

    // Выбор города::Start
    $('.header__cities, .mobile-header__cities').on('click', function() {
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
        $('.popup').removeClass('hide')
        $('.mobile-menu').removeClass('mobile-menu')
    })

    $('.popup-close').on('click', function() {
        $('body').removeClass('overflow-hidden')
        $('#page').removeClass('bg-overlay')
        $('.popup').addClass('hide')
    })

    $('.geo-search-remove').on('click', function() {
        $('.geo-search-input input').val('')
    })
    // Выбор города::End

    // Авторизация::Start
    $('.header-button-profile, .mobile-menu__link').on('click', function() {
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
        $('.popup').removeClass('hide')
        $('.popup-auth').addClass('open')
        $('.mobile-menu').removeClass('mobile-menu')
    })

    $('.close-auth').on('click', function() {
        $('body').removeClass('overflow-hidden')
        $('#page').removeClass('bg-overlay')
        $('.popup').addClass('hide')
        $('.popup-auth').removeClass('open')

        $('.button-menu').removeClass('opened')
        $('.header__right').removeClass('mobile-menu')
        $('.submenu__mobile').slideUp()
    })

    $('.input-style input, .input-style textarea').on('focus', function() {
        $(this).parent().find('.input-label').css('display', 'none');
    })

    $('.input-style input, .input-style textarea').on('blur', function() {
        if ($(this).val().length == 0) {
            $(this).parent().find('.input-label').css('display', 'block');
        }
    })

    $('.auth__tab').on('click', function() {
        $('.auth__label').attr('data-index', $(this).attr('data-active'))
        $('.auth__body').attr('data-show', $(this).attr('data-active'))

        if ($(this).attr('data-active') == '1') {
            $('.auth__title').text('Регистрация')
            $('.popup-auth__inner').addClass('resize')
        } else {
            $('.auth__title').text('Авторизация')
            $('.popup-auth__inner').removeClass('resize')
        }
    })

    $('.pass-view').on('click', function() {
        $(this).toggleClass('show')

        if ($(this).hasClass('show')) {
            $(this).parent().find('[type="password"]').attr('type', 'text')
        } else {
            $(this).parent().find('[type="text"]').attr('type', 'password')
        }
    })
    // Авторизация::End

})