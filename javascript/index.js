$(document).ready(function () {
    function getDeviceName () {
        var deviceName = '';
    
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            Datalogic: function() {
                return navigator.userAgent.match(/DL-AXIS/i);
            },
            Bluebird: function() {
                return navigator.userAgent.match(/EF500/i);
            },
            Honeywell: function() {
                return navigator.userAgent.match(/CT50/i);
            },
            Zebra: function() {
                return navigator.userAgent.match(/TC70|TC55/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
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
   console.log(getDeviceName()) ;
   
   function setDisplay(){
        // var device = getDeviceName();
        // var device = 'iOS';
        var device = 'Android';
        if(device == 'iOS'){ // tren iOS
            $('#android-mockup-img').css({"display": "none"});
            $('#iphone-mockup-img').css({"display": "inline"});
            $('.wrapper-content-animation').addClass('ios-display');
            
            $('.available-ios').addClass('ios-display');
            $('.wrapper-link-ios').addClass('ios-display');
        }
        else if(device == 'Android'){ // tren Android
            $('#android-mockup-img').css({"display": "inline"});
            $('#iphone-mockup-img').css({"display": "none"});

            $('.available-android').addClass('android-display');
            $('.wrapper-link-android').addClass('android-display');
        }
        else { // tren PC, mac dinh hien thi ca hai
            $('#android-mockup-img').css({"display": "inline"});
            $('#iphone-mockup-img').css({"display": "none"});
        }
   }
   setDisplay();
  var english = `<div id="english" >
  <!-- start  header  -->
  <div class="header" id="header">
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
                  <li><a href="#" class="n1">DOWNLOAD</a> </li>
                  <li><a href="#" class="n2">SERVICES</a></li>
                  <li><a href="#" class="n3">CONTACT</a></li>
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
                      <div class="circle1"><img src="images/svg/logo.svg" alt="">
                      </div>
                  </div>
                  <h1 class="line-after">Simply a better digital
                      exchange</h1>
                  <p class="sub-title" style="color: #333; font-style: italic; font-weight: bold;">Trading/Lending
                      P2P on StiB's smart contracts</p>
                  <ul class="list-service">
                      <li><i class="fas fa-check"></i> <span>Commissions FREE</span></li>
                      <li><i class="fas fa-check"></i> <span>Legal Protections</span></li>
                      <li><i class="fas fa-check"></i> <span>Profit Sharing</span></li>
                      <li><i class="fas fa-check"></i> <span>Simple & beautiful with amazing features.</span></li>
                  </ul>
                  <div class="store d-flex flex-column">
                      <div class="androi" style="margin-bottom: 60px">
                          <div class="wrapper-link-android">
                              <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40stiblabs2019/stib-p2p-5fd62ca8db994bddb5a4f848e0905a10-signed.apk">
                                  <img width="200" height="auto" src="images/background/apk-androi.png">
                              </a>
                              <div class="wrapper btn-video">
                                  <button type="button" class="video-btn rounded-circle" data-toggle="modal"
                                      data-target="#modelId">
                                      <i class="fas fa-play"></i>
                                      <div>
                                          <p class="tooltip-video">Instructions</p>
                                      </div>
                                  </button>
                              </div>
                              <div class="qr-wrapper">
                                  <img src="images/background/apk.png" alt="" class="img-fluid">
                              </div>
                          </div>

                          <div class="wrapper-link-ios" style="position: relative;">
                              <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/ios/%40stiblabs2019/stib-p2p-581382fa-7eca-41f5-abf3-98e1eabe3f33-archive.ipa">
                                  <img width="200" height="auto" src="images/background/apk-ios.png">
                              </a>
                              <div class="wrapper btn-video">
                                  <button type="button" class="video-btn rounded-circle" data-toggle="modal"
                                      data-target="#modelId">
                                      <i class="fas fa-play"></i>
                                      <div>
                                          <p class="tooltip-video">Instructions</p>
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
                                              <iframe id="source-video" width="310" height="676"
                                                  src="https://www.youtube.com/embed/D-vcQlFGZq0?playlist=D-vcQlFGZq0&controls=0&mute=1&autoplay=1&loop=1"
                                                  frameborder="0"
                                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                  allowfullscreen></iframe>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>

                      </div>

                  </div>
              </div>
              <div class="app_photo col-lg-6 col-md-6 col-12">
                  <!-- <img src="images/background/phone.png" style="width:60% ; height: 60%" /> -->
                  <div class="wrapper-animation-banner">
                      <div class="background-animation">
                          <img id="android-mockup-img" src="images/background/android-mockup.png" style="width:270px; height: auto;" />
                          <!-- <img id="iphone-mockup-img" style="opacity: 0; visibility: hidden; display: none;" src="images/background/iphone-mockup.png" style="width:60% ; height: auto;" /> -->
                      </div>
                      <div class="wrapper-content-animation">
                          <div class="wrapper-slide android-animation">
                              <div id="slideItemBanner" class="carousel slide" data-ride="carousel" data-interval="2000">
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
          <span class="subtitle line-after">About S<span style="text-transform: lowercase!important;">ti</span>B
              app<span style="text-transform: lowercase!important;">s</span></span>
          <h1 class="title">Designed, Developed and Decentralized for everyone with unique features</h1>
      </div>
      <div class="content d-flex justify-content-center container">
          <ul class="row  ">
              <li class="col-md-6 col-lg-3">
                  <div class="icon">
                      <img src="images/background/p2p.png" />
                  </div>
                  <div>
                      <h4>S<span style="text-transform: lowercase!important;">ti</span>B P2P</h4>
                      <p>For trading and lending as well as insuring and investing with our global P2P
                          networks<br>&emsp;</p>
                  </div>
                  <div class="learn-more">
                      <a href="http://charity.stib.co" target="_blank"> Learn more</a>
                  </div>
              </li>
              <li class="col-md-6 col-lg-3">
                  <div class="icon">
                      <img src="images/background/charity (1).png" />
                  </div>
                  <div>
                      <h4>S<span style="text-transform: lowercase!important;">ti</span>B Charity</h4>
                      <p>The goal is to build a self-sustainable and self-sufficient model of an amazing community
                          to be replicated globally</p>
                  </div>
                  <div class="learn-more">
                      <a href="http://charity.stib.co" target="_blank"> Learn more</a>
                  </div>
              </li>
              <li class="col-md-6 col-lg-3">
                  <div class="icon">
                      <img src="images/background/12.png" />
                  </div>
                  <div>
                      <h4>S<span style="text-transform: lowercase!important;">ti</span>B Rewards</h4>
                      <p>For spending at our partners on deep discounts and earn rewards through your
                          trading, lending, investing, insuring, etc ...</p>
                  </div>
                  <div class="learn-more">
                      <a href="http://charity.stib.co" target="_blank"> Learn more</a>
                  </div>
              </li>
              <li class="col-md-6 col-lg-3">
                  <div class="icon">
                      <img src="images/background/AI.png" />
                  </div>
                  <div>
                      <h4>S<span style="text-transform: lowercase!important;">ti</span>B AI</h4>
                      <p>We will initially begin Artificial Intelligence with AI Chat to assist with trading and
                          lending<br>&emsp;</p>
                  </div>
                  <div class="learn-more">
                      <a href="http://charity.stib.co" target="_blank"> Learn more</a>
                  </div>
              </li>
          </ul>

      </div>
  </div>
  <!-- why choose Stib App -->
  <div class="app_provide " id="show">
      <div class="section-title">
          <span class="subtitle line-after">"We decentralize and leave no one behind!"</span>
          <h1 class="title">WHY TRADING/LENDING WITH S<span
                  style="text-transform: lowercase!important;">ti</span>B's SMART CONTRACTS</h1>
      </div>
      <div class=" container ">
          <div class="app_reason row ">
              <div class="reason_one col-xl-4 col-md-12">
                  <div class="detail detail2">
                      <div class="icon">
                          <img src="images/background/exchange.png" />
                      </div>
                      <div class="content">
                          <h3>Commissions Free</h3>
                          <h4>Always commissions free Escrow with StiB's Smart Contracts since the risks will be
                              on you
                              with other peers!</h4>
                      </div>
                  </div>
                  <div class="detail detail3">
                      <div class="icon">
                          <img src="images/background/money.png" />
                      </div>
                      <div class="content">
                          <h3>Profit sharing</h3>
                          <h4>We are sharing the profits as well as interests with StiB Reserves through our
                              partners
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
                          <h3>Legal Protections</h3>
                          <h4>Protect traders/clients with StiB Legals comprised of local lawyers
                              internationally<br>
                              &nbsp
                          </h4>
                      </div>
                  </div>
                  <div class="detail detail3">
                      <div class="icon">
                          <img src="images/background/global.png" />
                      </div>
                      <div class="content">
                          <h3>Convenience</h3>
                          <h4>Easy to use, beautiful UI/UX and available 200<sup>+</sup> countries + 10 most
                              popular
                              languages
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
                      <h1 class="line-after">Trading P2P</h1>
                      <ul>
                          <li>
                              <span class="text-page"><span style="font-weight: bold;">Step 1:</span> Seller
                                  Deposits to StiB's Smart Contracts. (Free Escrow)</span>

                              <span class="check-icon"><i class="fas fa-check"></i></span>
                          </li>
                          <li>
                              <span class="text-page"><span style="font-weight: bold;">Step 2:</span> Buyer Marks
                                  as paid.</span>

                              <span class="check-icon"><i class="fas fa-check"></i></span>
                          </li>
                          <li>
                              <span class="text-page"><span style="font-weight: bold;">Step 3:</span> Seller
                                  Releases.</span>
                              <span class="check-icon"><i class="fas fa-check"></i></span>
                          </li>

                      </ul>
                  </div>
                  <div class="col-lg-6 col-md-12">
                      <div class="wrapper-video-trading">
                          <div class="mockup-iphone">
                              <div class="top-left-hide hide-corner"></div>
                              <div class="top-right-hide hide-corner"></div>
                              <div class="bottom-left-hide hide-corner"></div>
                              <div class="bottom-right-hide hide-corner"></div>
                              <img src="images/video/mockupIphone.png" alt="" class="img-fluid">
                          </div>
                          <video class="video" loop="-1" width="30%" height="500px" id="video1" muted>
                              <source src="images/video/videoplayback.mp4" type="video/mp4">
                              <!-- <source src="images/video/huongdan.ogg" type="video/ogg">
                          <source src="images/video/huongdan.webm" type="video/webm"> -->
                          </video>
                      </div>
                  </div>

              </div>
          </div>

          <!-- end page 1 -->
          <!-- ............................. -->
          <!-- page 2 -->
          <div style="background-color: #191919;">
              <div class="container">
                  <div class="page2 row d-flex flex-row justify-content-center align-items-center" id="page2">
                      <div class="col-lg-6 col-md-12">
                          <div class="wrapper-video-trading">
                              <div class="mockup-iphone">
                                  <div class="top-left-hide hide-corner" style="background: #191919"></div>
                                  <div class="top-right-hide hide-corner" style="background: #191919"></div>
                                  <div class="bottom-left-hide hide-corner" style="background: #191919"></div>
                                  <div class="bottom-right-hide hide-corner" style="background: #191919"></div>
                                  <img src="images/video/mockupIphone.png" alt="" class="img-fluid">
                              </div>
                              <video class="video" loop="-1" width="30%" height="500px" id="video2" muted>
                                  <source src="images/video/videoplayback2.mp4" type="video/mp4">
                                  <!-- <source src="images/video/huongdan.ogg" type="video/ogg">
                              <source src="images/video/huongdan.webm" type="video/webm"> -->
                              </video>
                          </div>
                      </div>

                      <div class="title col-lg-6 col-md-12 text-left">
                          <h1 class="line-after2">Lending P2P</h1>
                          <ul>
                              <li>
                                  <span class="check-icon"><i class="fas fa-check"></i></span>
                                  <span class="text-page"><span style="font-weight: bold;">Step 1:</span> Borrower
                                      Deposits to StiB's
                                      Smart Contracts. (Free Collateral)</span>
                              </li>
                              <li>
                                  <span class="check-icon"><i class="fas fa-check"></i></span>
                                  <span class="text-page"><span style="font-weight: bold;">Step 2:</span> Lender
                                      Sends the loan.</span>

                              </li>
                              <li>
                                  <span class="check-icon"><i class="fas fa-check"></i></span>
                                  <span class="text-page"><span style="font-weight: bold;">Step 3:</span> Borrower
                                      Repays the loan.</span>

                              </li>
                              <li>
                                  <span class="check-icon"><i class="fas fa-check"></i></span>
                                  <span class="text-page"><span style="font-weight: bold;">Step 4:</span> Lender
                                      Releases.</span>

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
                  <h1 class="line-after">Contact Us</h1>
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
          <span> <a href="https://stib.co/index.php?showpage=terms">ToS</a> </span>
          <span> <a href="https://stib.co/index.php?showpage=privacy">PRIVACY</a> </span>
      </div>
  </div>

  </div>`;
  var vietnamese = `<div id="vietnamese" >
  <!-- start  header  -->
  <div class="header" id="header">
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
                  <li><a href="#" class="n1">TẢI XUỐNG</a> </li>
                  <li><a href="#" class="n2">DỊCH VỤ</a></li>
                  <li><a href="#" class="n3">LIÊN HỆ</a></li>
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
                      <div class="circle1"><img src="images/svg/logo.svg" alt="">
                      </div>
                  </div>
                  <h1 class="line-after">Simply a better digital
                      exchange</h1>
                  <p class="sub-title" style="color: #333; font-style: italic; font-weight: bold;">Giao dịch/Vay mượn P2P trên hợp đồng thông minh StiB</p>
                  <ul class="list-service">
                      <li><i class="fas fa-check"></i> <span>Miễn phí giao dịch</span></li>
                      <li><i class="fas fa-check"></i> <span>Bảo vệ pháp lý</span></li>
                      <li><i class="fas fa-check"></i> <span>chia sẻ lợi nhuận</span></li>
                      <li><i class="fas fa-check"></i> <span>Đơn giản và đẹp mắt với các tính năng tuyệt vời.</span></li>
                  </ul>
                  <div class="store d-flex flex-column">
                      <div class="androi" style="margin-bottom: 60px">
                          <div class="wrapper-link-android">
                              <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40stiblabs2019/stib-p2p-5fd62ca8db994bddb5a4f848e0905a10-signed.apk">
                                  <img width="200" height="auto" src="images/background/apk-androi.png">
                              </a>
                              <div class="wrapper btn-video">
                                  <button type="button" class="video-btn rounded-circle" data-toggle="modal"
                                      data-target="#modelId">
                                      <i class="fas fa-play"></i>
                                      <div>
                                          <p class="tooltip-video">Instructions</p>
                                      </div>
                                  </button>
                              </div>
                              <div class="qr-wrapper">
                                  <img src="images/background/apk.png" alt="" class="img-fluid">
                              </div>
                          </div>

                          <div class="wrapper-link-ios" style="position: relative;">
                              <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/ios/%40stiblabs2019/stib-p2p-581382fa-7eca-41f5-abf3-98e1eabe3f33-archive.ipa">
                                  <img width="200" height="auto" src="images/background/apk-ios.png">
                              </a>
                              <div class="wrapper btn-video">
                                  <button type="button" class="video-btn rounded-circle" data-toggle="modal"
                                      data-target="#modelId">
                                      <i class="fas fa-play"></i>
                                      <div>
                                          <p class="tooltip-video">Instructions</p>
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
                                              <iframe id="source-video" width="310" height="676"
                                                  src="https://www.youtube.com/embed/D-vcQlFGZq0?playlist=D-vcQlFGZq0&controls=0&mute=1&autoplay=1&loop=1"
                                                  frameborder="0"
                                                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                  allowfullscreen></iframe>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>

                      </div>

                  </div>
              </div>
              <div class="app_photo col-lg-6 col-md-6 col-12">
                  <!-- <img src="images/background/phone.png" style="width:60% ; height: 60%" /> -->
                  <div class="wrapper-animation-banner">
                      <div class="background-animation">
                          <img id="android-mockup-img" src="images/background/android-mockup.png" style="width:270px; height: auto;" />
                          <!-- <img id="iphone-mockup-img" style="opacity: 0; visibility: hidden; display: none;" src="images/background/iphone-mockup.png" style="width:60% ; height: auto;" /> -->
                      </div>
                      <div class="wrapper-content-animation">
                          <div class="wrapper-slide android-animation">
                              <div id="slideItemBanner" class="carousel slide" data-ride="carousel" data-interval="2000">
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
          <span class="subtitle line-after">Giới thiệu S<span style="text-transform: lowercase!important;">ti</span>B
              app<span style="text-transform: lowercase!important;">s</span></span>
          <h1 class="title">THIẾT KẾ, PHÁT TRIỂN VÀ PHI TẬP TRUNG CHO MỌI NGƯỜI VỚI NHỮNG TÍNH NĂNG ĐỘC NHẤT</h1>
      </div>
      <div class="content d-flex justify-content-center container">
          <ul class="row  ">
              <li class="col-md-6 col-lg-3">
                  <div class="icon">
                      <img src="images/background/p2p.png" />
                  </div>
                  <div>
                      <h4>S<span style="text-transform: lowercase!important;">ti</span>B P2P</h4>
                      <p>Cho phép giao dịch và vay mượn cũng như bảo hiểm và đầu tư với global P2P networks của chúng tôi<br>&emsp;</p>
                  </div>
                  <div class="learn-more">
                      <a href="http://charity.stib.co" target="_blank">Tìm hiểu thêm</a>
                  </div>
              </li>
              <li class="col-md-6 col-lg-3">
                  <div class="icon">
                      <img src="images/background/charity (1).png" />
                  </div>
                  <div>
                      <h4>S<span style="text-transform: lowercase!important;">ti</span>B Charity</h4>
                      <p>Mục tiêu của chúng tôi là xây dựng một mô hình tự cung và tự cấp trong một cộng đồng được nhân rộng trên toàn cầu</p>
                  </div>
                  <div class="learn-more">
                      <a href="http://charity.stib.co" target="_blank">Tìm hiểu thêm</a>
                  </div>
              </li>
              <li class="col-md-6 col-lg-3">
                  <div class="icon">
                      <img src="images/background/12.png" />
                  </div>
                  <div>
                      <h4>S<span style="text-transform: lowercase!important;">ti</span>B Rewards</h4>
                      <p>Tặng cho đối tác mã giảm giá và những phần thưởng qua những giao dịch như cho vay, vay, đầu tư, bảo hiểm...</p>
                  </div>
                  <div class="learn-more">
                      <a href="http://charity.stib.co" target="_blank">Tìm hiểu thêm</a>
                  </div>
              </li>
              <li class="col-md-6 col-lg-3">
                  <div class="icon">
                      <img src="images/background/AI.png" />
                  </div>
                  <div>
                      <h4>S<span style="text-transform: lowercase!important;">ti</span>B AI</h4>
                      <p>Chúng tôi sẽ bắt đầu sử dụng Trí Tuệ Nhân Tạo với AI Chat để hỗ trợ giao dịch và cho vay
                          <br>&emsp;</p>
                  </div>
                  <div class="learn-more">
                      <a href="http://charity.stib.co" target="_blank">Tìm hiểu thêm</a>
                  </div>
              </li>
          </ul>

      </div>
  </div>
  <!-- why choose Stib App -->
  <div class="app_provide " id="show">
      <div class="section-title">
          <span class="subtitle line-after">"Chúng tôi phi tập trung và không bỏ lại ai phía sau!"</span>
          <h1 class="title">Tại sao nên Giao dịch/Vay mượn trên hợp đồng thông mình của StiB</h1>
      </div>
      <div class=" container ">
          <div class="app_reason row ">
              <div class="reason_one col-xl-4 col-md-12">
                  <div class="detail detail2">
                      <div class="icon">
                          <img src="images/background/exchange.png" />
                      </div>
                      <div class="content">
                          <h3>Miễn phí</h3>
                          <h4>Luôn luôn miễn phí giao dịch với Hợp đồng thông minh StiB vì những rủi ro sẽ thuộc về bạn và những người khác!</h4>
                      </div>
                  </div>
                  <div class="detail detail3">
                      <div class="icon">
                          <img src="images/background/money.png" />
                      </div>
                      <div class="content">
                          <h3>Chia sẻ lợi nhuận</h3>
                          <h4>
                              Chúng tôi chia sẻ lợi nhuận cũng như tiền lãi với StiB Reserves thông qua đối tác
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
                          <h3>BẢO VỆ PHÁP LÝ</h3>
                          <h4>Bảo vệ người giao dịch/khách hàng với StiB Legals bao gồm luật sư trong nước và quốc tế<br>
                              &nbsp
                          </h4>
                      </div>
                  </div>
                  <div class="detail detail3">
                      <div class="icon">
                          <img src="images/background/global.png" />
                      </div>
                      <div class="content">
                          <h3>Tiện lợi</h3>
                          <h4>Dễ sử dụng, giao diện đẹp mắt và có mặt trên 200 quốc gia với hơn 10 ngôn ngữ phổ biến
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
                      <h1 class="line-after">GIAO DỊCH P2P</h1>
                      <ul>
                          <li>
                              <span class="text-page"><span style="font-weight: bold;">Bước 1:</span>Người bán gửi đến Hợp đồng Thông minh StiB (Không Escrow)</span>

                              <span class="check-icon"><i class="fas fa-check"></i></span>
                          </li>
                          <li>
                              <span class="text-page"><span style="font-weight: bold;">Bước 2:</span> Người mua gửi tiền.</span>

                              <span class="check-icon"><i class="fas fa-check"></i></span>
                          </li>
                          <li>
                              <span class="text-page"><span style="font-weight: bold;">Bước 3:</span> Người bán giải phóng.</span>
                              <span class="check-icon"><i class="fas fa-check"></i></span>
                          </li>

                      </ul>
                  </div>
                  <div class="col-lg-6 col-md-12">
                      <div class="wrapper-video-trading">
                          <div class="mockup-iphone">
                              <div class="top-left-hide hide-corner"></div>
                              <div class="top-right-hide hide-corner"></div>
                              <div class="bottom-left-hide hide-corner"></div>
                              <div class="bottom-right-hide hide-corner"></div>
                              <img src="images/video/mockupIphone.png" alt="" class="img-fluid">
                          </div>
                          <video class="video" loop="-1" width="30%" height="500px" id="video1" muted>
                              <source src="images/video/videoplayback.mp4" type="video/mp4">
                              <!-- <source src="images/video/huongdan.ogg" type="video/ogg">
                          <source src="images/video/huongdan.webm" type="video/webm"> -->
                          </video>
                      </div>
                  </div>

              </div>
          </div>

          <!-- end page 1 -->
          <!-- ............................. -->
          <!-- page 2 -->
          <div style="background-color: #191919;">
              <div class="container">
                  <div class="page2 row d-flex flex-row justify-content-center align-items-center" id="page2">
                      <div class="col-lg-6 col-md-12">
                          <div class="wrapper-video-trading">
                              <div class="mockup-iphone">
                                  <div class="top-left-hide hide-corner" style="background: #191919"></div>
                                  <div class="top-right-hide hide-corner" style="background: #191919"></div>
                                  <div class="bottom-left-hide hide-corner" style="background: #191919"></div>
                                  <div class="bottom-right-hide hide-corner" style="background: #191919"></div>
                                  <img src="images/video/mockupIphone.png" alt="" class="img-fluid">
                              </div>
                              <video class="video" loop="-1" width="30%" height="500px" id="video2" muted>
                                  <source src="images/video/videoplayback2.mp4" type="video/mp4">
                                  <!-- <source src="images/video/huongdan.ogg" type="video/ogg">
                              <source src="images/video/huongdan.webm" type="video/webm"> -->
                              </video>
                          </div>
                      </div>

                      <div class="title col-lg-6 col-md-12 text-left">
                          <h1 class="line-after2">CHO VAY P2P</h1>
                          <ul>
                              <li>
                                  <span class="check-icon"><i class="fas fa-check"></i></span>
                                  <span class="text-page"><span style="font-weight: bold;">Bước 1:</span>Người vay gửi tiền đến Hợp đồng Thông minh StiB (Không Tài sản thế chấp)</span>
                              </li>
                              <li>
                                  <span class="check-icon"><i class="fas fa-check"></i></span>
                                  <span class="text-page"><span style="font-weight: bold;">Bước 2:</span>Người cho vay gửi khoản vay.</span>

                              </li>
                              <li>
                                  <span class="check-icon"><i class="fas fa-check"></i></span>
                                  <span class="text-page"><span style="font-weight: bold;">Bước 3:</span>Người vay trả tiền vay.</span>

                              </li>
                              <li>
                                  <span class="check-icon"><i class="fas fa-check"></i></span>
                                  <span class="text-page"><span style="font-weight: bold;">Step 4:</span> Người cho vay giải phóng.</span>

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
                  <h1 class="line-after">LIÊN HỆ</h1>
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
          <span> <a href="https://stib.co/index.php?showpage=terms">ĐIỀU KHOẢN</a> </span>
          <span> <a href="https://stib.co/index.php?showpage=privacy">BẢO MẬT</a> </span>
      </div>
  </div>

</div> ` ;
var flag = true;
$("#btnEngLang").click(function(){
    event.preventDefault();

    if(flag==false){
        $("#body-content").empty().append(english);
        flag = true;
    }

});
$("#btnVnLang").click(function(){
    event.preventDefault();

    if(flag==true){$("#body-content").empty().append(vietnamese) 
    console.log('ok')
    flag = false ;
}
});





  


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

        if (vitrihientai > 30) {
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