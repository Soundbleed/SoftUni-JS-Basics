function Hello(centuries) {

    let years = Math.round(centuries * 100)
    let days = Math.trunc(years * 365.2422)
    let hours = Math.round(days * 24)
    let minutes = Math.round(hours * 60)

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);


}

Hello(1)