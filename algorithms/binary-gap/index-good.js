function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (isNaN(N)) {
    return 0;
  }

  let t = N.toString(2);

  let matched = t.match(/10+/g);

  if (!matched) return 0;

  if (matched.length >= 1 && t[t.length - 1] === "0") {
    matched.pop();
  }

  let maxLength = matched.reduce((acc, val) => {
    if (val.length - 1 > acc) acc = val.length - 1;
    return acc;
  }, 0);

  return maxLength;
}
