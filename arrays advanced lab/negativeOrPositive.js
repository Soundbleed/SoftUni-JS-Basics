function arrange (arr){

    let newArr = []

    for (element of arr){
        if (element < 0){
            newArr.unshift(element)
        } else if (element >= 0){
            newArr.push(element)
        }
    }

    console.log(newArr.join('\n'))

}

arrange ([7, -2, 8, 9])