// animacion navbar

$(document).ready(function () {
    var altura = $('.navbar').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.navbar').addClass('menu-fixed');
        } else {
            $('.navbar').removeClass('menu-fixed');
        }
    });
});

//smooth scroling

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 700);
        return false;
    });
});

alertify.set('notifier', 'position', 'top-right');
