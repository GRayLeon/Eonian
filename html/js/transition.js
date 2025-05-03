$(document).ready(function() {
    $('.productContent__filter li').on('click', function() {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })
    
    $('a[href]').on('click', function(event) {
        const targetUrl = $(this).attr('href')

        const isExternal = $(this).attr('target') === '_blank' || targetUrl.startsWith('#') || targetUrl.startsWith('mailto:') || targetUrl.startsWith('javascript:')

        if (!isExternal) {
            event.preventDefault()
            $('body').fadeOut(300, function() {
                window.location.href = targetUrl
            })
        }
    })
})