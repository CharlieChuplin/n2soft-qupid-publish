(function() {
    "use strict"; // Start of use strict
    $

    $(window).on("scroll", handleScroll);

    const $menu = $('#header');
    const menuHeight = $menu.outerHeight();
    const $logo = $('#logo');

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > menuHeight) {
            $menu.addClass('scrolled');
            $menu.addClass('box-shadow');
            $logo.attr('src', '/qupid-imgs/logo-qupid-bk.png');
        } else {
            $menu.removeClass('scrolled');
            $menu.removeClass('box-shadow');
            $logo.attr('src', '/qupid-imgs/logo-qupid.png');
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $("#logo").click(function () {
        $('.stick-bar').addClass("wipeDown delay05s")
    });

    /* 고객사 슬라이드 start */
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

    /* 고객사 슬라이드 end */

    function handleScroll() {
        var topOfWindow = $(window).scrollTop();
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

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
        };
    }
})(jQuery);
