let yesClickCount = 0;
let noClickCount = 0;

const mainText = document.querySelector("#main-text");
const linesContainer = document.querySelector("#lines");
const body = document.body;

// Function to Create Hypnotizing Hearts
function createHypnotizingHeart() {
    for (let i = 0; i < 20; i++) {  // Increase number of hearts
        const heart = document.createElement("div");
        heart.classList.add("hypnotizing-heart");
        heart.innerHTML = "💖";
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

// Function to Create Stars in the Sky
function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 50}%`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        starsContainer.appendChild(star);
    }
}
createStars();

// Function to Create Crying Emoji Rain
function createCryingEmoji() {
    for (let i = 0; i < 10; i++) {  
        const emoji = document.createElement("div");
        emoji.classList.add("emoji-rain");
        emoji.innerHTML = "😭";
        emoji.style.left = `${Math.random() * 100}%`;
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 3000);
    }
}

// Yes Button Click Event
document.querySelector("#yes-btn").addEventListener("click", () => {
    const yesLines = [
        "Yay! You made my heart flutter! 💖",
        "Awww, you’re the sweetest! 😊",
        "Are you sure? Because my heart is racing! 💓",
        "You really mean it? My heart is melting! 😍",
        "You are officially my Valentine! 💞"
    ];

    if (yesClickCount < 5) {
        linesContainer.textContent = yesLines[yesClickCount];
        linesContainer.style.opacity = "1";
        yesClickCount++;

        if (yesClickCount === 5) {
            mainText.textContent = "You’re my Valentine, Olivia! 💖";
            setInterval(createHypnotizingHeart, 500); // Start Hypnotizing Hearts
            setTimeout(() => window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 15000);
        }
    }
});

// No Button Click Event
document.querySelector("#no-btn").addEventListener("click", () => {
    const noLines = [
        "Oh... that hurts... 💔",
        "Are you really saying no? 😢",
        "Please reconsider... I'm sad now... 😭",
        "You're breaking my heart... 💔💔",
        "I give up... I'm heartbroken... 💀"
    ];

    if (noClickCount < 5) {
        linesContainer.textContent = noLines[noClickCount];
        linesContainer.style.opacity = "1";
        createCryingEmoji();
        noClickCount++;

        if (noClickCount === 5) {
            body.style.backgroundImage = "url('https://media.tenor.com/P3RqQUUK9BAAAAAM/rip-juice-cry.gif')";
        }
    }
});
