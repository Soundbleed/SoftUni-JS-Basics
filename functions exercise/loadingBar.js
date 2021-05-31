function load(n){

    let newN = n/10
    let fill = 10 - newN
    let loadingBar = []

    pushSign(newN);
    if (newN !==10){
        fillArray(fill)
        console.log(`${n}% [${loadingBar.join("")}]`)
        console.log("Still loading...")
    } else {
        console.log("100% Complete!")
        console.log(`[${loadingBar.join("")}]`)
    }

    

    function pushSign(number){
        for (i = 0; i < number; i++){
            loadingBar.push("%")
        }
    }
    function fillArray(number){
        for (i = 0; i < number; i++){
            loadingBar.push(".")
        }
    }

}

load (100)