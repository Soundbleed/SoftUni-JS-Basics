function Hello (n){

    let times = n
    for (let i = 1; i <= times; i++){
        let printLn = ""
        for (let j = 1; j <= i; j++){
            printLn+= i + " "
        }
        console.log(printLn)
    }

}

Hello (3)