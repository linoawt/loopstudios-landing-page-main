// const loveMessages = [
//     "Happy Valentine My Love ❤️",
//     "You are my today and all of my tomorrows 💕",
//     "Every heartbeat whispers your name 💓",
//     "Forever is not enough with you 💖",
//     "You are my greatest blessing ✨",
//     "I love you endlessly ❤️"
// ];

// const loveText = document.getElementById("loveText");
// const intro = document.getElementById("intro");
// const gallery = document.getElementById("gallery");
// const ending = document.getElementById("ending");

// const galleryImage = document.getElementById("galleryImage");
// const frame = document.querySelector(".frame");

// let messageIndex = 0;
// let imageIndex = 1;

// /* SHOW LOVE MESSAGES ONE BY ONE */
// function showMessages() {
//     if (messageIndex < loveMessages.length) {
//         loveText.innerText = loveMessages[messageIndex];
//         messageIndex++;
//         setTimeout(showMessages, 2500);
//     } else {
//         intro.classList.remove("active");
//         gallery.classList.add("active");
//         showImages();
//     }
// }

// /* SHOW IMAGES ONE BY ONE */
// function showImages() {
//     if (imageIndex <= 15) {
//         frame.classList.remove("show");
//         setTimeout(() => {
//             galleryImage.src = `/Valentine/img/${imageIndex}.JPEG`;
//             frame.classList.add("show");
//             imageIndex++;
//         }, 500);

//         setTimeout(showImages, 3000);
//     } else {
//         gallery.classList.remove("active");
//         ending.classList.add("active");
//     }
// }

// showMessages();


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

let messageIndex = 0;
let imageIndex = 1;

/* SHOW LOVE MESSAGES ONE BY ONE */
function showMessages() {
    if (messageIndex < loveMessages.length) {
        loveText.innerText = loveMessages[messageIndex];
        messageIndex++;
        setTimeout(showMessages, 2500);
    } else {
        intro.classList.remove("active");
        gallery.classList.add("active");
        showImages();
    }
}

/* SHOW IMAGES ONE BY ONE */
function showImages() {
    if (imageIndex <= 15) {
        frame.classList.remove("show");
        setTimeout(() => {
            galleryImage.src = `img/${imageIndex}.JPEG`;
            frame.classList.add("show");
            imageIndex++;
        }, 500);

        setTimeout(showImages, 3000);
    } else {
        gallery.classList.remove("active");
        ending.classList.add("active");
    }
}

showMessages();

/* HEARTS GENERATION */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    heart.style.fontSize = 10 + Math.random() * 20 + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}
setInterval(createHeart, 300);

/* SNOW GENERATION */
function createSnowflake() {
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


const music = document.getElementById("loveMusic");

// Try to play immediately when page loads
window.addEventListener("DOMContentLoaded", () => {
    music.play().catch(() => {
        // Fallback for autoplay blocked by browser
        console.log("Autoplay blocked, will play on first click.");
        // Play on first user interaction
        const playOnce = () => {
            music.play();
            document.removeEventListener("click", playOnce);
        }
        document.addEventListener("click", playOnce);
    });
});