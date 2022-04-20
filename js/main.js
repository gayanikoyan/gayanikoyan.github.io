$('.intro a.icon-arrow').click(function () {
    var elem = $('.services'),
        elemTop = elem.offset().top;
    $('body, html').animate({ scrollTop: elemTop }, 500);
});