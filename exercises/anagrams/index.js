// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//JavaScript RegExp with replace
//First we replace the string with no white space and no other characters.
//Then lower the string and compare the strings by its keys
function anagrams(stringA, stringB) {
    let obj1 = {}
    let obj2 = {}
    for (let i of stringA.replace(/[^\w]/g, '').toLowerCase())
        obj1[i] = obj1[i] + 1 || 1;
    for (let i of stringB.replace(/[^\w]/g, '').toLowerCase())
        obj2[i] = obj2[i] + 1 || 1;

    if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (let j in obj1) {
            if (obj1[j] !== obj2[j]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

// anagrams('MERhaba *!', 'habamer !*');
module.exports = anagrams;
