function solve(sentance) {

    wordArray = sentance.split(" ")
    let result = []
    let special = false

    for (word of wordArray) {
        if ((word[0] === "#" && word.length > 1)) {
            special = true
            for (let i = 1; i < word.length; i++) {
                let char = word[i]
                let code = char.charCodeAt()
                if (code < 65 || code > 90 && code < 97 || code > 122) {
                    special = false
                    break;
                }
            }
        } else {
            special = false;
        }
        if (special) {
            result.push(word.substring(1))
        }

    }
    console.log(result.join("\n"))

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')