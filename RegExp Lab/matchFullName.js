function solve([input]){


    let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let result = input.match(patern)
    console.log(result.join(' '))
}

solve(['ivan ivanov, Ivan Testov, ivan Ivanov, IVan Ivanov, Ivan Ivanov, Ivan	Ivanov'])