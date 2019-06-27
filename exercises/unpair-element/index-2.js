/**
 *
 * @param {Array} A An array of odd numbers
 * @returns {Number}
 */
function solution(A) {
  //O(N^2)
  if (A.length === 1) {
    return A[0];
  }
  let myList = createPairList(A);

  return findUnpairedElem(myList);
}

/**
 *
 * @param {Array} A an Array of odd numbers
 * @returns {Object} count of the number's existence
 */

const createPairList = A => {
  let numberKeys = {};
  for (let number of A) {
    if (!numberKeys[number]) {
      numberKeys[number] = 1;
    } else {
      numberKeys[number]++;
    }
  }
  return numberKeys;
};

/**
 *
 * @param {Object} L My Number List
 * @returns {Number} My unpaired number
 */

const findUnpairedElem = L => {
  for (let key in L) {
    if (L[key] === 1) {
      return +key;
    }
  }
  return "We didn't find it";
};

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
