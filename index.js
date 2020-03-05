
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        $("#button").addClass('show');
    } else {
        $("#button").removeClass('show');
    }
});
var count = 0;
var count2 = 0;
$(document).ready(function() {
    $(".allgrid").fadeOut(10);
    $("#top").fadeOut(10);
    $("#hoverFor").fadeOut(10);
    $("#button").on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

    // $("#play1").on('click', function (e) {
    //     e.preventDefault();
    //     playVid();
    //     count++;
    // });
    // $("#play2").on('click', function (e) {
    //     e.preventDefault();
    //     playVid2();
    //     count2++;
    // });
    //
    // $("#vid1").on('click', function (e) {
    //     e.preventDefault();
    //    pauseVid();
    //    count--;
    // });
    // $("#vid2").on('click', function (e) {
    //     e.preventDefault();
    //     pauseVid2();
    //     count2--;
    // });
    //
    //
    // var vid = document.getElementById("vid1");
    // var vid2 = document.getElementById("vid2");
    // function playVid() {
    //     $("#play1").fadeOut(300);
    //     vid.play();
    // }
    //
    // function pauseVid() {
    //     $("#play1").fadeIn(300);
    //     vid.pause();
    // }
    //
    // function playVid2() {
    //     $("#play2").fadeOut(300);
    //     vid2.play();
    // }
    //
    // function pauseVid2() {
    //     $("#play2").fadeIn(300);
    //     vid2.pause();
    // }

    setTimeout(function(){
        $("#topLogo").fadeOut(1000);
    }, 2500);
    setTimeout( function () {
        $(".allgrid").fadeIn(1000);
        $("#top").fadeIn(1000);
        $("#hoverFor").fadeIn(1000);
    }, 3500);
});
