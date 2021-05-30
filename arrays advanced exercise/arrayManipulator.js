function manipulate(arr, commands) {

    for (command of commands) {
        if (command.includes("add") && !command.includes("Many")) {
            let index = command.split(" ").map(Number)[1]
            let element = command.split(" ").map(Number)[2]
            addElement(arr, index, element)
        } else if (command.includes("Many")) {
            let elements = command.split(" ")
            elements.shift()
            let index = Number(elements.shift())
            elements = elements.map(Number)
            addMultiple(arr, elements, index)
        } else if (command.includes("contains")) {
            let check = Number(command.split(" ")[1])
            console.log(arr.indexOf(check))
        } else if (command.includes("remove")) {
            let index = Number(command.split(" ")[1])
            arr.splice(index, 1)
        } else if (command.includes("shift")) {
            let shifting = Number(command.split(" ")[1])
            toShift(arr, shifting)
        } else if (command.includes("sumPairs")) {
            sumPairs(arr)
        } else if (command.includes("print")){
            console.log('[ ' + arr.join(', ') + ' ]');
            break;
        }
    }

    function addElement(array, i, el) {
        array.splice(i, 0, el)

    }
    function addMultiple(array, elementArray, index) {
        for (i = 0; i < elementArray.length; i++) {
            let element = elementArray[i]
            array.splice(index + i, 0, element)
        }
    }
    function toShift(array, num) {
        let pushing = array.splice(0, num)
        for (element of pushing) {
            array.push(element)
        }
    }
    function sumPairs(array) {
        let result = []
        while (array.length > 1) {
            let i = 0
            let first = Number(array.shift(array[i]))
            let second = Number(array.shift(array[i]))
            result.push(first + second) 
        }
        if(array.length === 1){
            result.push(array[0])
        }
        arr = result
    }

}

// function solve3(arr, commands) {
//     let newArr = [];
//     for (let el of commands) {
//         let [command, index, element] = el.split(' ');
//         switch (command) {
//             case 'add':
//                 arr.splice(index, 0, +element);
//                 break;
//             case 'addMany':
//                 let currentEl = 0;
//                 let removeFirst = el.split(' ');
//                 for (let i = removeFirst.length - 1; i >= 2; i--) {
//                     currentEl = removeFirst[i];
//                     arr.splice(index, 0, +currentEl);
//                 }
//                 break;
//             case 'contains':
//                 // if (arr.indexOf(+index) !== -1) {
//                 //     console.log('0');
//                 // } else {
//                 //     console.log('-1');
//                 // }
//                 console.log(arr.indexOf(+index));
//                 break;
//             case 'remove':
//                 arr.splice(index, 1);
//                 break;
//             case 'shift':
//                 let position = +index;
//                 for (let i = 0; i < position; i++) {
//                     let firstEl = arr.shift();
//                     arr.push(firstEl);
//                 }
//                 break;
//             case 'sumPairs':
//                 // if (arr.length % 2 === 0) {
//                     let els = arr.reduce(function(total, el, index) {
//                         if (index % 2 === 0) {
//                             total.push(+arr[index] + (+arr[index + 1] || 0));
//                         }
//                         return total;
//                     }, []);
//                     arr = els;
//                 // }
//                 break;
//             case 'print':
//                 for (let el of arr) {
//                     newArr.push(el);
//                 }
//                 break;
//         }
//     }
//     // console.log(newArr);
//     console.log('[ ' + newArr.join(', ') + ' ]');
// }

manipulate([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"]
)