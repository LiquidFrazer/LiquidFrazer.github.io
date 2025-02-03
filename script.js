let yesButton = document.getElementById('yes-btn');
let noButton = document.getElementById('no-btn');
let sadBackground = document.createElement('div');
let counter = 0;

// Create the sad background GIF container
sadBackground.classList.add('sad-background');
document.body.appendChild(sadBackground);

let heartInterval = setInterval(function () {
    let heart = document.createElement('span');
    heart.textContent = '💖';
    heart.classList.add('bouncing-heart');
    document.body.appendChild(heart);

    let randomX = Math.random() * 100;
    let randomY = Math.random() * 100;

    heart.style.left = `${randomX}%`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // randomize speed
}, 200); // Generates hearts at regular intervals

// Change to sad background and stop heart generation after 5 "No" presses
noButton.addEventListener('click', function() {
    counter++;
    if (counter >= 5) {
        sadBackground.style.opacity = 1;
        clearInterval(heartInterval); // Stop the hypnotic hearts after 5 presses
    }
});

// Adjust hypnotic hearts for continuous display
yesButton.addEventListener('click', function() {
    counter = 0; // Reset on "Yes" press
    sadBackground.style.opacity = 0; // Hide sad background
});
