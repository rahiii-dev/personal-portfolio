$(window).on("load", function () {
  setTimeout(function(){
    $("#loading").hide();
  }, 500)
});

$(document).ready(function () {
  // init
  function init() {
    let vh = window.innerHeight * 0.01;
    $(document.body).css("--vh", `${vh}px`);
    heroAnimation.play();
    dektopNavAnime.play();
    skillScroll();
    aboutScroll();
  }

  setTimeout(function(){
    init()
  }, 550)

  //   functions
  $(window).resize(function () {
    ScrollTrigger.refresh();
    let vh = window.innerHeight * 0.01;
    $(document.body).css("--vh", `${vh}px`);
  });

  // events
  $("#hamburger").click(function (e) {
    let vh = $("#Hero-Sec").height();

    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      hamburgerAnimation.play();
      $(document.body).css({
        height: `${vh}px`,
        "overflow-y": "hidden",
      });
    } else {
      hamburgerAnimation.reverse();
      $(document.body).css({
        height: `auto`,
        "overflow-y": "auto",
      });
    }
  });

  $('.nav-item a.nav-link').click(function (e) {  
    let scrollPageTo = $(this).attr('data-scrollTO');

    if (scrollPageTo != undefined || scrollPageTo != null){
      e.preventDefault();

      if ($('#hamburger').hasClass("active")) {
        $('#hamburger').toggleClass("active");
        hamburgerAnimation.reverse();
        $(document.body).css({
          height: `auto`,
          "overflow-y": "auto",
        });
      }

      let offset = 0;
      if(scrollPageTo == "#about"){
        offset = 60
      }

      gsap.to(window, {duration: 2, scrollTo: {y: scrollPageTo, offsetY: offset}});
    }
  });

  $("#contact .container .content form").submit(function (e) {
    e.preventDefault();

    $('#contact .container .content form .form-submit button').text("Sending...");

    $.ajax({
      url:"https://script.google.com/macros/s/AKfycby2lXDrYILp74zNqUSqoX-GqmHD2PRLCT4T09dvmu3GjItvLBkHDv9nqLfI1I8AcNP6/exec",
      data:$(this).serialize(),
      method:"post",
      success:function (response){
        $('#contact .container .content form .form-submit button').text("Sended Succescfully");
        $('#contact .container .content form input').val('');
        $('#contact .container .content form textarea').val('');

        setTimeout(function(){
          $('#contact .container .content form .form-submit button').text("Send Message");
        }, 2000)

      },
      error:function (err){
          $('#contact .container .content form .form-submit button').text("Error Sending");
          setTimeout(function(){
            $('#contact .container .content form .form-submit button').text("Send Message");
          }, 2000)
      }
  })
  });
});
