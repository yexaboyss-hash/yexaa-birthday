const start = document.getElementById("start");
const page = document.getElementById("page1");
const music = document.getElementById("music");

start.onclick = () => {
  document.querySelector(".loading").style.display = "none";
  page.classList.remove("hidden");
  music.play();
}

// Confetti effect
function confetti() {
  const duration = 2000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // Create heart confetti
    const hearts = document.querySelectorAll(".hearts");
    hearts.forEach(heart => {
      for (let i = 0; i < 5; i++) {
        const heartEl = document.createElement("div");
        heartEl.className = "heart";
        heartEl.textContent = "💕";
        heartEl.style.left = randomInRange(0, window.innerWidth) + "px";
        heartEl.style.fontSize = randomInRange(16, 32) + "px";
        heartEl.style.animationDuration = randomInRange(8, 12) + "s";
        heart.appendChild(heartEl);
        
        setTimeout(() => heartEl.remove(), 12000);
      }
    });
  }, 250);
}

window.onload = () => {
  setTimeout(confetti, 1000);
};
