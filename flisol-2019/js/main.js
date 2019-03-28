$(document).ready(function() {
    $('.acordeon li:has(ul)').click(function(e) {
        e.preventDefault();

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado')
            $(this).children('ul').slideUp();
        } else {
            $('.acordeon li ul').slideUp();
            $('.acordeon li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });
});
