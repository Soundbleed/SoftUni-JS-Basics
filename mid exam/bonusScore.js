function solve(arr) {
    let students = Number(arr.shift())
    let lectures = Number(arr.shift())
    let intialBonus = Number(arr.shift())

    let studentsList = []
    arr.forEach(element => {
        let obj = {}
        obj.attended = Number(element)
        obj.bonus = Math.round((obj.attended / lectures) * (5 + intialBonus))
        studentsList.push(obj)
    });

    studentsList.sort((a,b) => b.bonus- a.bonus)
    console.log(`Max Bonus: ${studentsList[0].bonus}.`)
    console.log(`The student has attended ${studentsList[0].attended} lectures.`)

}

solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])