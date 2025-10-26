console.log("Hello World this is my first nodejs code" );

const name = "Shivamraj"

const currentTime = new Date();
const hours = currentTime.getHours();
console.log(hours);

if(hours<12){
    console.log(`Good Morning, ${name} welcome to Nodejs`);
    
}
else if(hours>12 && hours<18){
    console.log(`Good AfterNoon, ${name} welcome to Nodejs`);
    
}
else{
    console.log(`Good Evening, ${name} welcome to Nodejs`);
    
}