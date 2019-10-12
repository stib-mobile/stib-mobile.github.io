
function getDeviceName() {
    var deviceName = '';

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        Datalogic: function () {
            return navigator.userAgent.match(/DL-AXIS/i);
        },
        Bluebird: function () {
            return navigator.userAgent.match(/EF500/i);
        },
        Honeywell: function () {
            return navigator.userAgent.match(/CT50/i);
        },
        Zebra: function () {
            return navigator.userAgent.match(/TC70|TC55/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Datalogic() || isMobile.Bluebird() || isMobile.Honeywell() || isMobile.Zebra() || isMobile.BlackBerry() || isMobile.Android() || isMobile.iOS() || isMobile.Windows());
        }
    };

    if (isMobile.Datalogic())
        deviceName = 'Datalogic';
    else if (isMobile.Bluebird())
        deviceName = 'Bluebird'; // android
    else if (isMobile.Honeywell())
        deviceName = 'Honeywell'; // android
    else if (isMobile.Zebra())
        deviceName = 'Zebra'; // android
    else if (isMobile.BlackBerry())
        deviceName = 'BlackBerry'; // android
    else if (isMobile.iOS())
        deviceName = 'iOS';
    else if ((deviceName == '') && (isMobile.Android()))
        deviceName = 'Android';
    else if ((deviceName == '') && (isMobile.Windows()))
        deviceName = 'Windows';



    return deviceName;
}
//    console.log(getDeviceName()) ;

function setDisplay() {
    var device = getDeviceName();

    // var device = 'iOS';
    // var device = 'Android';
    // var device = 'PC'
    if (device == 'iOS') { // tren iOS
        $('#android-mockup-img').css({ "display": "none" });
        $('#iphone-mockup-img').css({ "display": "inline" });
        $('.wrapper-content-animation').addClass('ios-display');

        $('.available-ios').addClass('ios-display');
        $('.wrapper-link-ios').addClass('ios-display');
        $('.wrapper-link-android').addClass('ios-display');
    }
    else if (device == 'Android') { // tren Android
        $('#android-mockup-img').css({ "display": "inline" });
        $('#iphone-mockup-img').css({ "display": "none" });

        $('.available-android').addClass('android-display');
        $('.wrapper-link-android').addClass('android-display');
        $('.wrapper-link-ios').addClass('android-display');
    }
    else { // tren PC, mac dinh hien thi ca hai
        $('#android-mockup-img').css({ "display": "inline" });
        $('#iphone-mockup-img').css({ "display": "none" });
    }
}

var db_vn = [
    { "header": ["TẢI XUỐNG", "TẠI SAO StiB?", "LIÊN HỆ"] },
    {
        "title":
            [
                "Cho giao dịch/vay mượn P2P trên hợp đồng thông minh StiB",
                "Không phí giao dịch",
                "Bảo vệ pháp lý",
                "Chia sẻ lợi nhuận",
                "Đơn giản và đẹp mắt với các tính năng tuyệt vời",
                "Hướng dẫn"]
    },
    {
        "about":
            ["Giới thiệu StiB App",
                "THIẾT KẾ, PHÁT TRIỂN VÀ PHI TẬP TRUNG CHO MỌI NGƯỜI VỚI NHỮNG TÍNH NĂNG ĐỘC NHẤT",

                "StiB P2P",
                "Cho vay và vay cũng như bảo hiểm và đầu tư với global P2P networks của chúng tôi",
                "Stib CHARITY",
                "Mục tiêu của chúng tôi là xây dựng một mô hình tự cung và tự cấp trong một cộng đồng được nhân rộng trên toàn cầu",
                "StiB REWARDS",
                "Tặng cho đối tác mã giảm giá và những phần thưởng qua những giao dịch như cho vay, vay, đầu tư,bảo hiểm...",
                "StiB AI",
                "Chúng tôi sẽ bắt đầu sử dụng Trí Tuệ Nhân Tạo với AI Chat để hỗ trợ giao dịch và cho vay", "TÌM HIỂU THÊM"]
    },
    {
        "why":
            ["TẠI SAO NÊN GIAO DỊCH/CHO VAY TRÊN HỢP ĐỒNG THÔNG MINH StiB?", "KHÔNG PHÍ GIAO DỊCH",
                "Luôn luôn miễn phí giao dịch với Hợp đồng thông minh StiB vì những rủi ro sẽ thuộc về bạn và những người khác!",
                "CHIA SẺ LỢI NHUẬN", "Chúng tôi chia sẻ lợi nhuận cũng như tiền lãi với StiB Reserves thông qua đối tác",
                "BẢO VỆ PHÁP LÝ", "Bảo vệ người giao dịch/khách hàng với StiB Legals bao gồm luật sư trong nước và quốc tế",
                "TIỆN LỢI", "Dễ sử dụng, giao diện đẹp mắt và có mặt trên 200 quốc gia với hơn 10 ngôn ngữ phổ biến"]
    },
    {
        "step":
            ["GIAO DỊCH P2P", "Bước", " Người bán gửi đến Hợp đồng Thông minh StiB (Không Escrow)", " Người mua gửi tiền",
                " Người bán giải phóng", "VAY MƯỢN P2P", " Người vay gửi tiền đến Hợp đồng Thông minh StiB (Không Tài sản thế chấp)",
                " Người cho vay gửi khoản vay", " Người vay trả tiền vay", " Người cho vay giải phóng",
                "LIÊN HỆ", "ĐIỀU KHOẢN", "BẢO MẬT"]
    }];

var db_en = [
    { "header": ["DOWNLOAD", "WHY StiB?", "CONTACT US"] },
    {
        "title":
            [
                "Trading/Lending P2P on StiB's smart contracts",
                "Commissions FREE",
                "Legal Protections",
                "Profit Sharing",
                "Simple & beautiful with amazing features.",
                "instructions"]
    },
    {
        "about":
            ["About StiB Apps",
                "DESIGNED, DEVELOPED AND DECENTRALIZED FOR EVERYONE WITH UNIQUE FEATURES",

                "StiB P2P",
                "For trading and lending as well as insuring and investing with our global P2P networks",
                "Stib CHARITY",
                "The goal is to build a self-sustainable and self-sufficient model of an amazing community to be replicated globally",
                "StiB REWARDS",
                "For spending at our partners on deep discounts and earn rewards through your trading, lending, investing, insuring, etc ...",
                "StiB AI",
                "We will initially begin Artificial Intelligence with AI Chat to assist with trading and lending",
                "LEARN MORE"]
    },
    {
        "why":
            ["WHY TRADING/LENDING WITH StiB'S SMART CONTRACTS ?",
                "COMMISSIONS FREE",
                "Always commissions free Escrow with StiB's Smart Contracts since the risks will be on you with other peers!",
                "PROFIT SHARING",
                "We are sharing the profits as well as interests with StiB Reserves.",
                "LEGAL PROTECTIONS",
                "Protect traders/clients with StiB Legals comprised of local lawyers internationally",
                "CONVENIENCE", 
                "Easy to use, beautiful UI/UX & available 200+ countries + 10 most popular languages"]
    },
    {
        "step":
            ["TRADING P2P", "Step", " Seller Deposits to StiB's Smart Contracts. (Free Escrow)", " Buyer Marks as paid",
                " Seller Releases.", "LENDING P2P", " Borrower Deposits to StiB's Smart Contracts. (Free Collateral)",
                " Lender Sends the loan.", " Borrower Repays the loan.", "Lender Releases.",
                "CONTACT US", "ToS", "PRIVACY"]
    }];


var db = db_en;



function body(db) {
    var body_vn =
        `	<div class="header" id="header">
        <div class="container_header  d-flex flex-row align-items-center justify-content-space-between ">
            <div class="logo" id="logo-header">
                <a href="https://stib.co/">
                    <img src="images/svg/logo.svg" style="width: auto; height: 40px" />
                </a>
            </div>
            <div></div>
            <!-- icon for reponsive mobile open menu -->
            <div id="icon_menu">
                <i class="fas fa-bars fa-2x" style="color: #ff9f1a; font-size: 20px;" id="icon_menu1"></i>
            </div>
            <div id="icon_menu_close">
                <img src="images/svg/cross-out.svg" alt="" class="img-fluid">
            </div>
            <!-- menu -->
            <div class="sub_menu" id="change-color">
                <ul>
                    <li><a href="#" class="n1">`+ db[0].header[0] + `</a> </li>
                    <li><a href="#" class="n2">`+ db[0].header[1] + `</a></li>
                    <li><a href="#" class="n3">`+ db[0].header[2] + `</a></li>
                </ul>
            </div>

        </div>
    </div>
    <!-- end of header -->
    <!-- /////////////////////////////////////////////////////////// -->
    <!-- introduce StiB APP -->
    <div id="downloadId" class="main_app d-flex flex-row justify-content-center align-items-center">
        <div class="container">
            <div class="box row">
                <div class="app_sub col-lg-6 col-md-6 col-12">
                    <div class="circle">
                        <div class="circle1"><img src="images/svg/logo.svg" alt=""></div>
                    </div>
                    <h1 class="line-after">Simply a better digital
                        exchange</h1>
                    <p class="sub-title" style="color: #333; font-style: italic; font-weight: bold;">`+
                        db[1].title[0] + `</p>
                    <ul class="list-service">
                        <li><i class="fas fa-check"></i> <span>`+ db[1].title[1] + `</span></li>
                        <li><i class="fas fa-check"></i> <span>`+ db[1].title[2] + `</span></li>
                        <li><i class="fas fa-check"></i> <span>`+ db[1].title[3] + `</span></li>
                        <li><i class="fas fa-check"></i> <span>`+ db[1].title[4] + `</span></li>
                    </ul>
                    <div class="store d-flex flex-column">
                        <div class="androi" style="margin-bottom: 60px">
                            <div class="wrapper-link-android">
                                <a
                                    href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40stiblabs2019/stib-p2p-5fd62ca8db994bddb5a4f848e0905a10-signed.apk">
                                    <img class="btn-android" width="200" height="auto"
                                        src="images/background/apk-androi.png">
                                    <img class="btn-android-hover" width="200" height="auto"
                                        src="images/background/apk-androi-hover.png">
                                </a>
                                <div class="wrapper btn-video">
                                    <button type="button" class="video-btn rounded-circle" data-toggle="modal"
                                        data-target="#modelId">
                                        <i class="fas fa-play"></i>
                                        <div>
                                            <p class="tooltip-video">`+ db[1].title[5] + `</p>
                                        </div>
                                    </button>
                                </div>
                                <div class="qr-wrapper">
                                    <img src="images/background/apk.png" alt="" class="img-fluid">
                                </div>
                            </div>

                            <div class="wrapper-link-ios" style="position: relative;">
                                <a
                                    href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/ios/%40stiblabs2019/stib-p2p-581382fa-7eca-41f5-abf3-98e1eabe3f33-archive.ipa">
                                    <img class="btn-ios" width="200" height="auto"
                                        src="images/background/apk-ios.png">
                                    <img class="btn-ios-hover" width="200" height="auto"
                                        src="images/background/apk-ios-hover.png">
                                </a>
                                <div class="wrapper btn-video">
                                    <button type="button" class="video-btn rounded-circle" data-toggle="modal"
                                        data-target="#modelId">
                                        <i class="fas fa-play"></i>
                                        <div>
                                            <p class="tooltip-video">`+ db[1].title[5] + `</p>
                                        </div>
                                    </button>
                                </div>
                                <div class="qr-wrapper">
                                    <img src="images/background/ipa.png" alt="" class="img-fluid">
                                </div>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="modelId" tabindex="-1" role="dialog"
                                aria-labelledby="modelTitleId" aria-hidden="true">

                                <div class="modal-dialog d-flex align-items-center" role="document">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="wrapper-video-tut">
                                                <!-- <iframe id="source-video" width="310" height="676"
                                                    src="https://www.youtube.com/embed/33-3rpzB29s?playlist=33-3rpzB29s&controls=0&mute=1&autoplay=1&loop=1&modestbranding=1&rel=0"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen></iframe> -->
                                                    <video id="video-tut" autoplay muted loop>
                                                        <source src="images/video/download-apk.mp4" type = "video/mp4">
                                                        This browser doesn't support video tag.
                                                    </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="available-ios">
                            <p>Also available on Android!</p>
                        </div>
                        <div class="available-android">
                            <p>Also available on iOS!</p>
                        </div>

                    </div>
                </div>
                <div class="app_photo col-lg-6 col-md-6 col-12">
                    <!-- <img src="images/background/phone.png" style="width:60% ; height: 60%" /> -->
                    <div class="wrapper-animation-banner">
                        <div class="background-animation">
                            <img id="android-mockup-img" src="images/background/android-mockup.png"
                                style="width:270px; height: auto;" />
                            <img id="iphone-mockup-img" src="images/background/iphone-mockup.png"
                                style="width:270px; height: auto;" />
                        </div>
                        <div class="wrapper-content-animation">
                            <div class="wrapper-slide android-animation">
                                <div id="slideItemBanner" class="carousel slide" data-ride="carousel"
                                    data-interval="2000">
                                    <div class="carousel-inner" role="listbox">
                                        <div class="carousel-item active">
                                            <img src="images/background/1.jpg" class="img-fluid" alt="First slide">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="images/background/2.jpg" class="img-fluid" alt="Second slide">
                                        </div>
                                        <div class="carousel-item last-item-carousel">
                                            <img src="images/background/3.jpg" class="img-fluid" alt="Third slide">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>
    <!-- end of Stib APP -->
    <!-- //////////////////////////////////////////////////////////////////// -->
    <!-- about app -->
    <div class="about_app">
        <div class="section-title">
            <span class="subtitle line-after">`+ db[2].about[0] + `</span>
            <h1 class="title">`+ db[2].about[1] + `</h1>
        </div>
        <div class="content d-flex justify-content-center container">
            <ul class="row  ">
                <li class="col-md-6 col-lg-3">
                    <div class="icon">
                        <img src="images/background/p2p.png" />
                    </div>
                    <div>
                        <h4>S<span style="text-transform: lowercase!important;">ti</span>B P2P</h4>
                        <p>`+ db[2].about[3] + `<br>&emsp;</p>
                    </div>
                    <div class="learn-more">
                        <a href="http://charity.stib.co" target="_blank"> `+ db[2].about[10] + `</a>
                    </div>
                </li>
                <li class="col-md-6 col-lg-3">
                    <div class="icon">
                        <img src="images/background/charity (1).png" />
                    </div>
                    <div>
                        <h4>S<span style="text-transform: lowercase!important;">ti</span>B Charity</h4>
                        <p>`+ db[2].about[5] + `</p>
                    </div>
                    <div class="learn-more">
                        <a href="http://charity.stib.co" target="_blank"> `+ db[2].about[10] + `</a>
                    </div>
                </li>
                <li class="col-md-6 col-lg-3">
                    <div class="icon">
                        <img src="images/background/12.png" />
                    </div>
                    <div>
                        <h4>S<span style="text-transform: lowercase!important;">ti</span>B Rewards</h4>
                        <p>`+ db[2].about[7] + `</p>
                    </div>
                    <div class="learn-more">
                        <a href="http://charity.stib.co" target="_blank"> `+ db[2].about[10] + `</a>
                    </div>
                </li>
                <li class="col-md-6 col-lg-3">
                    <div class="icon">
                        <img src="images/background/AI.png" />
                    </div>
                    <div>
                        <h4>S<span style="text-transform: lowercase!important;">ti</span>B AI</h4>
                        <p>`+ db[2].about[9] + `<br>&emsp;</p>
                    </div>
                    <div class="learn-more">
                        <a href="http://charity.stib.co" target="_blank"> `+ db[2].about[10] + `</a>
                    </div>
                </li>
            </ul>

        </div>
    </div>
    <!-- why choose Stib App -->
    <div class="app_provide " id="show">
        <div class="section-title">
            <span class="subtitle line-after">"We decentralize and leave no one behind!"</span>
            <h1 class="title">`+ db[3].why[0] + `</h1>
        </div>
        <div class=" container ">
            <div class="app_reason row ">
                <div class="reason_one col-xl-4 col-md-12">
                    <div class="detail detail2">
                        <div class="icon">
                            <img src="images/background/exchange.png" />
                        </div>
                        <div class="content">
                            <h3>`+ db[3].why[1] + `</h3>
                            <h4>`+ db[3].why[2] + `</h4>
                        </div>
                    </div>
                    <div class="detail detail3">
                        <div class="icon">
                            <img src="images/background/money.png" />
                        </div>
                        <div class="content">
                            <h3>`+ db[3].why[3] + `</h3>
                            <h4>`+ db[3].why[4] + `
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="photo d-flex align-items-center justify-content-center col-xl-4 col-md-9"
                    id="photo_animation">
                    <img src="images/background/phone2.png" />
                </div>
                <div class="reason_two col-xl-4 col-md-12">
                    <div class="detail detail2">
                        <div class="icon">
                            <img src="images/background/law.png" />
                        </div>
                        <div class="content">
                            <h3>`+ db[3].why[5] + `</h3>
                            <h4>`+ db[3].why[6] + `<br>
                                &nbsp
                            </h4>
                        </div>
                    </div>
                    <div class="detail detail3">
                        <div class="icon">
                            <img src="images/background/global.png" />
                        </div>
                        <div class="content">
                            <h3>`+ db[3].why[7] + `</h3>
                            <h4>`+ db[3].why[8] + `
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
    <!-- end of choose Stib app -->

    <!-- download -->
    <div class="dowload">
        <!-- how to use app -->
        <!-- /////////////////////////////////////////////////////////////// -->
        <div>
            <!-- page 1 -->
            <div class="container">
                <div class="page1 row align-items-center justify-content-center" id="page1">
                    <div class="title col-lg-6 col-md-12">
                        <h1 class="line-after">`+ db[4].step[0] + `</h1>
                        <ul>
                            <li>
                                <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                        1:</span> ` + db[4].step[2] + `</span>

                                <span class="check-icon"><i class="fas fa-check"></i></span>
                            </li>
                            <li>
                                <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                        2:</span>` + db[4].step[3] + `</span>

                                <span class="check-icon"><i class="fas fa-check"></i></span>
                            </li>
                            <li>
                                <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                        3:</span>` + db[4].step[4] + `</span>
                                <span class="check-icon"><i class="fas fa-check"></i></span>
                            </li>

                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="wrapper-video-trading">

                            <div class="modal-dialog d-flex align-items-center">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <div class="wrapper-video-tut">
                                            <!-- <iframe id="source-video" width="310" height="676"
                                                src="https://www.youtube.com/embed/39i75VxFFh0?playlist=39i75VxFFh0&controls=0&mute=1&autoplay=1&loop=1&modestbranding=1&rel=0"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe> -->
                                            <video id="video-trade" muted loop>
                                                <source src="images/video/buy-apk.mp4" type = "video/mp4">
                                                <source src="images/video/sell-apk.mp4" type = "video/mp4">
                                                This browser doesn't support video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <!-- end page 1 -->
            <!-- ............................. -->
            <!-- page 2 -->
            <div id="page2Id" style="background-color: #191919;">
                <div class="container">
                    <div class="page2 row d-flex flex-row justify-content-center align-items-center" id="page2">
                        <div class="col-lg-6 col-md-12">
                            <div class="wrapper-video-trading">
                                <div class="modal-dialog d-flex align-items-center">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <div class="wrapper-video-tut">
                                                <!-- <iframe id="source-video" width="310" height="676"
                                                    src="https://www.youtube.com/embed/9uH_2BiTBIo?playlist=9uH_2BiTBIo&controls=0&mute=1&autoplay=1&loop=1&modestbranding=1&rel=0"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen></iframe> -->
                                                <video id="video-lend" muted loop>
                                                    <source src="images/video/loan-apk.mp4" type = "video/mp4">
                                                    <source src="images/video/borrow-apk.mp4" type = "video/mp4">
                                                    This browser doesn't support video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="title col-lg-6 col-md-12 text-left">
                            <h1 class="line-after2">`+ db[4].step[5] + `</h1>
                            <ul>
                                <li>
                                    <span class="check-icon"><i class="fas fa-check"></i></span>
                                    <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                            1:</span>` + db[4].step[6] + `</span>
                                </li>
                                <li>
                                    <span class="check-icon"><i class="fas fa-check"></i></span>
                                    <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                            2:</span> ` + db[4].step[7] + `</span>

                                </li>
                                <li>
                                    <span class="check-icon"><i class="fas fa-check"></i></span>
                                    <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                            3:</span>` + db[4].step[8] + `</span>

                                </li>
                                <li>
                                    <span class="check-icon"><i class="fas fa-check"></i></span>
                                    <span class="text-page"><span style="font-weight: bold;">`+ db[4].step[1] + `
                                            4:</span>` + db[4].step[9] + `</span>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of page 2 -->

        </div>
        <!-- end of how to use app -->
    </div>

    <!-- end of how app work -->

    <div id="contact-us" class="pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                    <h1 class="line-after">`+ db[4].step[10] + `</h1>
                </div>
                <div class="col-lg-8 col-md-8 col-12">
                    <div class="wrapper-content-contact d-flex align-items-center">
                        <div class="row w-100 mx-auto">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="info-contact">
                                    <img src="images/svg/phone-call.svg" alt="lostimg" class="icon-contact">
                                    <span style="color: #333;"> <span>(+1)</span>(617) 863&minus;7286</span>
                                </div>
                                <div class="info-contact mb-0">
                                    <img src="images/svg/envelope.svg" alt="lostimg" class="icon-contact">
                                    <span>Support AT StiB.co</span>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="info-contact">
                                    <img src="images/svg/world.svg" alt="lostimg" class="icon-contact">
                                    <span><a href="https://stib.co/" class="link-contact" target="_blank">
                                            StiB.co</a></span>
                                </div>
                                <div class="info-contact mb-0">
                                    <img src="images/svg/address.svg" alt="lostimg" class="icon-contact">
                                    <span>Boston, MA, USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- //////////////////////////////////////////////////////////////////////// -->
    <div class="bottom">
        <ul>
            <li><a href="https://www.facebook.com/StiBLabs/" class="facebook" target="_blank">
                </a></li>
            <li> <a href="https://twitter.com/StiBLabs" class="twitter" target="_blank"></a> </li>
            <li><a href="https://www.linkedin.com/company/stib-labs" class="linkedin" target="_blank"></a>
            </li>
            <li><a href="https://t.me/stibeng" class="telegram" target="_blank"></a></li>
        </ul>
        <div class="bt_title">
            <span style="border: none">© StiB Labs 2014-2140, All Rights Reserved</span>
            <span> <a href="https://stib.co/index.php?showpage=terms">`+ db[4].step[11] + `</a> </span>
            <span> <a href="https://stib.co/index.php?showpage=privacy">`+ db[4].step[12] + `</a> </span>
        </div>
    </div>` ;
    return body_vn;
};
$("#body_content").empty().html(body(db));
setDisplay();
$("#btnEngLang").click(function () {
    let db = db_en;
    $("#body_content").empty().html(body(db));
    setDisplay();
});
$("#btnVnLang").click(function () {
    let db = db_vn;
    $("#body_content").empty().html(body(db));
    setDisplay();
});

