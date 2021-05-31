function build(array) {
    array = array.map(Number)
    let limit = 30
    let finalCost = 0
    let arrDailyConcreate = []
    let arr = array.filter(x => x < 30)
    let crews = arr.length
    while (crews !== 0) {
        let dailyConcreate = crews * 195
        arrDailyConcreate.push(dailyConcreate)
        finalCost += dailyConcreate * 1900
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== limit){
                arr[i]++
                if(arr[i] === 30){
                    crews--
                }
            }
        }
    }
    console.log(arrDailyConcreate.join(", "))
    console.log(`${finalCost} pesos`)
}

build([21, 25, 28])