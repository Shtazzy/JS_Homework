// Task #1

function mapNamesToObjects(arrNames) {
    return arrNames.map(function (name) {
        return {name: name};
    })
}

var arrNames = ['Κύριλλος', 'Μεθόδιος'];

console.log(mapNamesToObjects(arrNames));



// Task #2

function numbersToTime(arrTime) {
    return 'Текущее время : ' + arrTime.reduce(function (sum, partOfTime) {
        return sum + ' : ' + partOfTime;
    });
}

var arrTime = ['00', '13', '37'];

console.log(numbersToTime(arrTime));



// Task #3

var vowels = ['a', 'e', 'y', 'u', 'i', 'o'];

var sampleText = "Sample Text";

function countVowels(sampleText) {
    return sampleText.split('').filter(function (letter) {
        letter = letter.toLowerCase();
        return vowels.some(function (vowel) {
            return vowel === letter;
        });
    }).length;
}

console.log(countVowels(sampleText));



// Task #4

var text = "Sample Text. Stop, u violated the law! Lorem ipsum?";

function countSentencesLetters(text) {
    text.split(/[.!?]/).forEach(function (sentence) {
        if (sentence === '') {
            return;
        }
        var len = sentence.split('').filter(function (symbol) {
            return symbol !== ' ';
        }).length;
        console.log('// ' + sentence + ': Letters quantity is: ' + len);
    });
}

countSentencesLetters(text);