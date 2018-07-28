// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require active_admin
//= require bootstrap.min
//= require jquery.parallax
//= require owl.carousel.min
//= require owl.animate.js
//= require owl.autoplay
//= require owl.autoheight.js
//= require owl.hash.js
//= require owl.lazyload.js
//= require owl.navigation.js
//= require smoothscroll
//= require wow.min
//= require custom
//= require bootstrap-notify.min
//= require jquery.magnific-popup.min
//= require magnific-popup-options
//= require turbolinks_transitions
//= require_tree .


$(document).ready(function() {


    $(window).on('load', function() {
        $('.pre-loader').delay(400).fadeOut(500);
    });
    // $('select').css('color','#ffffff');
    // $('select').change(function() {
    //    var current = $('#select').val();
    //   $('select').css('color','#ffffff');
    // });

    $("#owl-images").owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });

    $("#owl-testimonials").owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true
    });

});

function change(v) {
    if (v == "img1") {
        img1.setAttribute('src', '/images/home-hover.png');
    }
    else if (v == "img2") {
        img2.setAttribute('src', '/images/next-hover.png');
    }
    else if (v == "img3") {
        img3.setAttribute('src', '/images/investment-hover.png');
    }
    else if (v == "img4") {
        img4.setAttribute('src', '/images/contact-hover.png');
    }
}

function changeReset(v) {
    if (v == "img1") {
        img1.setAttribute('src', '/images/home.png');
    }
    else if (v == "img2") {
        img2.setAttribute('src', '/images/next.png');
    }
    else if (v == "img3") {
        img3.setAttribute('src', '/images/investment.png');
    }
    else if (v == "img4") {
        img4.setAttribute('src', '/images/contact.png');
    }
}

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
