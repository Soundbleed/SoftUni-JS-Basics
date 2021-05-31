function solve (arr1, arr2){

    let newArray = []

    for (index in arr1){
        if (index % 2 === 0){
            newArray.push(Number(arr1[index]) + Number(arr2[index]) )
        } else {
            newArray.push(arr1[index] + arr2[index])
        }
    }

    console.log(newArray.join(' - '));
}

solve (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)