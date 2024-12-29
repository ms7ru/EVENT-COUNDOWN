function updateCountdown() {
    const targetDate = new Date('2025-01-01T08:00:00');
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('time').innerText = "Happy New Year!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('time').innerText = `${days} days ${hours} hours ${minutes} mins ${seconds} secs`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

