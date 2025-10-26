const scrn= document.querySelector(".screen");

//this is for showing the numbers on the screen....
let str="",dup="";
let res;
let previous=0;
let add=0,sub=0,mult=0,divi=0;


//all buttons code here....

//here we are using string to show the data over the screen and also we used the dup for actual calculations converting it into a parseInt method...

for(let i=0;i<=9;i++){
    document.querySelector(`.box${i}`).addEventListener("click",function(){
        str=str.concat(i);
        dup=dup.concat(i);
        scrn.textContent=str;
    });
}

// Operator code here....

//here before insertion of the operator we store all the content of string str in previous in parseInt form and then add the operator and then we again set the dup to empty string and then get the rest of the num and when pressed equal we get the answer...

document.querySelector(".box_minus").addEventListener("click",function(){
    previous=parseInt(str);
    str=str.concat(" - ");
    dup="";
    sub=1;
    scrn.innerHTML=str;
});
document.querySelector(".box_plus").addEventListener("click",function(){
    previous=parseInt(str);
    str=str.concat(" + ");
    dup="";
    add=1;
    scrn.innerHTML=str;
});
document.querySelector(".box_mult").addEventListener("click",function(){
    previous=parseInt(str);
    str=str.concat(" * ");
    dup="";
    mult=1;
    scrn.innerHTML=str;
});
document.querySelector(".box_divide").addEventListener("click",function(){
    previous=parseInt(str);
    str=str.concat(" / ");
    dup="";
    divi=1;
    scrn.innerHTML=str;
});

//Function here to call....

//functions defined for different operations...

function add_num(a,b){
    return a+b;
}

function sub_num(a,b){
    return a-b;
}

function mult_num(a,b){
    return a*b;
}

function divi_num(a,b){
    if(b==0){
        return "Invalid";
    }
    return a/b;
}


//This is the equal result code here....

//Code for equal Button here we chec the condition through if statement that if x=1 etc. then the perticular condition is performed...

document.querySelector(".equal").addEventListener("click",function(){
    if(add==1){
        res=add_num(previous,parseInt(dup));
        scrn.textContent=res;
    }
    else if(sub==1){
        res=sub_num(previous,parseInt(dup));
        scrn.textContent=res;
    }
    else if(mult==1){
        res=mult_num(previous,parseInt(dup));
        scrn.textContent=res;
    }
    else if(divi==1){
        res=divi_num(previous,parseInt(dup));
        scrn.textContent=res;
    }
});

//This is the Undo Code here....
//here if we have to undo if any wrong entry is being entered on the screen...
document.querySelector(".box_undo").addEventListener("click", function () {
    if (str.length > 0) {
        str = str.slice(0, -1);  
    }
    if (dup.length > 0) {
        dup = dup.slice(0, -1); 
    }
    scrn.textContent = str || "0"; 
});

// This is the reset code here....

//This is the reset Query where the str anf dup both are set to empty so that new inputs can be taken and also add,sub,mult,divi are set=0 so that no previous 1 assigned value remain assigned to any of it and the equals operation happens....
document.querySelector(".reset").addEventListener("click",function(){
    scrn.innerHTML=0;
    str="";
    dup="";
    add=sub=mult=divi=0;
});

//beautyfull....

document.querySelector(".container").addEventListener("mouseover",function(){
    document.querySelector("body").style.backgroundColor="blueviolet";
});
document.querySelector(".container").addEventListener("mouseout",function(){
    document.querySelector("body").style.backgroundColor="white";
});
