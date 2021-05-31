function Hello (mass){

    let username = mass.shift()
    let password = ""
    let attempt = 0

    for (let i = username.length - 1; i >= 0; i--){
        password+= username[i]
    }

    let command = mass.shift()
    while (password !== command){
        attempt++
        if (attempt === 4){
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`)
        command = mass.shift()
    }

    if (password === command){
        console.log(`User ${username} logged in.`)
    }

}

Hello (['Acer','login','go','let me in','bla'])