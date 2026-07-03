const start=document.getElementById("start");

const page=document.getElementById("page1");

const music=document.getElementById("music");

start.onclick=()=>{

document.querySelector(".loading").style.display="none";

page.classList.remove("hidden");

music.play();

}

// Photo zoom functionality
document.querySelectorAll(".gallery-img").forEach(img=>{

img.onclick=()=>{

img.classList.toggle("zoom");

}

});

const text = `

hbd yaa yang ke 17 🤍

semoga makin bahagia makin sehat

semoga semua yang diinginin pelan pelan tercapai

semoga tahun ini jadi tahun yang seru

banyak hal baik dateng ke hidup kamu

jangan lupa sekarang udah bisa bikin ktp wkwkwk

makasih yaa udah jadi diri kamu sendiri

semoga kita bisa terus bikin banyak kenangan baru bareng

happy birthday vanesa 🤍

`;

const typing = document.getElementById("typing");

let i = 0;

function type(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(type,40);

}

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
        heartEl.textContent = "🤍";
        heartEl.style.left = randomInRange(0, window.innerWidth) + "px";
        heartEl.style.fontSize = randomInRange(16, 32) + "px";
        heartEl.style.animationDuration = randomInRange(8, 12) + "s";
        heart.appendChild(heartEl);
        
        setTimeout(() => heartEl.remove(), 12000);
      }
    });
  }, 250);
}

window.onload=()=>{
  setTimeout(type,1200);
  setTimeout(confetti,3000);
};
