function changeSrc() {
    const img = document.querySelector("#img");
    if(window.innerWidth >= 1440) {
        img.src = "assets/images/illustration-sign-up-desktop.svg";
        return;
    }
    img.src = "assets/images/illustration-sign-up-mobile.svg";
};
window.addEventListener("load", changeSrc);
window.addEventListener("resize", changeSrc);