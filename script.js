const start = document.getElementById("start");
const page = document.getElementById("page1");
const music = document.getElementById("music");
let selectedColor = "#ff1493";

start.onclick = () => {
  document.querySelector(".loading").style.display = "none";
  page.classList.remove("hidden");
  music.play();
}

// Color picker functionality
document.querySelectorAll(".color-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    selectedColor = this.dataset.color;
  });
});

// Generate QR Code
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const resetBtn = document.getElementById("resetBtn");
const qrInput = document.getElementById("qrInput");
const qrContainer = document.getElementById("qrcode");

let currentQR = null;

generateBtn.addEventListener("click", function() {
  const inputValue = qrInput.value.trim();
  
  if (!inputValue) {
    alert("Please enter a URL or message!");
    return;
  }
  
  // Clear previous QR code
  qrContainer.innerHTML = "";
  
  // Generate new QR code with selected color
  currentQR = new QRCode(qrContainer, {
    text: inputValue,
    width: 300,
    height: 300,
    colorDark: selectedColor,
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  
  // Show download button after generation
  setTimeout(() => {
    downloadBtn.style.display = "inline-block";
  }, 500);
});

// Download QR Code
downloadBtn.addEventListener("click", function() {
  const canvas = qrContainer.querySelector("canvas");
  if (canvas) {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qr-love.png";
    link.click();
  }
});

// Reset
resetBtn.addEventListener("click", function() {
  qrContainer.innerHTML = "";
  qrInput.value = "";
  downloadBtn.style.display = "none";
  selectedColor = "#ff1493";
  document.querySelectorAll(".color-btn").forEach((b, idx) => {
    if (idx === 2) b.classList.add("active");
    else b.classList.remove("active");
  });
});

// Hide buttons initially
downloadBtn.style.display = "none";

// Confetti effect
function confetti() {
  const duration = 2000;
  const animationEnd = Date.now() + duration;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

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
