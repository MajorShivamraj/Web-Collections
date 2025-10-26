const btn1el=document.querySelector(".btn1");
const btn2el=document.querySelector(".btn2");
const btn3el=document.querySelector(".btn3");
const titlel=document.querySelector(".title");
const bodyel=document.querySelector("body");

// here we are going to assign that what actions be performed when the event is run..
// task performed by btn1

btn1el.addEventListener('click',function(){
    bodyel.style.backgroundColor="yellow";

});

//hover effect introduced starts here...
btn1el.addEventListener('mouseover',function(){
    btn1el.style.backgroundColor='pink';
});
btn1el.addEventListener('mouseout',function(){
    btn1el.style.backgroundColor="";
});

//hover effect introduced ends here...

//task performed by btn2.
btn2el.addEventListener('click',()=>{
    titlel.style.fontSize='60px';
});

//task performed by btn3...
btn3el.addEventListener('click',()=>{
    bodyel.style.backgroundColor="";
    titlel.style.fontSize='20px';
});