function monthyPayment(p,annualRate,years){
    //loan Amount -> p
    //annual Rate -> annualRate
    //loan terms -> years
    //monthlyrate -> r
    //totalmonths -> n

    //1.Convert interest rate from annual to monthly:
    const r= annualRate/1200;

    //2.Calculate total number of monthly payments:
    const n=years*12;

    //3. Apply amortization formula:
    const result=(p*r*((1+r)**n))/(((1+r)**n)-1);
    return result;
}

function totalPayment(years,monthlyPayment){
    //1.Calculate total number of monthly payments:
    const n=years*12;

    const totalPayment = monthlyPayment*n;

    return totalPayment;
}

function totalInterest(totalPayment,p){
    const result = totalPayment-p;
    return result;
}

const smartLoanCalculation=()=>{

    //Value Catching of Element input from user.....
    const LoanAmount=parseFloat(document.getElementById("loanAmount").value);
    const annualRate=parseFloat(document.getElementById("annualRate").value);
    const loanTerm=parseFloat(document.getElementById("loanTerm").value); 

    //result display screen elements.....
    const monthlyPayResultEl=document.getElementById("monthlyPayResult");
    const totalPayResultEl=document.getElementById("totalPayResult");
    const totalIntrestResultEl=document.getElementById("totalIntrestResult");

    //all calculations function call.....
    const monthlyPaymentEl=monthyPayment(LoanAmount,annualRate,loanTerm);
    const totalPaymentEl=totalPayment(loanTerm,monthlyPaymentEl);
    const totalInterestEl=totalInterest(totalPaymentEl,LoanAmount);

    //now printing the final solution with animation movement.....
    animation(monthlyPayResultEl,0,monthlyPaymentEl,1000);
    animation(totalPayResultEl,0,totalPaymentEl,1000);
    animation(totalIntrestResultEl,0,totalInterestEl,1000);    

}

function animation(element,start,end,duration){
    const startTime=performance.now();

    function update(currentTime){
        const elapsed = currentTime-startTime;
        const progress = Math.min(elapsed/duration,1);
        const current = start+(end-start)*progress;
        element.textContent = current.toFixed(2);
        if(progress<1){
        requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}



document.getElementById("calculateLoanBtn").addEventListener("click",smartLoanCalculation);