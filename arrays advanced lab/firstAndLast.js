function calculate(arr) {
    let first = Number(arr[0])
    let last = Number(arr.pop())

    console.log(first + last)
}

calculate(['30', '40', '50'])