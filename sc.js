var t1=gsap.timeline({
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top 0%",
        end:"top -30",
        scrub:3,
    }
})
t1.to("#page1 svg",{
    scale:0.1,
    y:-70
},"bkl")
t1.to("#page1 #nav",{
    height:"75px",
    paddingTop:0
},"bkl")