document.addEventListener("DOMContentLoaded",()=>{
    function calculateSplit(){
            
        //selecting the entered input from the users...
        const billAmountValue = parseFloat(document.getElementById("bill").value);
        const serviceValue = parseFloat(document.getElementById("service").value);
        const numberOFPeopleValue = parseInt(document.getElementById("people").value);

        //input checks performed here...
        if(isNaN(billAmountValue) || billAmountValue<=0){
            alert("Enter a valid Bill amount.");
            return;
        }
        if(numberOFPeopleValue<1){
            alert("Select atleast 1 person.");
            return;
        }

        //creating elements for the result showcasing...
        const tipAmountResult = document.getElementById("tipAmount");
        const totalAmountResult = document.getElementById("totalAmount");
        const perPersonResult = document.getElementById("perPerson");
        const tipPerPersonResult = document.getElementById("tipPerPerson");
        
        //calculation....
        const tipAmount=(billAmountValue*serviceValue);
        const totalAmount=(billAmountValue+tipAmount);
        const perPerson=(totalAmount/numberOFPeopleValue);
        const tipPerPerson=(tipAmount/numberOFPeopleValue);

        tipAmountResult.textContent=`$${tipAmount.toFixed(2)}`;
        totalAmountResult.textContent=`$${totalAmount.toFixed(2)}`;
        perPersonResult.textContent=`$${perPerson.toFixed(2)}`;
        tipPerPersonResult.textContent=`$${tipPerPerson.toFixed(2)}`;
    }

    document.getElementById("calculateBtn").addEventListener("click",calculateSplit);

    //Getting values based on the input imidiately...
    const allEl=document.querySelectorAll("input,select").forEach(element => {
        element.addEventListener("input",calculateSplit);
    });
})