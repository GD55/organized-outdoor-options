var x = $('#first').height() - 1;
console.log(x);

$(window).on('load', function () {
    $("#seconda").toggleClass('selected', (document.body.scrollTop < ((2 * x) - 40) && document.body.scrollTop > (x - 40)));
    $("#thirda").toggleClass('selected', (document.body.scrollTop < ((3 * x) - 40) && document.body.scrollTop > ((2 * x) - 40)));
    $("#fourtha").toggleClass('selected', (document.body.scrollTop < ((4 * x) - 40) && document.body.scrollTop > ((3 * x) - 40)));
    $("#fiftha").toggleClass('selected', (document.body.scrollTop < ((5 * x) - 40) && document.body.scrollTop > ((4 * x) - 40)));
    $("#sixtha").toggleClass('selected', (document.body.scrollTop < ((6 * x) - 40) && document.body.scrollTop > ((5 * x) - 40)));
});

window.onscroll = function () {
    $("#seconda").toggleClass('selected', (document.body.scrollTop < ((2 * x) - 40) && document.body.scrollTop > (x - 40)));
    $("#thirda").toggleClass('selected', (document.body.scrollTop < ((3 * x) - 40) && document.body.scrollTop > ((2 * x) - 40)));
    $("#fourtha").toggleClass('selected', (document.body.scrollTop < ((4 * x) - 40) && document.body.scrollTop > ((3 * x) - 40)));
    $("#fiftha").toggleClass('selected', (document.body.scrollTop < ((5 * x) - 40) && document.body.scrollTop > ((4 * x) - 40)));
    $("#sixtha").toggleClass('selected', (document.body.scrollTop < ((6 * x) - 40) && document.body.scrollTop > ((5 * x) - 40)));
}

$('.parallax-window').parallax({ imageSrc: '/public/background.jpg' });

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();   
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + x + 400;
            console.log(i);
            console.log(bottom_of_window);
            console.log(bottom_of_object);
            console.log($(this).position().top);
            console.log($(window).scrollTop());
            console.log($(window).height());
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });
    });
});


var deadline = new Date("mar 31, 2020 0:0:0").getTime();

var i = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    document.getElementById("day").innerHTML = days + ' :';
    document.getElementById("hour").innerHTML = hours + ' :';
    document.getElementById("minute").innerHTML = minutes + ' :';
    document.getElementById("seconds").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("seconds").innerHTML = '0';
    }
}, 500);