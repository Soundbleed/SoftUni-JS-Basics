function solve(n){
    let mass = []
    function firstRow(number){
        for (i = 0; i < number; i++){
            mass.push(number)
        }
        return mass
    }

    firstRow(n)
    for (i = 0; i < n; i++){
        console.log(mass.join(" "))
    }

}

solve(7)