// Getting button references and other elements
let yesButton = document.getElementById('yes-btn');
let noButton = document.getElementById('no-btn');
let sadBackground = document.getElementById('sad-background');
let counter = 0;
let heartInterval;

// Add event listeners to the buttons
yesButton.addEventListener('click', function() {
    counter = 0;  // Reset on "Yes"
    sadBackground.style.display = 'none'; // Hide sad background
    startHypnoticHearts(); // Start hypnotic hearts effect
});

noButton.addEventListener('click', function() {
    counter++;
    if (counter >= 5) {
        sadBackground.style.display = 'block'; // Show sad background after 5 presses
    }
});

// Function to start hypnotic hearts effect
function startHypnoticHearts() {
    heartInterval = setInterval(function() {
        let heart = document.createElement('span');
        heart.textContent = '💖';
        heart.classList.add('bouncing-heart');
        document.body.appendChild(heart);

        let randomX = Math.random() * 100;
        let randomY = Math.random() * 100;

        heart.style.left = `${randomX}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random speed
    }, 100); // Generate hearts every 100ms
}

// Start the hypnotic hearts effect as soon as the page loads
startHypnoticHearts();
