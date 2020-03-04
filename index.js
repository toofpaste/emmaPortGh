
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $("#button").addClass('show');
    } else {
        $("#button").removeClass('show');
    }
});
$(document).ready(function() {
    $(".allgrid").fadeOut(10);
    $("#top").fadeOut(10);
    $("#hoverFor").fadeOut(10);
    $("#button").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

    setTimeout(function(){
        $("#topLogo").fadeOut(1000);
    }, 2500);
    setTimeout( function () {
        $(".allgrid").fadeIn(1000);
        $("#top").fadeIn(1000);
        $("#hoverFor").fadeIn(1000);
    }, 3500);
});
