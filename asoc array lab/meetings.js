function solve(input){

    let calendar = {}

    for (line of input){
        let [day, name] = line.split(" ");
        if(calendar.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
            
        }else {
            calendar[day] = name
            console.log(`Scheduled for ${day}`)
        }
        
    }

    for(key in calendar){
        console.log(`${key} -> ${calendar[key]}`)
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)