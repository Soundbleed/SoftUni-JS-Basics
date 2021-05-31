function sort(arr) {
    arr.sort(customCompare)
    function customCompare(a, b) {
        if (a.length > b.length){
            return 1
        }else if (a.length < b.length){
            return -1
        } else {
            return a.localeCompare(b)
        }
    }
    console.log(arr.join("\n"))

}

sort(["Isacc", "Theodor","Jaak", "Jack", "Harrison", "George"])