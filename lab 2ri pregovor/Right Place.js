function Hello(word, character, testword) {

    let newWord = ""

    for (let i = 0; i < word.length; i++) {

        if (word[i] === '_') {
            newWord += character
        } else {
            newWord += word[i]
        }
    }

    if (newWord === testword){
        console.log('Matched');
        
    } else{
        console.log('Not Matched');
    }

}

Hello('Str_ng', 'I', 'Strong')