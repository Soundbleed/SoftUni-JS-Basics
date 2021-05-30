function process(arr) {
    let filtered = arr.filter(x => x % 2 === 1)
    let doubled = filtered.map( x => x * 2)
    console.log(doubled.reverse())

}

process([10, 15, 20, 25])