$(document).ready(function () {

    var header_top = $('#header').offset().top + 60;
    console.log(header_top)
    

    if (header_top > 60) {
            $("#change-color ul li a").css("color", "#f39c12")

        }
    $(window).scroll(function () {

        var page1 = $('#page1').offset().top;
        var page2 = page1 + $("#page1").outerHeight(true);
        // var page3 = $('#page3').offset().top;
        var distance = $('#show').offset().top;
        // var download = $('#download').offset().top;
        // var video = $('#video').offset().top;
        var video_1 = $('#video1').offset().top;
    
        var video_2 = $('#video2').offset().top;
    
        // var video_3 = $('#video3').offset().top;
    
        // var video_main = document.getElementById("video")
        var video1 = document.getElementById("video1")
        var video2 = document.getElementById("video2")
        // var video3 = document.getElementById("video3")
        var distance3 = distance + 250;

        var header_top = $('#header').offset().top + 60;
   
        // if ((header_top + 200) > video && header_top <= (video + 100)) {

        //     video_main.play()

        // } else {
        //     video_main.pause();
        // }
        // /////// page 1
        if(header_top > 200 &&   $(window).width() > 1000){
            $("#logo-header").fadeIn("slow")

        }else if(  $(window).width() > 1000){
            $("#logo-header").fadeOut("slow")

        }

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
        // page 3 //////////
        // if ((header_top + 300) > video_3 && header_top <= (video_3 + 50)) {

        //     video3.play()

        // } else {
        //     video3.pause();
        // }
        // //////////////////////////////////////////////////////////////////////////////////////////////////// change background color for header
        if (header_top == 60) {
            $("#change-color ul li a").css("color", "white")

            $("#header").css("background", "none")
            
        } else if (1==1 |(header_top > 60 && header_top < distance) | (header_top >= page1 && header_top < page2 )) {
            $("#header").css("background-color", "white")
            $("#change-color ul li a").css("color", "#f39c12")
             
        } else if ((header_top >= distance && header_top  <= page1) | (header_top >= page2)) {
            $("#header").css("background-color", "#10102d")
        }

        // ////////////////////////////////////// animation 
        if (header_top >= distance && header_top < distance3) {
            $("#photo_animation").css("animation-play-state", "running")
            $(".app_provide .detail2").css("animation-play-state", "running")
        } else if (header_top >= distance3) {
            $(".app_provide .detail3").css("animation-play-state", "running")

        } else {
            $("#photo_animation").css("animation-play-state", "paused")
        }
    });
    // //////////////////////////////////////////////////////////////
    //  bottom to top
    $("#to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 2000);
    })
    // show togle menu for mobile app
    $("#icon_menu").click(function () {
        $("#menu_show").fadeToggle("slow")
    });
    $("#menu_show_icon_close").click(function () {
       
        $("#menu_show").fadeToggle("slow")

    })
  
    // 
    var page1 = $('#page1').offset().top;
        var page2 = page1 + $("#page1").outerHeight(true);
        // var page3 = $('#page3').offset().top;
        var distance = $('#show').offset().top;
        // var download = $('#download').offset().top;
        // var video = $('#video').offset().top;
        var video_1 = $('#video1').offset().top;
    
        var video_2 = $('#video2').offset().top;
    
        // var video_3 = $('#video3').offset().top;
    
        // var video_main = document.getElementById("video")
        var video1 = document.getElementById("video1")
        var video2 = document.getElementById("video2")
        // var video3 = document.getElementById("video3")
        var distance3 = distance + 250;

        var header_top = $('#header').offset().top + 60;
   
        // if ((header_top + 200) > video && header_top <= (video + 100)) {

        //     video_main.play()

        // } else {
        //     video_main.pause();
        // }
        // /////// page 1

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
        // page 3 //////////
        // if ((header_top + 300) > video_3 && header_top <= (video_3 + 50)) {

        //     video3.play()

        // } else {
        //     video3.pause();
        // }
        // //////////////////////////////////////////////////////////////////////////////////////////////////// change background color for header
        if (header_top == 60) {
            $("#change-color ul li a").css("color", "white")

            $("#header").css("background", "none")
            
        } else if ((header_top > 60 && header_top < distance) | (header_top >= page1 && header_top < page2 )) {
            $("#header").css("background-color", "white")
            $("#change-color ul li a").css("color", "#f39c12")
             
        } else if ((header_top >= distance && header_top  <= page1) | (header_top >= page2)) {
            $("#header").css("background-color", "#10102d")
        }

        // ////////////////////////////////////// animation 
        if (header_top >= distance && header_top < distance3) {
            $("#photo_animation").css("animation-play-state", "running")
            $(".app_provide .detail2").css("animation-play-state", "running")
        } else if (header_top >= distance3) {
            $(".app_provide .detail3").css("animation-play-state", "running")

        } else {
            $("#photo_animation").css("animation-play-state", "paused")
        }
});