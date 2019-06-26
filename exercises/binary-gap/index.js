/**
 * @param {Number} N A decimal number
 */
function solution(N) {
  const gaps = findGaps(transformBinary(N));
  let longestGap = findLongestGap(gaps);
  console.log(longestGap);
  return longestGap;
}

/**
 * @param {Number} number
 * @returns Binary String
 */
const transformBinary = number => {
  return (number >>> 0).toString(2);
};

/**
 * @param {String} binaryString binary String
 * @returns {Array} returns gaps if exist
 */
const findGaps = binaryString => {
  //   let regex = /10+1/g;
  let regex = /1{0,1}0+1/g;
  let gaps = binaryString.match(regex);

  return gaps;
};

/**
 *
 * @param {Array} gaps gaps array
 * @returns {Number} max gap length
 */
const findLongestGap = gaps => {
  if (!gaps) {
    return 0;
  }
  let maxGapLength = 0;
  for (let gap of gaps) {
    let gapLength = gap.match(/0+/)[0].length;
    if (gapLength > maxGapLength) {
      maxGapLength = gapLength;
    }
  }
  return maxGapLength;
};

module.exports = solution;
