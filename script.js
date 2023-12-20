function cursoreffect(){
    var page1Content = document.querySelector(".page1_cont");
var cursor = document.querySelector(".cursor");

page1Content.addEventListener("mousemove",function(det){
    gsap.to(cursor,{
        x:det.x,
        y:det.y,
    })
});
page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        });
});
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    });
});
};
cursoreffect();
function page2Animation(){
    gsap.from(".elem h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrolllTrigger:{
            trigger:".page2",
            scroller:"body",
            start:"top 47%",
            end: "top 46%",
            markers: true,
            scrub: 2
        }
    })
}

function slideanimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay:1250,
            disableOnInteraction: true,
          },
      });
}
slideanimation()

var t1 = gsap.timeline()

t1.from(".loader h2",{
    x:40,
    opacity:0,
    stagger: 0.2,
    duration:1
})
t1.to(".loader h2",{
    x:-40,
    opacity:0,
    stagger: 0.1,
    duration: 1
})
t1.to(".loader",{
    opacity:0
})
t1.from(".page1_cont h1 span",{
    y:100,
    opacity:0,
    stagger:0.025,
    duration:0.2,
    delay:-0.5
})
t1.from(".page1_cont nav h3",{
    x:40,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})

t1.to(".loader",{
    display:"none"
})


