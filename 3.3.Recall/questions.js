let selectElementsStartingWithA = (array) => {
    return array.filter((str) => str.startsWith("a"));
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => /^[aeiou]/i.test(str));
}

let removeNullElements = (array) => {
    return array.filter(x => x !== null)
};

let removeNullAndFalseElements = (array) => {
    return array.filter(x => x !== null && x !== false)
}

let reverseWordsInArray = (array) => {
    return array.split("").reverse().join("").split(" ").reverse().join(" ");
}

let everyPossiblePair = (array) => {    
    let results = [array];
    
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            results.push(`${array[i]}${array[j]}`);
        }
    }

    return results;
}

let allElementsExceptFirstThree = (array) => {
    array.splice(0,3);
    return array;
}

let addElementToBeginning = (array, element) => {
    array.unshift(1);
    return array;
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {
    x = Math.floor(string.length - string.length % 2) / 2;
    return string.substring(0, x);
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    var len = array.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (array[i] !== array[len - i]) {
            return mid + 1;
        }
    }
}

let shortestWord = (array) => {
    return array.reduce((a, b) => a.length <= b.length ? a : b);
}

let longestWord = (array) => {
    return array.sort(function(a, b) {return b.length - a.length})[0];
}

let sumNumbers = (array) => {
    let sum = array.reduce((a, b) => {
        return a + b;
    })
    return sum;
}

let repeatElements = (array) => {
    return Array(2).fill(array).join('') 
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    return array.reduce((a,b) => a + b, 0) / array.length;;
}

let getElementsUntilGreaterThanFive = (array) => {
    let newArr = array.filter((number) => number <= 5);
    newArr =  [...new Set(newArr)];
    return newArr;
}

let convertArrayToObject = (array) => {
    return Object.assign({}, array);
}

let getAllLetters = (array) => {
    return array.length === 1 && array.match(/[a-z]/i);
}

let swapKeysAndValues = (object) => {
    return Object.fromEntries(Object.entries(object).map(a => a.reverse()));
}

let sumKeysAndValues = (object) => {
    var sumVal = Object.values(object).reduce((v, k) => parseFloat(v + k));
    var sumKeys = Object.keys(object).reduce((a, b) => parseFloat(a + b));
    result = sumVal+sumKeys
    return result;
}

let removeCapitals = (string) => {
    return 
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString("fr-BE") ;
}

let getDomainName = (string) => {
    return string.substring(string.lastIndexOf("@")+1)
}

let titleize = (string) => {
    return 
}

let checkForSpecialCharacters = (string) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
}
let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    
}

let findAnagrams = (string) => {
    return string.toLowerCase().split('').sort().join('');
}

let convertToCelsius = (number) => {
    return Math.ceil((number - 32) * 5/9);
}

let letterPosition = (array) => {
    function alphabetPosition(array) {
        return [...array].map(a => parseInt(a, 36) - 9).filter(a => a >= 0);
    }
    return alphabetPosition(array)
}