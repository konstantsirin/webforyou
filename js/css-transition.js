$(function(){

    var transitionElements = function() {
        $('.top-window__tag-div-top--start').addClass('top-window__tag-div-top').removeClass('top-window__tag-div-top--start');
        $('.top-window__tag-div-bottom--start').addClass('top-window__tag-div-bottom').removeClass('top-window__tag-div-bottom--start');
        $('.top-window__tag-slash--start').addClass('top-window__tag-slash').removeClass('top-window__tag-slash--start');
        $('.top-window__tag-slash-1024--start').addClass('top-window__tag-slash-1024').removeClass('top-window__tag-slash-1024--start');
        $('.top-window__tag-lattice--start').addClass('top-window__tag-lattice').removeClass('top-window__tag-lattice--start');
        $('.top-window__tag-curlyBraces--start').addClass('top-window__tag-curlyBraces').removeClass('top-window__tag-curlyBraces--start');
    }

    transitionElements();

})