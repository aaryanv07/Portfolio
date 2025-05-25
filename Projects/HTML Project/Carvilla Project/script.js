document.addEventListener("DOMContentLoaded", function () {
    // const nav = document.querySelector(".navlogos");
    // if (scrollY > 0) {
    //     nav.classList.add("bg-black");
    // }
    // else if (scrollY <= 0) {
    //     nav.classList.remove("bg-black");}

    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    const bar = document.querySelector(".navlogos");

    let scrolled = () => {
        let dec = scrollY / (body.scrollHeight - innerHeight);
        return Math.floor(dec * 100);
    }

    addEventListener("scroll", () => {
        bar.style.setProperty("background", scrolled() > 50 ? "black" : "transparent");
    })

})