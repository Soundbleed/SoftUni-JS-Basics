function solve(arr) {

    let newArr = []
    for(element of arr){
        if (!newArr.includes(element)){
            newArr.push(element)
        }
    }

    console.log(newArr.join(" "))

}

solve([1, 2, 3, 4, 1])