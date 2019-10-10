$(document).ready(function () {


    var media = $('.video-tut').get(0);
    $('#modelId').on('hide.bs.modal', function () {
        var videoAttr = $('#source-video').attr("src");
        $('#source-video').attr("src", "");
        $('#source-video').attr("src", videoAttr);


        // media.pause();
        // media.currentTime = 0;
    })
    // $('.video-btn').click(function(){
    //     media.play();
    // })
    

    var header_top = $('#header').offset().top + 60;

    if (header_top > 60) {
        $("#change-color ul li a").css("color", "#f39c12")

    }
    $(window).scroll(function () {
        var vitrihientai = window.pageYOffset;
        // console.log(vitrihientai);

        var page1 = $('#page1').offset().top;
        var page2 = page1 + $("#page1").outerHeight(true);
        var distance = $('#show').offset().top;
        var video_1 = $('#video1').offset().top;
        var video_2 = $('#video2').offset().top;
        var video1 = document.getElementById("video1")
        var video2 = document.getElementById("video2")
        var distance3 = distance + 250;
        var header_top = $('#header').offset().top + 60;
        if ((header_top + 300) > video_1 && header_top <= (video_1 + 50)) {

            video1.play()

        } else {
            video1.pause();
        }
        //  page 2///////
        if ((header_top + 300) > video_2 && header_top <= (video_2 + 50)) {

            video2.play()

        } else {
            video2.pause();
        }

        if (vitrihientai > 100) {
            $('#header').addClass('bg-active');
            $('#logo-header').addClass('active');
        }
        else {
            $('#header').removeClass('bg-active');
            $('#logo-header').removeClass('active');
        }
        if (vitrihientai > 300) {
            $('#to-top').addClass('active');
        }
        else {
            $('#to-top').removeClass('active');
        }


        // ////////////////////////////////////// animation 
        if (header_top >= distance && header_top < distance3) {
            $("#photo_animation").css("animation-play-state", "running");
            $(".app_provide .detail2").css("animation-play-state", "running");
        } else if (header_top >= distance3) {
            $(".app_provide .detail3").css("animation-play-state", "running");

        } else {
            $("#photo_animation").css("animation-play-state", "paused");
        }
        // /////
        if ((header_top < 200) && ($(window).width() > 1000)) {
            $("#logo-header").hide("slow")
        } else {
            $("#logo-header").show("slow")
        }
    });
    // //////////////////////////////////////////////////////////////
    //  bottom to top
    $("#to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    })
    // show togle menu for mobile app
    $("#icon_menu").click(function () {
        $("#menu_show").fadeToggle("slow");
    });
    $("#menu_show_icon_close").click(function () {

        $("#menu_show").fadeToggle("slow");

    })
    $('#icon_menu').click(function (event) {
        event.preventDefault();
        $('.container_header .sub_menu').addClass('active');
        $('#icon_menu_close').addClass('active');
    })

    $('#icon_menu_close').click(function (event) {
        event.preventDefault();
        $('.container_header .sub_menu').removeClass('active');
        $('#icon_menu_close').removeClass('active');
    })


    // video play
    $("#show_video_download").click(function () {
        $("#video").show();
    });

    $('.n1').click(function (event) {
        event.preventDefault();
        if ($('.sub_menu, #icon_menu_close').hasClass('active')) {
            $('.sub_menu, #icon_menu_close').removeClass('active');
        }
        $('html').animate({ scrollTop: $('#downloadId').offset().top }, 500);
    })
    $('.n2').click(function (event) {
        event.preventDefault();
        if ($('.sub_menu, #icon_menu_close').hasClass('active')) {
            $('.sub_menu, #icon_menu_close').removeClass('active');
        }
        $('html').animate({ scrollTop: $('#show').offset().top - 60 }, 500);
    })
    $('.n3').click(function (event) {
        event.preventDefault();
        if ($('.sub_menu, #icon_menu_close').hasClass('active')) {
            $('.sub_menu, #icon_menu_close').removeClass('active');
        }
        $('html').animate({ scrollTop: $('#contact-us').offset().top - 60 }, 500);
    })
});