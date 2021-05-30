function calculatePower(playerCount, playerPower, illidanHealth){

    let combinedPower = playerCount * playerPower

    if (combinedPower >= illidanHealth){
        console.log(`Illidan has been slain! You defeated him with ${combinedPower - illidanHealth} points.`)
    } else {
        console.log(`You are not prepared! You need ${illidanHealth - combinedPower} more points.`)
    }

}

calculatePower(25,
    200,
    2000
    )