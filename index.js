function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

function sendLove() {
    const name = getQueryParam("byukhaa") || "byukhaa";
    const message = document.getElementById("message");
    message.innerHTML = `You're loved, ${name}! ❤️`;
    message.style.opacity = 1;

    // Create confetti effect
    for (let i = 0; i < 5000; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// Trigger the confetti and message on page load
window.onload = sendLove;

function updateElapsedTime() {
    const startDate = new Date("2024-10-10T00:00:00");
    const now = new Date();
    let diff = now - startDate;

    let seconds = Math.floor((diff / 1000) % 60);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);
    months %= 12;
    days %= 30;

    document.getElementById("years").textContent = String(years).padStart(2, '0');
    document.getElementById("months").textContent = String(months).padStart(2, '0');
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}
setInterval(updateElapsedTime, 1000);
updateElapsedTime();

function loadImages() {
    const imgFolder = "img/";
    const imageList = ["IMG_2797.PNG", "IMG_3995.PNG", "IMG_3992.PNG", "IMG_3994.PNG", "IMG_3332.PNG", "IMG_3293.PNG", "IMG_3307.PNG", "IMG_3308.PNG", "IMG_3311.PNG", "IMG_3331.PNG", "IMG_3989.PNG", "IMG_3271.PNG", "IMG_3273.PNG", "IMG_3276.PNG", "IMG_3287.PNG", "IMG_2921.PNG", "IMG_2923.PNG", "IMG_2929.PNG", "IMG_2942.PNG", "IMG_2980.PNG", "IMG_2981.PNG", "IMG_2982.PNG", "IMG_2985.PNG", "IMG_3159.PNG", "IMG_3169.PNG", "IMG_3177.PNG", "IMG_3185.PNG", "IMG_3489.PNG", "IMG_3503.PNG", "IMG_3507.PNG", "IMG_3929.PNG", "JPNK5955.PNG", "LXMG2657.PNG", "TQXZ7956.PNG", "IMG_2818.PNG", "CLQE5686.PNG", "IMG_2337.PNG", "IMG_2341.PNG", "IMG_2346.PNG", "IMG_2348.PNG", "IMG_2412.PNG", "IMG_2422.PNG", "IMG_2429.PNG", "IMG_2444.PNG", "IMG_2451.PNG", "IMG_2462.PNG", "IMG_2463.PNG", "IMG_2464.PNG", "IMG_2466.PNG", "IMG_2467.PNG", "IMG_2468.PNG", "IMG_2473.PNG", "IMG_2481.PNG", "IMG_2489.PNG", "IMG_2494.PNG", "IMG_2499.PNG", "IMG_2500.PNG", "IMG_2502.PNG", "IMG_2504.PNG", "IMG_2519.PNG", "IMG_2527.PNG", "IMG_2528.PNG", "IMG_2536.PNG", "IMG_2537.PNG", "IMG_2547.PNG", "IMG_2548.PNG", "IMG_2561.PNG", "IMG_2565.PNG", "IMG_2572.PNG", "IMG_2603.PNG", "IMG_2616.PNG", "IMG_2618.PNG", "IMG_2646.PNG", "IMG_2663.PNG", "IMG_2664.PNG", "IMG_2690.PNG", "IMG_2707.PNG", "IMG_2712.PNG", "IMG_2717.PNG", "IMG_2724.PNG", "IMG_2734.PNG", "IMG_2747.PNG", "IMG_2748.PNG", "IMG_2761.PNG", "IMG_2763.PNG", "IMG_2815.PNG", "IMG_2816.PNG", "IMG_2817.PNG", "IMG_2794.PNG", "IMG_2796.PNG"];
    let slideshowContainer = document.getElementById("slideshow-container");

    imageList.forEach((img, index) => {
        let imageElement = document.createElement("img");
        imageElement.src = imgFolder + img;
        imageElement.classList.add("slide");
        if (index === 0) imageElement.style.display = "block";
        slideshowContainer.appendChild(imageElement);
    });
}

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

let slideIndex = 0;
loadImages();
showSlides();

