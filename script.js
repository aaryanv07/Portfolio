document.addEventListener("DOMContentLoaded", function () {
    // Shery.hoverWithMediaCircle(".hvr",{videos: ["https://cuberto.com/assets/featured/header-sm.mp4", "https://cuberto.com/assets/showreel/short-sm.mp4", "https://cuberto.com/assets/home/hero/header.mp4"]});
//     Shery.mouseFollower();
//     Shery.makeMagnet(".magnet");
//     Shery.imageEffect(".images", {
//   style: 6,
//   debug: true,
//   gooey: true,
// });
    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('.main'),
    //     smooth: true
    // });
    // gsap.from(".m .web", {


    //     opacity: 0, yoyo: true, repeat: -1,


    //     scale: 2,

    //     scroolTrigger: true,
    //     stagger: 1,
    // });
    gsap.from(".navbar-brand", {
        y: -15,
        yoyo: true,
        // repeat:-1,
        opacity: 0,
        duration: 1,
        background: "transparent",
    })
    gsap.from(".nav-part2 h1", {
        y: -15,
        yoyo: true,
        duration: 1,
        opacity: 0,
        stagger: 0.5,
    });

    // gsap.to(".p-1 .hero",{
    //     scale:0.7,
    //     opacity:0,
    //     yoyo:true,
    //     scrollTrigger:{
    //         trigger:".hero",
    //         start:"top -50%",
    //         end:"bottom 85%",
    //         scrub:5,
    //         markers:true,

    //     }

    // })
    // gsap.to("main .cf",{
    //     x:200,
    //     opacity:0,
    //     yoyo:true,
    //     scrollTrigger:{
    //         trigger:".cf",
    //         start:"top -90%",
    //         end:"bottom 1%",
    //         scrub:5,
    //         markers:true,

    //     }

    // })
    // gsap.to(".projects .pa-1",{
    //     y:50,
    //     opacity:0,
    //     yoyo:true,
    //     scrollTrigger:{
    //         trigger:".projects .pa-1",
    //         start:"top -30%",
    //         end:"bottom 30%",
    //         scrub:5,
    //         markers:true,

    //     }

    // })


    // gsap.to(".skills .wrapper", {
    //     transform: "translate(-800%)",
    //     scrollTrigger: {
    //         trigger: ".skills",
    //         scroller: "body",
    //         start: "top 0%",
    //         end: "top -100%",
    //         scrub: 2,
    //         pin: true,

    //     }

    // })
    // gsap.from(".overlay .se", {
    //     opacity: 0,
    //     duration: 0.5,
    // })

    const a = [{
        trigger: document.querySelector("#elem"),
        target: document.querySelector(".fixed")
    },
    {
        trigger: document.querySelector("#elem2"),
        target: document.querySelector(".fixed2")
    },
    {
        trigger: document.querySelector("#elem3"),
        target: document.querySelector(".fixed3")
    },



    ]
    // a.forEach((d) => {
    //     d.trigger.addEventListener("mouseover", () => {

    //         d.target.style.display = "block"
    //     })
    //     d.trigger.addEventListener("mouseleave", () => {

    //         d.target.style.display = "none"
    //     })
    // })
    // const fixes = [
    //     {
    //         target: document.querySelector('.fixed'),
    //     },
    //     {
    //         target: document.querySelector('.fixed2'),
    //     },
    //     {
    //         target: document.querySelector('.fixed3'),
    //     },

    // ]
    // fixes.forEach(e => {
    //     e.target.addEventListener("mouseenter", () => {
    //         e.target.style.display = 'block';
    //     })
    //     e.target.addEventListener("mouseleave", () => {
    //         e.target.style.display = 'none';
    //     })
    // })
    gsap.from(".contact .git", {
        opacity: 0,
        scale: 1.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
    })

//     gsap.from(".position .edu", {
//         y: -15,
//         duration: 1,
//         repeat: -1,
//         yoyo: true


//     })
//     const elements = [
//     { el: document.querySelector(".fixed"), min: 1400, max: 1700 },
//     { el: document.querySelector(".fixed2"), min: 1700, max: 2000 },
//     { el: document.querySelector(".fixed3"), min: 2000, max: 2200 }
// ];

const visible = () => {
    const scrollY = window.scrollY;
    elements.forEach(({ el, min, max }) => {
        el.style.display = scrollY > min && scrollY < max ? 'block' : 'none';
    });
};
//     window.addEventListener('scroll', visible);
//     window.addEventListener('wheel', (s) => {
//         if (s.deltaY > 0) {
//             gsap.to(".skills .wrapper", {
//                 transform: "translateX(-850%)",
//                 repeat: -1,
//                 ease: "linesr",
//                 duration: 6,
//                 yoyo:true,
//             })
//             gsap.to(".bi-arrow-right", {
//                 rotate: 180,
//             })
//         }
//         else if (s.deltaY < 0) {
//             gsap.to(".skills .wrapper", {
//                 transform: "translateX(0%)",
//                 repeat: -1,
//                 ease: "linear",
//                 duration: 6,
//                 yoyo:true,
//             })
//             gsap.to(".bi-arrow-right", {
//                 rotate: 0,
//             })
//         }
//     });

//     var initialPath = "M 10 100 Q 300 100 590 100";
// var finalPath = "M 10 100 Q 300 100 590 100";


// var string = document.querySelector('.centered-svg');
// string.addEventListener("mousemove", (dets) => {
//     initialPath = `M 10 100 Q ${dets.x} ${dets.y} 590 100`
//     gsap.to("svg path", {
//         attr: {
//             d: initialPath},
//             duration: 0.3,
//             ease: "power3.out",
        
//     })
// })

// string.addEventListener("mouseleave", () => {

//     gsap.to("svg path",{
//         attr: { d: finalPath },
//         ease: "elastic.out(1,0.1)",
//         duration:0.8,
//     })


// })
var tl= gsap.timeline({paused:true})
tl.to("#full",{
    right:0,
    duration:0.5,
})
tl.from("#full h1",{
    x:150,
    duration:0.5,
    stagger:0.25,
    opacity:0,
})
tl.from(".fa-xmark",{
    opacity:0
,})

var menu=document.querySelector("button .fa-bars")
var cross=document.querySelector(".fa-xmark")
menu.addEventListener("click",()=>{
tl.play();
})

cross.addEventListener("click",()=>{
    tl.reverse();
})
})
