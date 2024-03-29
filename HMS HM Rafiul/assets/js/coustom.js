$(document).ready(function () {
    $('.print-media-carousel').owlCarousel({
        navText: [
            '<img src="https://instantsalaries.com/assets/svg/left-arrow.svg" width="30">',
            '<img src="https://instantsalaries.com/assets/svg/right-arrow.svg" width="30">'
        ],
        margin: 25,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 5000,
        autoplaySpeed: 7000,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            767: {
                items: 1,
            },
            991: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });
});