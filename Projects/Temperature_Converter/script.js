function Fahrenheit(a){
    return(a*(9/5))+32;
}

function Celsius(a){
    return(a-32)*(5/9);
}


document.getElementById("convertbtn").addEventListener("click",function(){
    let temp=parseInt(document.getElementById("tempInput").value);
    let choice=document.getElementById("tempOption").value;
    console.log(choice);
    let displayResult=document.getElementById("result");
    if(isNaN(temp)){
        displayResult.innerHTML="Enter a Valid Temperature."
        return;
    }
    if(choice=="F"){
        let result=Fahrenheit(temp).toFixed(2);
        displayResult.innerHTML= temp+"°C is equal to " +result+"F";
    }
    else if(choice=="C"){
        let result=Celsius(temp).toFixed(2);
        displayResult.innerHTML=temp+"F is equal to " +result+"°C";
    }
    
})