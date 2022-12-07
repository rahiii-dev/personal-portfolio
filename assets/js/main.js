$(document).ready(function () {
  // init
  function init() {
    let vh = window.innerHeight * 0.01;
    $(document.body).css("--vh", `${vh}px`);
    heroAnimation.play();
    dektopNavAnime.play()
    skillScroll(true)
    aboutScroll()
  }

  init()

  //   functions
  $(window).resize(function () { 
    console.log("resize")
    ScrollTrigger.refresh()
  });
 
  // events
  $("#hamburger").click(function (e) {
    let vh = $('#Hero-Sec').height();

    $(this).toggleClass('active');

    if ($(this).hasClass("active")) {
      hamburgerAnimation.play();
      $(document.body).css({
        'height': `${vh}px`,
        'overflow-y': 'hidden'
      });
    } else {
      hamburgerAnimation.reverse();
      $(document.body).css({
        'height': `100%`,
        'overflow-y': 'auto',
      });
    }
  });

  $("#contact .container .content form").submit(function (e) { 
    e.preventDefault();
    
  });

});
