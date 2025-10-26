const btn1=document.getElementById("box1");
const btn2=document.getElementById("box2");
const btn3=document.getElementById("box3");
const body = document.querySelector("body");
const title = document.querySelector("h1");

btn1.addEventListener('click',function(){
    const audio = new Audio("Audio/Ambition.mp3");
    audio.play();
});

btn2.addEventListener('click',function(){
    const audio = new Audio("Audio/Lazyday.mp3");
    audio.play();
});

btn3.addEventListener('click',function(){
    const audio = new Audio("Audio/Ambition.mp3");
    audio.play();
});

