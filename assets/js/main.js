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

  $("#contact .container .content form").submit(function (e) {
    e.preventDefault();
  });
});
