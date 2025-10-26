const countdownTimer = ()=>{
    const time=parseInt(document.getElementById("timerInput").value);
    const result=document.getElementById("result");

    if(isNaN(time) || time<=0){
        result.textContent="Please Enter Valid Number";
        return;
    }
    // result.textContent=`Time Left: ${time} Seconds`
    for(let i=time;i>=0;i--){ 
        (function(count){
            setTimeout(()=>{
                if(count>0){
                    result.textContent=`Time Left: ${count} Seconds`;
                }
                else{
                    result.textContent=`Time Up!`;
                }
            },(time-count)*1000);
        })(i);
    }
};

document.getElementById("startBtn").addEventListener("click",countdownTimer);