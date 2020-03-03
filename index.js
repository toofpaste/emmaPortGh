
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $("#button").addClass('show');
    } else {
        $("#button").removeClass('show');
    }
});
$(document).ready(function() {
    $("#button").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
});
