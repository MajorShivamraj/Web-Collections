//when we click the button it is going to return the result.

document.getElementById("checkbutton").addEventListener("click",function(){
    //reading the value...
    const agevalue= parseInt(document.getElementById("age").value);
    const result= document.getElementById("result");

    result.innerHTML="";
    //evaluating the value..

    if(isNaN(agevalue) || agevalue<0){
        result.innerHTML+=("Invalid Input <br>");
        return;
    }
    if(agevalue>=18){
        result.innerHTML+=("You are eligible to Drive <br/>");
    }
    else{
        result.innerHTML+=("You are not Eligible to Drive Yet <br/>");
    }

    if(agevalue>=21){
        result.innerHTML+=("You are eligible to Drink Alcohol <br/>");
    }
    else{
        result.innerHTML+=("You are not Eligible to Drink Alcohol Yet <br/>");
    }
    
    if(agevalue>=18){
        result.innerHTML+=("You are eligible to vote <br/>");
    }
    else{
        result.innerHTML+=("You are not Eligible to vote Yet <br/>");
    }

    
    

    
    
})