$(document).ready(function() {
    function parallax() {
        var scrolled = $(window).scrollTop();
        $('h2').css('margin-top', -(scrolled * 0.4) + 'px');
        $('h3').css('margin-top', -(scrolled * 0.8) + 'px');
        $('h4').css('margin-top', -(scrolled * 0.95) + 'px');

    }

    $(window).scroll(function() {
        parallax();
    });
});