const tl = gsap.timeline()

tl.from("h3",{
    y:-60,
    duration: 1.2,
  
    stagger:0.2
})

tl.from("h1",{
    x:-1400,
    duration: 1.4,
    stagger:0.2
})

tl.from("img",{
    x:1200,
    rotate:45,
    duration: 1.4,
    stagger:0.2 ,
    
})