(function() {
    "use strict"; // Start of use strict
    document.documentElement.setAttribute('data-theme', 'light');

    $(window).on("scroll", handleScroll);
    $(window).on("scroll", autoScroll);

    const $menu = $('#header');
    const menuHeight = $menu.outerHeight();
    const $logo = $('#logo');
    const $menu_m = $('#menu-icon')
    let viewport = $(window).width();
    let windowWidth = $(window).width();
    const toggle = $('#menu-toggle');

    if (windowWidth <= 767) {
        $('#menu-toggle').css('display', 'block');
        $('#logo').attr('src', 'qupid-imgs/logo-qupid-m.png');
        $('#logo-bnksb').attr('src', 'qupid-imgs/logo-bnksb-m.png');
        $('#logo-ycsb').attr('src', 'qupid-imgs/logo-ycsb-m.png');
        $('#logo-yegaram').attr('src', 'qupid-imgs/logo-yegaramsb-m.png');
        $('#logo-postkorea').attr('src', 'qupid-imgs/logo-postkorea-m.png');
        $('#logo-kakaopay').attr('src', 'qupid-imgs/logo-kakaopay-m.png');
        $('#logo-paysign').attr('src', 'qupid-imgs/logo-paysign-m.png');
        $('.box-wrap br').replaceWith(" ");
        $('.remove-br br').replaceWith(" ");
        $('#ico-A01').attr('src', 'qupid-imgs/ico-A01-m.png');
        $('#ico-A02').attr('src', 'qupid-imgs/ico-A02-m.png');
        $('#ico-A03').attr('src', 'qupid-imgs/ico-A03-m.png');
        $('#ico-A04').attr('src', 'qupid-imgs/ico-A04-m.png');
        $('#ico-B01').attr('src', 'qupid-imgs/ico-B01-m.png');
        $('#ico-B02').attr('src', 'qupid-imgs/ico-B02-m.png');
        $('#ico-B03').attr('src', 'qupid-imgs/ico-B03-m.png');
        $('#ico-B04').attr('src', 'qupid-imgs/ico-B04-m.png');
        $('#img-doc01').attr('src', 'qupid-imgs/img-doc01-m.png');
        $('#img-doc02').attr('src', 'qupid-imgs/img-doc02-m.png');
    }
    $('#click-post-handle').on('click', function() {
        $('#click-post-handle').addClass('process-handler');
        $('#click-doc-handle').removeClass('process-handler');
        $('#process-post-handle').css('display','flex');
        $('#process-doc-handle').css('display','none');
    });
    $('#click-doc-handle').on('click', function() {
        $('#click-doc-handle').addClass('process-handler');
        $('#click-post-handle').removeClass('process-handler');
        $('#process-doc-handle').css('display','flex');
        $('#process-post-handle').css('display','none');
    });

    function autoScroll() {
        if ($(this).scrollTop() > menuHeight) {
            $menu.addClass('scrolled');
            $menu.addClass('box-shadow');
            if (viewport <= 766) {
                $logo.attr('src', '/qupid-imgs/logo-qupid-bk-m.png');
                $menu_m.attr('src','/qupid-imgs/menu-bk.png');

            } else {
                $logo.attr('src', '/qupid-imgs/logo-qupid-bk.png');
            }
        } else {
            $menu.removeClass('scrolled');
            $menu.removeClass('box-shadow');
            if (viewport <= 766) {
                $logo.attr('src', '/qupid-imgs/logo-qupid-m.png');
                $menu_m.attr('src','/qupid-imgs/menu.png');
            } else {
                $logo.attr('src', '/qupid-imgs/logo-qupid.png');
            }
        }
    }

    /* menu toggle */
    function openMenu() {
        $(window).off("scroll", autoScroll);
        $menu.addClass('click-menu');
        $('.gnb-m-toggle')
            .removeClass('wipeDownClose')
            .addClass('wipeDown')
            .css('display', 'block')
            .css('-webkit-display', 'block');
        $menu_m.attr('src', '/qupid-imgs/close.png');
        $logo.attr('src', '/qupid-imgs/logo-qupid-bk-m.png');
    }
    function closeMenu() {
        $('.gnb-m-toggle')
            .removeClass('wipeDown')
            .addClass('wipeDownClose');
        $(window).on("scroll", autoScroll());
        $menu_m.attr('src', '/qupid-imgs/menu-bk.png');
        $logo.attr('src', '/qupid-imgs/logo-qupid-bk-m.png');
        setTimeout(function() {
            $('.gnb-m-toggle').css('display', 'none');
            $menu.removeClass('click-menu');
        }, 500);
    }
    toggle.bind('click', function (e) {
        if ($('.gnb-m-toggle').hasClass('wipeDown')) {
            closeMenu();
            $(window).on("scroll", autoScroll);
        } else {
            openMenu();
        }
    });

    $("#logo").click(function () {
        $('.stick-bar').addClass("wipeDown delay05s");
        closeMenu();
        $(window).on("scroll", autoScroll);
        $menu.removeClass('scrolled');
        $menu.removeClass('box-shadow');
        $menu_m.attr('src', '/qupid-imgs/menu.png');
        if(windowWidth <= 766){
            $logo.attr('src', '/qupid-imgs/logo-qupid-m.png');
        } else {
            $logo.attr('src', '/qupid-imgs/logo-qupid.png');
        }
    });
    $('#click-service-m').click(function () {
        closeMenu();
        $(window).on("scroll", autoScroll);
        $menu.addClass('scrolled');
        $menu.addClass('box-shadow');
    });
    $('#click-process-m').click(function () {
        closeMenu();
        $(window).on("scroll", autoScroll);
        $menu.addClass('scrolled');
        $menu.addClass('box-shadow');
    });
    $('#click-effect-m').click(function () {
        closeMenu();
        $(window).on("scroll", autoScroll);
        $menu.addClass('scrolled');
        $menu.addClass('box-shadow');
    });
    $('#click-example-m').click(function () {
        closeMenu();
        $(window).on("scroll", autoScroll);
        $menu.addClass('scrolled');
        $menu.addClass('box-shadow');
    });
    $('#click-customer-m').click(function () {
        closeMenu();
        $(window).on("scroll", autoScroll);
        $menu.addClass('scrolled');
        $menu.addClass('box-shadow');
    });
    $('#click-inquiry-m').click(function () {
        closeMenu();
        $(window).on("scroll", autoScroll);
        $menu.addClass('scrolled');
        $menu.addClass('box-shadow');
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    /* 고객사 슬라이드  애니메이션 */
    if (windowWidth >= 768) {
        let $banner = $(".wrap-customer").find('ul');
        let $clonedLis = $banner.find('li').clone();
        $banner.append($clonedLis);

        let $bannerWidth = $banner.children().outerWidth();
        let $bannerHeight = $banner.children().outerHeight();
        let $length = $banner.children().length;

        setInterval(function() { rollingStart(); }, 2000);

        function rollingStart() {
            $banner.css("width", $bannerWidth * $length + "px");
            $banner.css("height", $bannerHeight + "px");
            $banner.animate({left: "-260px"}, 1500, function() {
                $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
                $(this).find("li:first").remove();
                $(this).css("left", 0);
            });
        }
    }

    /* 스크롤 애니메이션 */
    function handleScroll() {
        var topOfWindow = $(window).scrollTop();
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        if (windowWidth >= 767) {
            if (topOfWindow + windowHeight >= 900) {
                $('#post-slideUp').addClass("slideUp20");
            }
            if ((topOfWindow + windowHeight >= 2262) || topOfWindow + windowHeight <= 950) {
                $('#post-slideUp').removeClass("slideUp20");
            }
            if (topOfWindow + windowHeight >= 1446) {
                $('#doc-slideUp').addClass("slideUp20");
            }
            if (topOfWindow + windowHeight >= 3300 || topOfWindow + windowHeight <= 1846) {
                $('#doc-slideUp').removeClass("slideUp20");
            }
            if (topOfWindow + windowHeight >= 2662) {
                $('#curve-line-img').addClass("wipeRight");
                $('.service-process-step-wrap').addClass("fadeIn delay05s")
                $('.service-process-circle').addClass("fadeIn delay1s")
                $('.service-process-first-step').addClass("fadeIn delay125s");
                $('#second-step1').addClass("fadeIn delay15s");
                $('#second-step2').addClass("fadeIn delay15s");
                $('#third-step1').addClass("fadeIn delay175s");
                $('#third-step2').addClass("fadeIn delay175s");
                $('#last-step1').addClass("fadeIn delay2s");
                $('#last-step2').addClass("fadeIn delay2s");
            }
            if (topOfWindow + windowHeight >= 4200 || topOfWindow + windowHeight <= 2600) {
                $('#curve-line-img').removeClass("wipeRight delay05s");
                $('.service-process-step-wrap').removeClass("fadeIn delay05s")
                $('.service-process-circle').removeClass("fadeIn delay1s")
                $('.service-process-first-step').removeClass("fadeIn delay125s");
                $('#second-step1').removeClass("fadeIn delay15s");
                $('#second-step2').removeClass("fadeIn delay15s");
                $('#third-step1').removeClass("fadeIn delay175s");
                $('#third-step2').removeClass("fadeIn delay175s");
                $('#last-step1').removeClass("fadeIn delay2s");
                $('#last-step2').removeClass("fadeIn delay2s");
            }
        }

        if (windowWidth >= 1024) {
            if (topOfWindow + windowHeight >= 3900) {
                $('#centerOut').addClass("centerOut");
            }
            if (topOfWindow + windowHeight >= 5200 || topOfWindow + windowHeight <= 3500) {
                $('#centerOut').removeClass("centerOut");
            }
            if (topOfWindow + windowHeight >= 4700) {
                $('#ex-img1').addClass("slideRight");
                $('#ex-desc1').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 7400 || topOfWindow + windowHeight <= 4700) {
                $('#ex-img1').removeClass("slideRight");
                $('#ex-desc1').removeClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 5150) {
                $('#ex-img2').addClass("slideLeft");
                $('#ex-desc2').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 7400 || topOfWindow + windowHeight <= 4700) {
                $('#ex-img2').removeClass("slideLeft");
                $('#ex-desc2').removeClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 5600) {
                $('#ex-img3').addClass("slideRight");
                $('#ex-desc3').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 7400 || topOfWindow + windowHeight <= 4700) {
                $('#ex-img3').removeClass("slideRight");
                $('#ex-desc3').removeClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 6050) {
                $('#ex-img4').addClass("slideLeft");
                $('#ex-desc4').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 7400 || topOfWindow + windowHeight <= 4700) {
                $('#ex-img4').removeClass("slideLeft");
                $('#ex-desc4').removeClass("slideUp2s");
            }
        } else if (windowWidth <= 1023 && windowWidth >= 880) {
            if (topOfWindow + windowHeight >= 3300) {
                $('#centerOut').addClass("centerOut");
            }
            if (topOfWindow + windowHeight >= 4600 || topOfWindow + windowHeight <= 3300) {
                $('#centerOut').removeClass("centerOut");
            }
            if (topOfWindow + windowHeight >= 4000) {
                $('#ex-img1').addClass("slideRight");
                $('#ex-desc1').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 6300 || topOfWindow + windowHeight <= 4000) {
                $('#ex-img1').removeClass("slideRight");
                $('#ex-desc1').removeClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 4400) {
                $('#ex-img2').addClass("slideLeft");
                $('#ex-desc2').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 6300 || topOfWindow + windowHeight <= 4000) {
                $('#ex-img2').removeClass("slideLeft");
                $('#ex-desc2').removeClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 4750) {
                $('#ex-img3').addClass("slideRight");
                $('#ex-desc3').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 6300 || topOfWindow + windowHeight <= 4000) {
                $('#ex-img3').removeClass("slideRight");
                $('#ex-desc3').removeClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 5150) {
                $('#ex-img4').addClass("slideLeft");
                $('#ex-desc4').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 6300 || topOfWindow + windowHeight <= 4000) {
                $('#ex-img4').removeClass("slideLeft");
                $('#ex-desc4').removeClass("slideUp2s");
            }
        } else if (windowWidth <= 879 && windowWidth >= 767) {
            if (topOfWindow + windowHeight >= 3400) {
                $('#centerOut').addClass("centerOut");
            }
            if (topOfWindow + windowHeight >= 4400 || topOfWindow + windowHeight <= 3200) {
                $('#centerOut').removeClass("centerOut");
            }
            if (topOfWindow + windowHeight >= 3800) {
                $('#ex-img1').addClass("slideRight");
                $('#ex-desc1').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 6000 || topOfWindow + windowHeight <= 3800) {
                $('#ex-img1').removeClass("slideRight");
                $('#ex-desc1').removeClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 4150) {
                $('#ex-img2').addClass("slideLeft");
                $('#ex-desc2').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 6000 || topOfWindow + windowHeight <= 3800) {
                $('#ex-img2').removeClass("slideLeft");
                $('#ex-desc2').removeClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 4500) {
                $('#ex-img3').addClass("slideRight");
                $('#ex-desc3').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 6000 || topOfWindow + windowHeight <= 3800) {
                $('#ex-img3').removeClass("slideRight");
                $('#ex-desc3').removeClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 4900) {
                $('#ex-img4').addClass("slideLeft");
                $('#ex-desc4').addClass("slideUp2s");
            }
            if (topOfWindow + windowHeight >= 6000 || topOfWindow + windowHeight <= 3600) {
                $('#ex-img4').removeClass("slideLeft");
                $('#ex-desc4').removeClass("slideUp2s");
            }
        } else if (windowWidth <= 767) {
            if (topOfWindow + windowHeight >= 700) {
                $('#post-slideUp').addClass("slideUp20");
            }
            if ((topOfWindow + windowHeight >= 2062) || topOfWindow + windowHeight <= 800) {
                $('#post-slideUp').removeClass("slideUp20");
            }
            if (topOfWindow + windowHeight >= 1446) {
                $('#doc-slideUp').addClass("slideUp20");
            }
            if (topOfWindow + windowHeight >= 3200 || topOfWindow + windowHeight <= 1646) {
                $('#doc-slideUp').removeClass("slideUp20");
            }
            if (topOfWindow + windowHeight >= 2800) {
                $('#dot1').addClass("fadeIn");
                $('#m-step1').addClass("fadeIn");
                $('#dash1').addClass("fadeIn delay025s");
                $('#dot2').addClass("fadeIn delay05s");
                $('#m-step2').addClass("fadeIn delay05s");
                $('#dash2').addClass("fadeIn delay075s");
                $('#dot3').addClass("fadeIn delay1s");
                $('#m-step3').addClass("fadeIn delay1s");
                $('#dash3').addClass("fadeIn delay125s");
                $('#dot4').addClass("fadeIn delay15s");
                $('#m-step4').addClass("fadeIn delay15s");
                $('#dot5').addClass("fadeIn");
                $('#m-step5').addClass("fadeIn");
                $('#dash5').addClass("fadeIn delay025s");
                $('#dot6').addClass("fadeIn delay05s");
                $('#m-step6').addClass("fadeIn delay05s");
                $('#dash6').addClass("fadeIn delay075s");
                $('#dot7').addClass("fadeIn delay1s");
                $('#m-step7').addClass("fadeIn delay1s");
                $('#dash7').addClass("fadeIn delay125s");
                $('#dot8').addClass("fadeIn delay15s");
                $('#m-step8').addClass("fadeIn delay15s");
            }
            if (topOfWindow + windowHeight >= 3900 || topOfWindow + windowHeight <= 2600) {
                $('#dot1').removeClass("fadeIn");
                $('#m-step1').removeClass("fadeIn");
                $('#dash1').removeClass("fadeIn delay25s");
                $('#dot2').removeClass("fadeIn delay05s");
                $('#m-step2').removeClass("fadeIn delay05s");
                $('#dash2').removeClass("fadeIn delay075s");
                $('#dot3').removeClass("fadeIn delay1s");
                $('#m-step3').removeClass("fadeIn delay1s");
                $('#dash3').removeClass("fadeIn delay125s");
                $('#dot4').removeClass("fadeIn delay15s");
                $('#m-step4').removeClass("fadeIn delay15s");
                $('#dot5').removeClass("fadeIn");
                $('#m-step5').removeClass("fadeIn");
                $('#dash5').removeClass("fadeIn delay25s");
                $('#dot6').removeClass("fadeIn delay05s");
                $('#m-step6').removeClass("fadeIn delay05s");
                $('#dash6').removeClass("fadeIn delay075s");
                $('#dot7').removeClass("fadeIn delay1s");
                $('#m-step7').removeClass("fadeIn delay1s");
                $('#dash7').removeClass("fadeIn delay125s");
                $('#dot8').removeClass("fadeIn delay15s");
                $('#m-step8').removeClass("fadeIn delay15s");
            }
            if (topOfWindow + windowHeight >= 3650) {
                $('#effect-expectation1').addClass("fadeIn ");
                $('#effect-expectation2').addClass("fadeIn delay05s");
                $('#effect-expectation3').addClass("fadeIn delay1s");
            }
            if (topOfWindow + windowHeight >= 4900 || topOfWindow + windowHeight <= 3300) {
                $('#effect-expectation1').removeClass("fadeIn ");
                $('#effect-expectation2').removeClass("fadeIn delay05s");
                $('#effect-expectation3').removeClass("fadeIn delay1s");
            }
            if (topOfWindow + windowHeight >= 3700) {
                $('#ex-m-img1').addClass("slideLeft");
                $('#ex-m-desc1').addClass("slideUp");
            }
            if (topOfWindow + windowHeight >= 6200 || topOfWindow + windowHeight <= 4300) {
                $('#ex-m-img1').removeClass("slideLeft");
                $('#ex-m-desc1').removeClass("slideUp");
            }
            if (topOfWindow + windowHeight >= 4200) {
                $('#ex-m-img2').addClass("slideLeft");
                $('#ex-m-desc2').addClass("slideUp");
            }
            if (topOfWindow + windowHeight >= 6200 || topOfWindow + windowHeight <= 4300) {
                $('#ex-m-img2').removeClass("slideLeft");
                $('#ex-m-desc2').removeClass("slideUp");
            }
            if (topOfWindow + windowHeight >= 4600) {
                $('#ex-m-img3').addClass("slideLeft");
                $('#ex-m-desc3').addClass("slideUp");
            }
            if (topOfWindow + windowHeight >= 6200 || topOfWindow + windowHeight <= 4300) {
                $('#ex-m-img3').removeClass("slideLeft");
                $('#ex-m-desc3').removeClass("slideUp");
            }
            if (topOfWindow + windowHeight >= 5000) {
                $('#ex-m-img4').addClass("slideLeft");
                $('#ex-m-desc4').addClass("slideUp");
            }
            if (topOfWindow + windowHeight >= 6200 || topOfWindow + windowHeight <= 4300) {
                $('#ex-m-img4').removeClass("slideLeft");
                $('#ex-m-desc4').removeClass("slideUp");
            }
        };
    }

})(jQuery);
