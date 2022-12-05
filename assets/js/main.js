import { hamburgerAnimation, heroAnimation, dektopNavAnime, scrollAnime } from "./modules/animations.js";
gsap.registerPlugin(ScrollTrigger)

$(document).ready(function () {
  // init
  function init() {
    let vh = window.innerHeight * 0.01;
    $(document.body).css("--vh", `${vh}px`);
    heroAnimation.play();
    dektopNavAnime.play()

    let skills = gsap.utils.toArray('.skill-card')
    scrollAnime(skills)

    const AboutSec = document.querySelector('#about .container .content .body')
    const AboutSecImg = AboutSec.querySelector('img.about-img')
    const AboutSecDesc = AboutSec.querySelector('.description')
    gsap.set(AboutSecImg, {
      x: -200,
      opacity: 0,
    })
    gsap.set(AboutSecDesc, {
      opacity: 0
    })
    
    let AboutSecAnime = gsap.timeline({paused:true})
    AboutSecAnime.to(AboutSec, {
      opacity: 1,
      duration: 1
    })
    .to(AboutSecImg, {
      x: 0,
      opacity: 1,
      duration: 1,
    }, "<")
    .to(AboutSecDesc, {
      opacity: 1,
      duration: 1,
    }, "<")

    ScrollTrigger.create({
      trigger: AboutSec,
      start: 'top 80%',
      onEnter: ()=> {
        AboutSecAnime.play()
      },
    });
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
