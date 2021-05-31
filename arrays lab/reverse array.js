function solve (n,numbers){
    let cutArray = []
    let resultArray = []
    for (let i = 0; i < n; i++){
        cutArray.push(numbers[i])
    }

    for (i = n-1; i >=0; i--){
        resultArray.push(cutArray[i])
    }

    console.log(resultArray.join(' '));
}

solve (3, [10, 20, 30, 40, 50])