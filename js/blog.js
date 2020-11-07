(function($){
    $('.slide-inner').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 4500,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        cssEase: 'ease',
        draggable: true,
        fade: false,
        arrows: true,
        prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 801,
            settings: {
                arrows: false,
                fade: true,
            }
        }]

    })


})(jQuery)