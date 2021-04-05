// FadeTo elements
if ($(window).width() > 1023) {

    tiles = $("h2, h3, h6, .hed h2, .hed p, .hed span, .about-us .row, .partners .row img, .grid li, .contact form, .contact .info .p1, .contact .info .p2, .contact .info .p3, .contact-text ").fadeTo(0, 0);

    $(window).scroll(function (d, h) {
        tiles.each(function (i) {
            a = $(this).offset().top + $(this).height();
            b = $(window).scrollTop() + $(window).height();
            if (a < b) $(this).fadeTo(1000, 1);
        });
    });
}

$(document).ready(function () {

    $("html").niceScroll({
        cursorcolor: "#ada074",
        cursorwidth: "5px",
        cursorborder: false,
    });

    $("nav").sticky({
        topSpacing: 0,
        zIndex: 9999
    });

});
