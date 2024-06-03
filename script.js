const countdown = () => {
    const targetDate = new Date('July 11, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    } else {
        document.getElementById('countdown').innerHTML = "Happy Birthday!";
    }
};

// Initial call to display the countdown immediately
countdown();

// Update the countdown every second
setInterval(countdown, 1000);

// Function to create floating hearts
const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.getElementById('animation-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
};

// Create hearts every 500 milliseconds
setInterval(createHeart, 500);
