$(function(){

    var windowSize = function Resized(){

        var winSize = $(window).width();

        if (winSize > '1042') {
            $('.page-header__menu-mini').css('display','none');
            $('.page-header__menu').removeClass('visually-hidden');
        } else if(winSize <= '1042') {
            $('.page-header__menu-mini').css('display','block');
            $('.page-header__menu').addClass('visually-hidden');
			if($('.menu-mini__line:nth-child(1)').hasClass('menu-mini__line--up')) {
				$('.page-header__menu').removeClass('visually-hidden');
				}
        }


    };

    windowSize();

    $(window).resize(windowSize);

    $('#headerMenuMini').click(function(event){
			$('.menu-mini__line:nth-child(1)').toggleClass('menu-mini__line--up');
			$('.menu-mini__line:nth-child(2)').toggleClass('menu-mini__line--middle');
			$('.menu-mini__line:nth-child(3)').toggleClass('menu-mini__line--bottom');
            $('.page-header__menu').toggleClass('visually-hidden');
			
    });
	
	//При клике не на область меню --> сворачивать его
	$(document).click(function(event){
		if($('.menu-mini__line:nth-child(1)').hasClass('menu-mini__line--up')){
			if( $(event.target).closest('#headerMenuMini').length ) return;
			
			$('.menu-mini__line:nth-child(1)').toggleClass('menu-mini__line--up');
			$('.menu-mini__line:nth-child(2)').toggleClass('menu-mini__line--middle');
			$('.menu-mini__line:nth-child(3)').toggleClass('menu-mini__line--bottom');
			$('.page-header__menu').toggleClass('visually-hidden');
			event.stopPropagation();
		}
	});
				
									
						
})

