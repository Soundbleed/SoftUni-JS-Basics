function solve (array1, array2){
    let isEqual = true;
    let result = 0
    let differenceIndex;

    for (index in array1){ 
            if (array1[index] !== array2[index]){
                differenceIndex = index
                isEqual = false;
                break;
            } else{
                result+= Number(array2[index]);
            }
    }

    if (isEqual){
        console.log(`Arrays are identical. Sum: ${result}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${differenceIndex} index`);
    }

}

solve (['1','2','3','4','5'], ['1','2','4','4','5'])