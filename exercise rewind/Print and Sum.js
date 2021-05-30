function Hello(n1, n2) {
    let result = 0
    let printLn = ""
    for (n1; n1 <= n2; n1++) {
        printLn += n1 + " "
        result += n1
    }
    console.log (printLn)
    console.log (`Sum: ${result}`)
}

Hello(5, 10)