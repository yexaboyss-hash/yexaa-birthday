const start=document.getElementById("start");

const page=document.getElementById("page1");

const music=document.getElementById("music");

start.onclick=()=>{

document.querySelector(".loading").style.display="none";

page.classList.remove("hidden");

music.play();

}
document.querySelectorAll(".photos img").forEach(img=>{

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

window.onload=()=>{setTimeout(type,1200);setTimeout(confetti,3000);};