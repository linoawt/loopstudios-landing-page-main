document.addEventListener("DOMContentLoaded", () => {

    const messages = [
        "Happy Valentine My Love ❤️",
        "You are my today and tomorrow 💕",
        "Every heartbeat whispers your name 💓",
        "You are my greatest blessing ✨",
        "I love you endlessly ❤️"
    ];

    const intro = document.getElementById("intro");
    const gallery = document.getElementById("gallery");
    const ending = document.getElementById("ending");
    const loveText = document.getElementById("loveText");
    const galleryImage = document.getElementById("galleryImage");
    const music = document.getElementById("bgMusic");

    let step = 0;

    // Play music on first click (browser policy safe)
    document.body.addEventListener("click", () => {
        music.play().catch(() => {});
    }, { once: true });

    function nextStep() {

        // Show Messages
        if (step < messages.length) {
            loveText.textContent = messages[step];
            step++;
            setTimeout(nextStep, 2500);
            return;
        }

        // Switch to Gallery
        if (step === messages.length) {
            intro.classList.remove("active");
            gallery.classList.add("active");
            step++;
            setTimeout(nextStep, 1000);
            return;
        }

        // Show Images 1–15
        const imageNumber = step - messages.length;

        if (imageNumber >= 1 && imageNumber <= 15) {

            galleryImage.classList.remove("show");

            setTimeout(() => {
                galleryImage.src = `img/${imageNumber}.jpg`;
                galleryImage.classList.add("show");
            }, 200);

            step++;
            setTimeout(nextStep, 3000);
            return;
        }

        // Ending
        gallery.classList.remove("active");
        ending.classList.add("active");
    }

    nextStep();

    /* Floating Hearts Generator */
    const heartsContainer = document.querySelector(".hearts");

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (4 + Math.random() * 4) + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 7000);
    }, 500);

    /* Snow Generator */
    const snowContainer = document.querySelector(".snow");

    setInterval(() => {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄";
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = (3 + Math.random() * 5) + "s";
        snowContainer.appendChild(snowflake);

        setTimeout(() => snowflake.remove(), 8000);
    }, 300);

});