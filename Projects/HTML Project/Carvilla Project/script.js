document.addEventListener("DOMContentLoaded", function () {
    // const nav = document.querySelector(".navlogos");
    // if (scrollY > 0) {
    //     nav.classList.add("bg-black");
    // }
    // else if (scrollY <= 0) {
    //     nav.classList.remove("bg-black");}




    const mq = window.matchMedia("(min-width: 1200px)");
    const mq2 = window.matchMedia("(min-width:1200px)");
    const mq3 = window.matchMedia("(min-width: 1200px)");
    const bar = document.querySelector(".navlogos");

    function handleVp() {
        mq2.matches ? bar.style.backgroundColor = "transparent" : bar.style.backgroundColor = "black";
    }
    function handleScroll() {
        if (mq.matches) {
            if (window.scrollY > 1) {
                bar.classList.add("tran");
                bar.style.backgroundColor = "black";
                bar.style.color = "white";
                bar.style.zIndex = "1000";
                bar.style.padding = "1vh";
            }
            else if (window.scrollY <= 1) {
                bar.style.backgroundColor = "transparent";
                bar.style.color = "black";
                bar.style.zIndex = "1000";
                bar.style.padding = "0vh";
            }

        }
        // else{
        //     if (window.scrollY > 1) {
        //         bar.classList.add("tran");
        //         bar.style.backgroundColor = "black";
        //         bar.style.color = "white";
        //         bar.style.zIndex = "1000";
        //         bar.style.padding = "1vh";
        //     }
        //     else if (window.scrollY <= 1) {
        //         bar.style.backgroundColor = "transparent";
        //         bar.style.color = "black";
        //         bar.style.zIndex = "1000";
        //         bar.style.padding = "0vh";
        //     }
        // }
    }
    handleVp();
    handleScroll();
    mq2.addEventListener("change", handleVp);
    mq.addEventListener("change", handleScroll);
    window.addEventListener("scroll", handleScroll);
})