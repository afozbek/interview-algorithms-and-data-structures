// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//MySolution
function maxChar(str) {
    let splitted = str.split('');
    let max = 0; let maxIndex;
    for (let char of splitted) {
        let count = splitted.reduce((n, val) => {
            return n + (val === char)
        })
        if (count > max) {
            max = count;
            maxIndex = char;
        }
    }
    return str[maxIndex];
}
module.exports = maxChar;
