const solution = A => {
  return findUnpairElem(A);
};

// complexity --> O(N) or O(N*log(N))
const findUnpairElem = A => {
  let numberKeys = {};
  for (let number of A) {
    if (!numberKeys[number]) {
      numberKeys[number] = 1;
    } else {
      delete numberKeys[number];
    }
  }
  return +Object.keys(numberKeys)[0];
};

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
