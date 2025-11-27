function solve(input) {

    let fileFullName = input.split('\\').pop();
    let lastDotIndex = fileFullName.lastIndexOf('.');

    // let f = fileFullName.slice(0, lastDotIndex);
    // let ex = fileFullName.slice(lastDotIndex + 1);
    let f = fileFullName.substring(0, lastDotIndex);
    let ex = fileFullName.substring(lastDotIndex + 1);


    console.log(`File name: ${f}`);
    console.log(`File extension: ${ex}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');