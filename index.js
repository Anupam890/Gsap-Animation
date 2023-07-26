const graphic = gsap.timeline()

graphic.from("#navbar .logo-img,#navbar ul ,#navbar .right-btn ", {
    y: -100,
    duration: 1,
    delay: 0.5,
    stagger: 0.5


})
graphic.from(".main-section >h3,.main-section h4", {
    y: 100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5
})
graphic.from(".main-section >img", {
    y: 100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5
})