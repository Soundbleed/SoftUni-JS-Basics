function find(arr){
    let sorted = arr.sort((a,b) => {return a-b})
    let result = sorted.slice(0,2)
    console.log(result.join(" "))

}

find([30, 15, 50, 5])