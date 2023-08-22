(function() {
    "use strict"; // Start of use strict

    const $menu = $('#header');
    const menuHeight = $menu.outerHeight();
    const $logo = $('#logo');

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > menuHeight) {
            $menu.addClass('scrolled');
            $logo.attr('src', '/qupid-imgs/logo-qupid-bk.png');
        } else {
            $menu.removeClass('scrolled');
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

    function processAnimation() {
        $('#curve-line-img').addClass("wipe-right");
        $('.service-process-step-wrap').addClass("fadeIn")
        $('.service-process-circle').addClass("fadeIn")
        $('.service-process-first-step').addClass("fadeIn delay1s");
        $('#second-step1').addClass("fadeIn delay15s");
        $('#second-step2').addClass("fadeIn delay15s");
        $('#third-step1').addClass("fadeIn delay2s");
        $('#third-step2').addClass("fadeIn delay2s");
        $('#last-step1').addClass("fadeIn delay25s");
        $('#last-step2').addClass("fadeIn delay25s");
    }
    function removeAllAnimation() {
        $('.slideUp').removeClass('slideUp');
        $('.slideLeft').removeClass('slideLeft');
        $('.slideRight').removeClass('slideRight');
        $('.fadeIn').removeClass('fadeIn');
        $('.centerOut').removeClass('centerOut');
        $('.wipeLeft').removeClass('wipeLeft');
        $('.wipeRight').removeClass('wipeRight');
        $('.wipeDown').removeClass('wipeDown');
        $('.delay05s').removeClass('delay05s');
        $('.delay1s').removeClass('delay1s');
        $('.delay15s').removeClass('delay15s');
        $('.delay2s').removeClass('delay2s');
        $('.delay25s').removeClass('delay25s');
        $('.delay3s').removeClass('delay3s');
    }

    /* GNB 클릭 시 애니메이션*/
    $("#logo").click(function () {
        removeAllAnimation();
       $('.stick-bar').addClass("wipeDown delay05s")
    });
    $("#click-service").click(function() {
        removeAllAnimation();
        $('#post-slideUp').addClass("slideUp delay05s");
    });
    $("#click-process").click(function() {
        removeAllAnimation();
        processAnimation();
    });
    $("#click-effect").click(function() {
        removeAllAnimation();
        $('#centerOut').addClass("centerOut");
    });
    $("#click-example").click(function() {
        removeAllAnimation();
        $('.img-left').addClass("slideLeft delay05s");
        $('.img-right').addClass("slideRight delay05s");
        $('.ex-box .ex-desc').addClass("slideUp delay05s");
    });

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

    $(window).scroll(function() {
        // var topOfWindow = $(window).scrollTop();
        // var windowHeight = $(window).height();
        // var documentHeight = $(document).height();
        //
        // if (topOfWindow + windowHeight >= 900) {
        //     $('#post-slideUp').addClass("slideUp");
        // }
        // if ((topOfWindow + windowHeight >= 2662) || topOfWindow + windowHeight <= 950) {
        //     $('#post-slideUp').removeClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 1546) {
        //     $('#doc-slideUp').addClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 4500 || topOfWindow + windowHeight <= 1546) {
        //     $('#doc-slideUp').removeClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 2662) {
        //     $('#curve-line-img').addClass("wipe-right");
        //     $('.service-process-step-wrap').addClass("fadeIn")
        //     $('.service-process-circle').addClass("fadeIn")
        //     $('.service-process-first-step').addClass("fadeIn delay1s");
        //     $('#second-step1').addClass("fadeIn delay15s");
        //     $('#second-step2').addClass("fadeIn delay15s");
        //     $('#third-step1').addClass("fadeIn delay2s");
        //     $('#third-step2').addClass("fadeIn delay2s");
        //     $('#last-step1').addClass("fadeIn delay25s");
        //     $('#last-step2').addClass("fadeIn delay25s");
        // }
        // if (topOfWindow + windowHeight >= 4200 || topOfWindow + windowHeight <= 2600) {
        //     $('#curve-line-img').removeClass("wipe-right");
        //     $('#service-process-block1').removeClass("fadeIn");
        //     $('#service-process-block2').removeClass("fadeIn");
        // }
        // if (topOfWindow + windowHeight >= 3900) {
        //     $('#centerOut').addClass("centerOut");
        // }
        // if (topOfWindow + windowHeight >= 5200 || topOfWindow + windowHeight <= 3500) {
        //     $('#centerOut').removeClass("centerOut");
        // }
        // if (topOfWindow + windowHeight >= 4700) {
        //     $('.ex-img').addClass("slideRight");
        //     $('.ex-desc').addClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 6000 || topOfWindow + windowHeight <= 4700) {
        //     $('#ex-img1').removeClass("slideRight");
        //     $('#ex-desc1').removeClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 5150) {
        //     $('#ex-img2').addClass("slideLeft");
        //     $('#ex-desc2').addClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 6450 || topOfWindow + windowHeight <= 5150) {
        //     $('#ex-img2').removeClass("slideLeft");
        //     $('#ex-desc2').removeClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 5600) {
        //     $('#ex-img3').addClass("slideRight");
        //     $('#ex-desc3').addClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 6700 || topOfWindow + windowHeight <= 5600) {
        //     $('#ex-img3').removeClass("slideRight");
        //     $('#ex-desc3').removeClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 6050) {
        //     $('#ex-img4').addClass("slideLeft");
        //     $('#ex-desc4').addClass("slideUp");
        // }
        // if (topOfWindow + windowHeight >= 7400 || topOfWindow + windowHeight <= 6050) {
        //     $('#ex-img4').removeClass("slideLeft");
        //     $('#ex-desc4').removeClass("slideUp");
        // }
    });
})(jQuery);
