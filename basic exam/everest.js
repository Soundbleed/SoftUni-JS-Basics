function climbEverest(arr){

    let start = 5364
    let end = 8848
    let days = 1
    let i = 0
    let action = arr[i]
    let success = false

    while (action != 'END'){
        if (action === 'Yes'){
            days++
        }
        if (days > 5){
            break;
        }
        i++
        let climbed = Number(arr[i])
        start += climbed
        if (start >= end){
            console.log(`Goal reached for ${days} days!`)
            success = true
            break;
        }


        i++
        action = arr[i]
        
    }

    if (!success){
        console.log('Failed!')
        console.log(start)
    }

}

climbEverest([
    'Yes', '535', 'Yes',
    '849', 'Yes', '499',
    'Yes', '400', 'Yes',
    '500'
  ])