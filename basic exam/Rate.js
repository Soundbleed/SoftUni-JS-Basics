function calculateRate(sum, months){

    let simpleInterestTotal = sum
    let complexInterestTotal = sum 

    for (let i = 0; i < months; i++){
        simpleInterestTotal += sum * 0.03
    }

    for (let i = 0; i < months; i++){
        complexInterestTotal = complexInterestTotal + (complexInterestTotal * 0.027)
    }

    console.log(`Simple interest rate: ${simpleInterestTotal.toFixed(2)} lv.`)
    console.log(`Complex interest rate: ${complexInterestTotal.toFixed(2)} lv.`)

    if (simpleInterestTotal > complexInterestTotal){
        console.log(`Choose a simple interest rate. You will win ${(simpleInterestTotal - complexInterestTotal).toFixed(2)} lv.`)
    } else {
        console.log(`Choose a complex interest rate. You will win ${(complexInterestTotal - simpleInterestTotal).toFixed(2)} lv.`)
    }

}

calculateRate(500,6)