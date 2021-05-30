function solve(input) {

    let students = new Map;

    for (line of input) {
        let tokens = line.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number)
        if (students.has(name)){
            let existing = grades;
            for(grade of existing){
                students.get(name).push(grade);
            }
        }else {
            students.set(name, grades);
        }
        
    }

    let sorted = Array.from(students)
    sorted.sort((a, b) => {
        let averageA = a[1].reduce((p,c) => p + c, 0);
        let averageB = b[1].reduce((p,c) => p + c, 0);

        return averageA - averageB;
    })

    let sortedStudents = new Map;

    for (element of sorted){
        sortedStudents.set(element[0], element[1])
    }

    for (let [key, value] of sortedStudents){
        console.log(`${key}: ${value.join(" ")}`)
    }

}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)