jQuery(document).ready(function ($) {

    function navigateAncre(ancre, destination) {
        $(ancre).click(function () {
            $('html, body').animate({
                scrollTop: $(destination).offset().top
            }, 'slow');
        });
    };

    // ancre navbar
    navigateAncre('header ul li.accueil', '#accueil');
    navigateAncre('header ul li.festival', '#le-festival');
    navigateAncre('header ul li.films', '#films');
    navigateAncre('header ul li.resa', '#resa');
    navigateAncre('header ul li.actualites', '#actualites');

    // ancre page
    navigateAncre('.modal .resa', '#resa');
    navigateAncre('header button.programmation', '#films');
    navigateAncre('#le-festival button', '#resa');

    $('.modal .resa').click(function () {
        $('.modal').modal('hide');
    });

    $('button[type="submit"]').click(function (e) {
        e.preventDefault();
    });

    // nav dynamique
    if (window.matchMedia("(min-width: 770px)").matches) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 1) {
                $('nav.navbar-default').css('backgroundColor', 'rgba(0, 0, 0, 0.63)');
                $('nav.navbar-default').css('borderColor', '#fff');
                $('nav.navbar-default').css('transition', '0.3s');
                $('header#accueil nav ul').css('padding-top', '0px');
                $('nav .logo img').css({
                    'width' : '186px',
                    'transition' : '0.3s'
                });
                $('header#accueil nav a').css({
                    'margin-top' : '0px',
                    'transition' : '0.3s'
                });
            } else {
                $('nav.navbar-default').css('backgroundColor', 'transparent');
                $('nav.navbar-default').css('borderColor', 'transparent');
                $('nav.navbar-default').css('transition', '0.3s');
                $('header#accueil nav ul').css('padding-top', '15px');
                $('nav .logo img').css({
                    'width' : '300px',
                    'transition' : '0.3s'
                });
                $('header#accueil nav a').css({
                    'margin-top' : '10px',
                    'transition' : '0.3s'
                });
            }
        });
    }
});