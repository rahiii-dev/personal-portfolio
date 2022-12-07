gsap.registerPlugin(ScrollTrigger);

// alert("ok")

// animations
const hamburgerAnimation = gsap.timeline({ paused: true });
hamburgerAnimation
  .to("#hamburger .top", { y: 28, ease: "back", duration: 0.3 })
  .to("#hamburger .bottom", { y: -28, ease: "back", duration: 0.3 }, "<")
  .to("#hamburger .middle", { opacity: 0 })
  .to("#hamburger .top", {
    x: 7,
    y: 33,
    rotate: 45,
    transformOrigin: "center",
    duration: 0.2,
    ease: "back",
  })
  .to(
    "#hamburger .bottom",
    {
      x: 7,
      rotate: -45,
      transformOrigin: "center",
      duration: 0.2,
      ease: "back",
    },
    "<"
  )
  .to("nav", { x: 0 }, 0.1)
  .from("nav .mobile-list li:not(.social-links)", {
    x: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "back()",
    duration: 0.7,
  })
  .from(
    "nav .mobile-list .social-links a",
    {
      y: 10,
      scale: 0.5,
      opacity: 0,
      stagger: {
        each: 0.2,
        from: "center",
      },
      ease: "back()",
      duration: 0.7,
    },
    "<"
  );

const heroAnimation = gsap.timeline({ paused: true });

heroAnimation
  .from("#Hero-Sec", { opacity: 0, duration: 1 })
  .from("#Hero-Sec .content-wrapper .col-left > h1 span", {
    xPercent: -105,
    stagger: 0.2,
  })
  .from("#hamburger", { opacity: 0 }, "<")
  .from("#hamburger .top", { y: 28, ease: "back", duration: 0.3 })
  .from("#hamburger .bottom", { y: -28, ease: "back", duration: 0.3 }, "<")
  .from(
    "#Hero-Sec .content-wrapper .col-left a",
    {
      opacity: 0,
      y: 40,
    },
    "<"
  )
  .from(
    "#Hero-Sec .content-wrapper .col-right img",
    {
      yPercent: 115,
      ease: "back",
    },
    1
  );

const dektopNavAnime = gsap.from("nav.desktop .desktop-list li", {
  y: -10,
  scale: 0.5,
  opacity: 0,
  stagger: {
    each: 0.2,
    from: "center",
  },
  ease: "back()",
  duration: 0.7,
  delay: 1,
});

// scroll animations
function skillScroll(marker=false){
  const skills = gsap.utils.toArray('.skill-card')
    gsap.set(skills, {opacity:0, y: 100, duration: 0})
    skills.forEach(skill => {
      ScrollTrigger.create({
          trigger: skill,
          start: 'top 90%',
          onEnter: ()=> {
            gsap.to(skill, {
              y: 0,
              opacity: 1,
              duration: 0.8,
            })
          },
          markers: marker == true ? true : false,
        });
    });
}

function aboutScroll(marker=false){
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
      markers: marker == true ? true : false,
    });
}

