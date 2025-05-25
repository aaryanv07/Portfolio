const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function page4Animation() {
    const elem = document.querySelector('.elem-container')
    const elems = document.querySelectorAll('.elem')
    
    const image = document.querySelector('#fixed-image');
    elems.forEach((e) => {
        e.addEventListener('mouseenter', function () {
            image.style.display = 'block'


            var link = e.getAttribute('data-image')
            image.style.backgroundImage = ` url(${link})`

        })
        elem.addEventListener('mouseleave', function () {
            image.style.display = 'none'
        })
    })
    image.addEventListener('mouseenter', function () {
        image.style.display = 'block'
    })
    image.addEventListener('mouseleave', function () {
        image.style.display = 'none'
    })

}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,

    });

}
swiperAnimation();
page4Animation();