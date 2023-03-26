'use strict'

{
    //$の宣言
    $(function () {
        /* トップスクロール
========================================== */
        $(window).scroll(function () {
            /* windowがスクロールされた時に中の処理が実行されます */
            if ($(this).scrollTop() > 100) {
                /* もし、画面最上部からのスクロール量が100pxを超えたら */
                $('.page-top__btn').stop(true).fadeIn(); /* 'page-top__btn'という名前の要素をフェードインさせます */
            } else {
                /* 画面最上部からのスクロール量が100px以内なら */
                $('.page-top__btn').stop(true).fadeOut(); /* 'page-top__btn'をフェードアウトさせます */
            }
        });
        $('.page-top__btn').click(function () {
            /* 'page-top__btn'という名前の要素をクリックした時に */
            $('body,html').animate({
                scrollTop: 0
            }, 500); /* ページの最上部に戻ります */

            return false;
        });
    });


    /*===== header__scroll =====  */
    $(function () {
        $(window).on("scroll", function () {
            const sliderHeight = $(".mv").height(); //fvの高さを超えたら
            if (sliderHeight - 30 < $(this).scrollTop()) {
                $(".js-header").addClass("header__scroll"); //header__scrollクラスをつける
            } else {
                $(".js-header").removeClass("header__scroll");
            }
        });
    });
    $(function () {
        $(window).on("scroll", function () {
            const sliderHeight_contact = $(".mv").height(); //fvの高さを超えたら
            if (sliderHeight_contact - 50 < $(this).scrollTop()) {
                $(".js-header").addClass("header__scroll"); //header__scrollクラスをつける
            } else {
                $(".js-header").removeClass("header__scroll");
            }
        });
    });


    $(function () {
        $(window).on("scroll", function () {
            const sliderHeight = $(".mv").height(); //fvの高さを超えたら
            if (sliderHeight - 30 < $(this).scrollTop()) {
                $(".js-header--drawer").addClass("header__scroll--drawer"); //header__scroll--drawerクラスをつける
            } else {
                $(".js-header--drawer").removeClass("header__scroll--drawer");
            }
        });
    });
    $(function () {
        $(window).on("scroll", function () {
            const sliderHeight_contact = $(".mv").height(); //fvの高さを超えたら
            if (sliderHeight_contact - 50 < $(this).scrollTop()) {
                $(".js-header--drawer").addClass("header__scroll--drawer"); //header__scroll--drawerクラスをつける
            } else {
                $(".js-header--drawer").removeClass("header__scroll--drawer");
            }
        });
    });

    /* スムーススクロール
========================================== */
    $('a[href^="#"]').click(function () {
        var target = $($(this).attr("href")).offset().top;

        target -= 80;

        $("html, body").animate({
            scrollTop: target
        }, 500);


        return false;
    });


    /* ハンバーガーメニュー
========================================== */
    $('.drawer__icon').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('is-active');
        $('.drawer__content').toggleClass('is-active');

        if ($(this).hasClass('is-active')) {
            $('body,html').css('overflow-y', 'hidden'); //背景スクロールさせない
        } else {
            $('body,html').css('overflow-y', 'visible'); //スクロール再開
        }
        return false
    });

    $('.drawer__link').click(function (e) {
        $('.drawer__icon').removeClass('is-active');
        $('.drawer__content').removeClass('is-active');
        $('body,html').css('overflow-y', 'visible'); //スクロール再開
    });

/*bgswitcher
==========================================*/

    jQuery(function ($) {		
        $('.mv').bgSwitcher({
            images: ['images/fv-bgi_01.png', 'images/fv-bgi_02.png', 'images/fv-bgi_03.png'], // 切り替える背景画像を指定
            interval: 3000, // 背景画像を切り替える間隔を指定 3000=3秒
            loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
            effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
            duration: 600, // エフェクトの時間を指定します。
            easing: "swing" // エフェクトのイージングをlinear,swingから指定
        });			
});
}
