function solve(input){
   let i = input.lastIndexOf('.')
   let extension = input.substring(i + 1);
   let fileName = input.slice(input.lastIndexOf('\\') + 1, i)

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)
}

solve('C:\\Projects\\Data-Structures\\LinkedList.cs')