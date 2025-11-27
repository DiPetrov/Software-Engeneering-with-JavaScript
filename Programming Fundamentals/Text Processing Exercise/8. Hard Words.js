function solve(input) {

    let letter = input[0];
    let wordsToFill = input[1];

    let letterWords = letter.split(/[.,!?:]? /);
    let templates = letterWords.filter(word => word.includes('_'));

    for (let template of templates) {
        let rightWord = wordsToFill.find(word => word.length === template.length);
        letter = letter.replace(template, rightWord);
    }
    console.log(letter);
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so' +
' _______ things happened. My dad bought me a sled. Mom started a new job as a __________. ' +
'My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on ' +
'your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);