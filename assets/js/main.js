import { hamburgerAnimation, heroAnimation, dektopNavAnime } from "./modules/animations.js";

$(document).ready(function () {
  // init
  function init() {
    let vh = window.innerHeight * 0.01;
    $(document.body).css("--vh", `${vh}px`);
    heroAnimation.play();
    dektopNavAnime.play()
  }

  init()

  //   functions

  // events
  $("#hamburger").click(function (e) {
    if ($(this).hasClass("active")) {
      hamburgerAnimation.play();
      $(this).removeClass("active");
    } else {
      hamburgerAnimation.reverse();
      $(this).addClass("active");
    }
  });
});
