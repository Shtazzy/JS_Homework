// Task #1

var arr = [-1, 0, 2, 34, -2];

var positiveNumbers = arr.filter(function(numbers){
    return numbers > 0;
})

console.log(positiveNumbers);



// Task #2

var arr = [-1, 0, 2, 34, -2];

var firstPositiveNumber = arr.find(function(number){
    return number >= 0;
})

console.log(firstPositiveNumber);



// Task #3

function isPalindrome(word) {
    word = word.toLowerCase();
    var reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

console.log(isPalindrome('Привет'));



// Task #4

function areAnagrams(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    var sortedWord1 = word1.split('').sort().join('');
    var sortedWord2 = word2.split('').sort().join('');
    return sortedWord1 === sortedWord2;
}

console.log(areAnagrams('лупа', 'пупа'));



// Task #5

function divideArr(arr, len) {
    var arrays = [];
    for (var i = Math.ceil(arr.length / len); i > 0; i--) {
        arrays.push(arr.splice(0, len));
    }
    return arrays;
}

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4));