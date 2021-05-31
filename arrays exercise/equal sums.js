function solve(arr) {
    if (arr.length === 1) {
        console.log(0);
    }

    let noSum = true

    for (let i = 1; i < arr.length; i++){
        let leftSum = 0
        let rightSum = 0
        for (let j = 0; j < arr.length; j++){
            if (i > j){
                leftSum+=arr[j]
            } else if (i === j){
                continue;
            } else {
                rightSum+=arr[j]
            }
        }
        if (leftSum === rightSum){
            console.log(i)
            noSum = false
            break;
        }
    }
    if (noSum && arr.length !== 1){
        console.log('no');
    } 
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])