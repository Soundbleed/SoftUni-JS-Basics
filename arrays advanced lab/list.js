function list(arr){

    let sorted = arr.sort()
    for (i = 0; i < sorted.length; i++){
        sorted[i] = `${i + 1}.${sorted[i]}`
    }
    console.log(sorted.join("\n"))

}

list(["Potatoes", "Tomatoes", "Onions", "Apples"])