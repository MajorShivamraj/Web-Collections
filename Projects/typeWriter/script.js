const message="Jai Shree Jaganath, Prabhu Mai apke darshan ko anna chahta hu prabhu Shri Jaganath Khatu Shyam Baba. Hare ke sahare Khatu Shyam Baba hamare prabhu apki kripa hojaye bighde kaam bane sab baba. ";

const display=document.getElementById("text");
let timeout=[];
const typewriter=()=>{
        //code for resetting the timeout...
        timeout.forEach(element => {//setting the timeout...
            clearTimeout(element)
        });
        timeout=[];
        
    display.textContent="";
    for(let i=0;i<message.length;i++){
        (function(x){
            const timeoutId = setTimeout(()=>{
                display.textContent+=message.charAt(x);
            },(x)*200);

            timeout.push(timeoutId);

        })(i)//Annonomous function IIFE(immediately invoked function) stores the value of i as the for loop will end very fast but to keep track of the index we use annnamous classes....
    }
}

document.getElementById("btn").addEventListener("click",typewriter);