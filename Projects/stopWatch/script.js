function startTimerFunction(){
    for(let i=0;i<60;i++){
        (function(count){
            setTimeout({},i)
        })(i);
    }
}
const startbtn=document.getElementById("start").addEventListener("click",startTimerFunction);