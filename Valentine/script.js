document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       LOVE MESSAGES
    =============================== */

    const loveMessages = [
        "Happy Valentine My Love ❤️",
        "You are my today and all of my tomorrows 💕",
        "Every heartbeat whispers your name 💓",
        "Forever is not enough with you 💖",
        "You are my greatest blessing ✨",
        "I love you endlessly ❤️"
    ];

    const loveText = document.getElementById("loveText");
    const intro = document.getElementById("intro");
    const gallery = document.getElementById("gallery");
    const ending = document.getElementById("ending");

    const galleryImage = document.getElementById("galleryImage");
    const frame = document.querySelector(".frame");

    const heartsContainer = document.querySelector(".hearts");
    const snowContainer = document.querySelector(".snow");

    const music = document.getElementById("loveMusic");

    let messageIndex = 0;
    let imageIndex = 1;
    const totalImages = 15;

    /* ===============================
       START MUSIC SAFELY
    =============================== */

    music.play().catch(() => {
        document.addEventListener("click", function playOnce() {
            music.play();
            document.removeEventListener("click", playOnce);
        });
    });

    /* ===============================
       SHOW LOVE MESSAGES
    =============================== */

    function showMessages() {
        if (messageIndex < loveMessages.length) {
            loveText.textContent = loveMessages[messageIndex];
            messageIndex++;
            setTimeout(showMessages, 2500);
        } else {
            intro.classList.remove("active");
            gallery.classList.add("active");
            startGallery();
        }
    }

    /* ===============================
       STABLE GALLERY SLIDESHOW
    =============================== */

    function startGallery() {

        // Show first image immediately
        galleryImage.src = `img/${imageIndex}.jpg`; // use lowercase .jpg
        frame.classList.add("show");
        imageIndex++;

        const slideshow = setInterval(() => {

            if (imageIndex > totalImages) {
                clearInterval(slideshow);
                gallery.classList.remove("active");
                ending.classList.add("active");
                return;
            }

            frame.classList.remove("show");

            setTimeout(() => {
                galleryImage.src = `img/${imageIndex}.jpg`;
                frame.classList.add("show");
                imageIndex++;
            }, 500);

        }, 3000);
    }

    showMessages();

    /* ===============================
       HEARTS ANIMATION
    =============================== */

    function createHeart() {
        if (!heartsContainer) return;

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 4 + Math.random() * 4 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    setInterval(createHeart, 300);

    /* ===============================
       SNOW ANIMATION
    =============================== */

    function createSnowflake() {
        if (!snowContainer) return;

        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.fontSize = 10 + Math.random() * 20 + "px";
        snowflake.innerText = "❄";
        snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 10000);
    }

    setInterval(createSnowflake, 200);

});