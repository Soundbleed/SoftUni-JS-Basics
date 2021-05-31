function Hello (num,fixed){
    if (fixed > 15){
        fixed = 15
    }
    let bla = num.toFixed(fixed)
    console.log(parseFloat(bla))
}

Hello ( 3.4, 9)