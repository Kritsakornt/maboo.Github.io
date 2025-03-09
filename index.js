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
    const imageList = ["IMG_2797.JPG", "IMG_3995.PNG", "IMG_3992.PNG", "IMG_3994.PNG", "IMG_3332.JPG", "IMG_3293.PNG", "IMG_3307.JPG", "IMG_3308.JPG", "IMG_3311.JPG", "IMG_3331.JPG", "IMG_3989.JPG", "IMG_3271.JPG", "IMG_3273.JPG", "IMG_3276.JPG", "IMG_3287.PNG", "IMG_2921.JPG", "IMG_2923.JPG", "IMG_2929.JPG", "IMG_2942.JPG", "IMG_2980.JPG", "IMG_2981.JPG", "IMG_2982.JPG", "IMG_2985.JPG", "IMG_3159.JPG", "IMG_3169.JPG", "IMG_3177.JPG", "IMG_3185.JPG", "IMG_3489.JPG", "IMG_3503.JPG", "IMG_3507.JPG", "IMG_3929.JPG", "JPNK5955.JPG", "LXMG2657.JPG", "TQXZ7956.JPG", "IMG_2818.JPG", "CLQE5686.JPG", "IMG_2337.JPG", "IMG_2341.JPG", "IMG_2346.JPG", "IMG_2348.JPG", "IMG_2412.JPG", "IMG_2422.JPG", "IMG_2429.JPG", "IMG_2444.JPG", "IMG_2451.JPG", "IMG_2462.JPG", "IMG_2463.JPG", "IMG_2464.JPG", "IMG_2466.JPG", "IMG_2467.JPG", "IMG_2468.JPG", "IMG_2473.JPG", "IMG_2481.JPG", "IMG_2489.JPG", "IMG_2494.JPG", "IMG_2499.JPG", "IMG_2500.JPG", "IMG_2502.JPG", "IMG_2504.JPG", "IMG_2519.JPG", "IMG_2527.JPG", "IMG_2528.JPG", "IMG_2536.JPG", "IMG_2537.JPG", "IMG_2547.JPG", "IMG_2548.PNG", "IMG_2561.JPG", "IMG_2565.JPG", "IMG_2572.JPG", "IMG_2603.JPG", "IMG_2616.JPG", "IMG_2618.JPG", "IMG_2646.JPG", "IMG_2663.JPG", "IMG_2664.JPG", "IMG_2690.JPG", "IMG_2707.JPG", "IMG_2712.JPG", "IMG_2717.JPG", "IMG_2724.JPG", "IMG_2734.JPG", "IMG_2747.JPG", "IMG_2748.JPG", "IMG_2761.JPG", "IMG_2763.JPG", "IMG_2815.JPG", "IMG_2816.JPG", "IMG_2817.JPG", "IMG_2794.JPG", "IMG_2796.JPG"];
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

