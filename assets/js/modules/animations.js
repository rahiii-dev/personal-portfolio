gsap.registerPlugin(ScrollTrigger)

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

// exports
export { hamburgerAnimation, heroAnimation, dektopNavAnime };
