// FILTER
let sortDropdown

function checkScreenWidth() {
    if ($(window).width() < 1280) {
        $('.select').css('display', 'none')

        if (!sortDropdown) {
            sortDropdown = true
            $('.top-select').on('click', function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active')
                    $('.select').slideUp()
                } else {
                    $(this).addClass('active')
                    $('.select').slideDown()
                }
            })
        }

    } else if ($(window).width() >= 1280) {
        sortDropdown = false
        $('.select').css('display', 'flex')
        $('.top-select').unbind('click')
    }
}

$(window).on('resize', checkScreenWidth)
checkScreenWidth()

$('.select-option').on('click', function() {
    $('.select-option').removeClass('selected')
    $(this).addClass('selected')
    $('.selected-option').text($(this).text())
})

$('.filter__label').on('click', function() {
    $(this).toggleClass('active')
    $(this).parent().find('.filter__item').slideToggle()
})

$('.filter-btn').on('click', function() {
    $('.filter').addClass('opened')
    $('body').addClass('overflow-hidden')
})

$('.filter-close').on('click', function() {
    $('.filter').removeClass('opened')
    $('body').removeClass('overflow-hidden')
})

$('.grid-style').on('click', function() {
    $(this).parent().find('.grid-style').removeClass('active')
    $(this).addClass('active')
})
