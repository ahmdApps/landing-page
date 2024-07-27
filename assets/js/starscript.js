function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    document.querySelector('.star-container').appendChild(star);

    // Set random position and delay
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;

    // Remove star after animation ends
    star.addEventListener('animationend', () => {
        star.remove();
    });

    // Repeat the creation process
    setTimeout(createStar, Math.random() * 3000);
}

// Start creating stars
createStar();