$(document).ready(function() {
    var slider = $('#lightSlider').lightSlider({
        slideMargin: 3,
        slideWidth: 200,
        loop: true,
        pause: 3000,
        responsive : [
            {
                breakpoint: 1180,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    item:1,
                    slideMove: 1
                }
            }
        ]
    });

    slider.play();

    $('#goToPrevSlide').click(function(){
        slider.goToPrevSlide();
    });
    $('#goToNextSlide').click(function(){
        slider.goToNextSlide();
    });

});