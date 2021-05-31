function Hello (start){

    let total = 0
    let days = 0

    for (let i = start; i >= 100; i-= 10){
        days++
        if (i >=26){
            let spiceDay = i - 26
            total += spiceDay
        }
    }
    if (total >=26){
        total-= 26
    }
    console.log(days);
    console.log(total);
}

Hello (100)