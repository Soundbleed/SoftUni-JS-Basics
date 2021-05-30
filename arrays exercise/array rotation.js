function solve (arr,n) {


    for (let i = 0; i < n; i++){
        let cut = arr.shift()
        arr.push(cut)
    }

    console.log(arr.join(' '));

}

solve ([51, 47, 32, 61, 21], 6)