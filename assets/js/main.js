import { hamburgerAnimation, heroAnimation, dektopNavAnime } from "./modules/animations.js";
gsap.registerPlugin(ScrollTrigger)

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
  let skills = gsap.utils.toArray('.skill-card')
  gsap.to(skills, {opacity:0, y: 100, duration: 0})
  skills.forEach(skill => {
    ScrollTrigger.create({
        trigger: skill,
        start: 'top-=300 center',
        onEnter: ()=> {
          console.log("entered")
          gsap.to(skill, {
            y: 0,
            opacity: 1,
            duration: 0.8,
          })
        },
        markers: true,
      });
  });

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
