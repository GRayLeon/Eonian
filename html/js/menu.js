$(document).ready(function() {
    $('.header .switchButton').on('click', function() {
        $('.header').toggleClass('open')
    })
    $('.productContent__nav > .switchButton').on('click', function() {
        $('.productContent__filter').toggleClass('open')
        $(this).toggleClass('active')
    })
})