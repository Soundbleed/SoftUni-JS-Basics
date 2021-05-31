function Hello (n){

    for (let i = 0; i < n; i++){
        let leter = String.fromCharCode(97+i)
        for (let j = 0; j < n; j++){
            let leter2 = String.fromCharCode(97+j)
            for (let k = 0; k < n; k++){
                let leter3 = String.fromCharCode(97+k)
                console.log(`${leter}${leter2}${leter3}`);
            }
        }
    }

}

Hello (3)