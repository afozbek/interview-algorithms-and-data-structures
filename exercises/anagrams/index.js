// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    const arrA = doStuff(stringA);
    const arrB = doStuff(stringB);
    return arrA === arrB;
}
function doStuff(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;

//JavaScript RegExp with replace
//First we replace the string with no white space and no other characters.
//Then lower the string and compare the strings by its keys
// function anagrams(stringA, stringB) {
//     let obj1 = buildCharMap(stringA);
//     let obj2 = buildCharMap(stringB);
//     //Object.keys returns an array of keys
//     if (Object.keys(obj1).length === Object.keys(obj2).length) {
//         for (let j in obj1) {
//             if (obj1[j] !== obj2[j]) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     return false;
// }

// function buildCharMap(str) {
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase())
//         charMap[char] = charMap[char] + 1 || 1;
//     return charMap;
// }