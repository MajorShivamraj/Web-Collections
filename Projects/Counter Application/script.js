const counterel = document.getElementById("counter");
let count=0;

// Code for increase Function...
document.getElementById("incbtn").addEventListener("click",function(){
    count++;
    //There are 2 ways to do it
    //1) InnerHtml
    //counter.innerHTML=count;
    //2) text content
    //counter.textcontent=count;
    counterel.textContent = count;
});

document.getElementById("decbtn").addEventListener("click",function(){
    count--;
    counterel.textContent=count;
});

document.getElementById("incbytenbtn").addEventListener("click",function(){
    count=count+10;
    counterel.textContent=count;

});

document.getElementById("reset").addEventListener("click",function(){
    count=0;
    counterel.textContent=count;
});
const bodyel = document.querySelector("body")
const cont = document.querySelector(".container");
cont.addEventListener("mouseover",function(){
    bodyel.style.backgroundColor="blueviolet";
});
cont.addEventListener("mouseout",function(){
    bodyel.style.backgroundColor="white";
    
});