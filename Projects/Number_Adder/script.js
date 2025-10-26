let addbut=document.getElementById("button");
addbut.addEventListener("click",function(){
    let input1=document.getElementById("inp1").value;
    let input2=document.getElementById("inp2").value;
    let result = document.getElementById("result");
    let sum=parseFloat(input1)+parseFloat(input2);

    result.innerHTML=`<i id="icon3" class="fa-solid fa-equals"></i>`+" "+ sum;
});
