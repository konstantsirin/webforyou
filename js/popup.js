$(function(){

    /*Проверка - открыта ли страница на мобильном устройстве*/
    isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    /*Узнаем ширину скролла*/

    // создадим элемент с прокруткой
    var div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // при display:none размеры нельзя узнать
    // нужно, чтобы элемент был видим,
    // visibility:hidden - можно, т.к. сохраняет геометрию
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    var scrollWidth = (div.offsetWidth - div.clientWidth) + 'px';
    document.body.removeChild(div);


    var lastFocus; // переменая для сохранения фокуса

    /*Функция для учета скролла*/
    var scrollWindow = function() {
            /*Условие если мобильный или есть поддержка тач событий то...., иначе....*/
            if (isMobile.any() || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {

                $('html').css('overflow-x', 'hidden');

                $('.button').click(function() {
                    $('body').css('overflow', 'hidden').css('padding-right', '0');
                });

                $('.page-header__btn-container, .page-footer__btn').click(function() {
                    $('body').css('overflow', 'hidden').css('padding-right', '0');
                });
            } else {
                $('.button').click(function() {
                    $('body').css('overflow', 'hidden').css('padding-right', scrollWidth);
                });

                $('.page-header__btn-container, .page-footer__btn').click(function() {
                    $('body').css('overflow', 'hidden').css('padding-right', scrollWidth);
                });
            }
        };

    scrollWindow();

    /*При изменении размера экрана опять запускаем функцию учета скролла*/
    $(window).resize(scrollWindow);

    $('.button').click(function() {
        $('body').attr('aria-hidden', 'true'); // делаем основную страницу скрытой
        $('#modalOverlay').css('display', 'block'); // для указания что основная страница недоступна
        $('#formTelEmail').css('display', 'block'); // делаем модальное окно видимым
        $('#formTelEmail').attr('aria-hidden', 'false'); // делаем модальное окно видимым
        lastFocus = document.activeElement;
    });

    $('.page-header__btn-container, .page-footer__btn').click(function() {
        $('body').attr('aria-hidden', 'true'); // делаем основную страницу скрытой
        $('#modalOverlay').css('display', 'block'); // для указания что основная страница недоступна
        $('#formTel').css('display', 'block'); // делаем модальное окно видимым
        $('#formTel').attr('aria-hidden', 'false'); // делаем модальное окно видимым
        lastFocus = document.activeElement;
    });

    $('#formTelEmail, #formTel').click(function(event){
        if(event.target == this)  {
            $('#modalOverlay, #modalOverlay1').css('display', 'none');
            $('#formTelEmail, #formTel').css('display', 'none');
            $('#formTelEmail, #formTel').attr('aria-hidden', 'true');
            $('body').attr('aria-hidden', 'false');
            $('body').css('overflow-x', 'hidden').css('overflow-y', 'auto').css('padding-right', '0');
            $(this).css('display', 'none');
            lastFocus.focus(); // фокус на сохраненный элемент
        }
    });

    $('.popup__close').click(function() {
        $('#modalOverlay, #modalOverlay1').css('display', 'none');
        $('#formTelEmail, #formTel').css('display', 'none');
        $('#formTelEmail, #formTel').attr('aria-hidden', 'true');
        $('body').attr('aria-hidden', 'false');
        $('body').css('overflow-x', 'hidden').css('overflow-y', 'auto').css('padding-right', '0');
        $('.popup').css('display', 'none');
        lastFocus.focus(); // фокус на сохраненный элемент
    });

        $(this).keydown(function(eventObject){
            if (eventObject.which == 27) {
                $('#formTelEmail, #formTel').css('display', 'none');
                $('#modalOverlay, #modalOverlay1').css('display', 'none');
                $('#formTelEmail, #formTel').attr('aria-hidden', 'true');
                $('body').attr('aria-hidden', 'false');
                $('body').css('overflow-x', 'hidden').css('overflow-y', 'auto').css('padding-right', '0');
                lastFocus.focus(); // фокус на сохраненный элемент
            }
        });

})