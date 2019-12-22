/*
* @author Abdullah Furkan Özbek
*/

/**
 *
 * @param {Number} U Upper Row Total
 * @param {Number} L Lower Row Total
 * @param {Array} C Total of column - C[0] => Total sum of the 0th column
 * @returns {String} TEXT upper_row_input,lower_row_input
 */
function solution(U, L, C) {

  let arr = [[], []];
  let uppRowTotal = U;
  let lowRowTotal = L;

  let totalUppRow = 0;
  let totalLowerRow = 0;

  let emptyIndexs = [];

  for (let i = 0; i < C.length; i++) {
    if (C[i] === 0) {
      arr[0][i] = 0;
      arr[1][i] = 0;
    }

    else if (C[i] === 2) {
      arr[0][i] = 1;
      arr[1][i] = 1;

      totalUppRow++;
      totalLowerRow++;

      uppRowTotal--;
      lowRowTotal--;
    }

    else {
      emptyIndexs.push(i);
    }
  }

  // IMPOSSIBLE CHECK
  if (uppRowTotal === 0 && lowRowTotal === 0 & emptyIndexs.length > 0) {
    return "IMPOSSIBLE";
  }

  for (let i = 0; i < emptyIndexs.length; i++) {
    let columnIndex = emptyIndexs[i];
    if (uppRowTotal > 0) {
      arr[0][columnIndex] = 1;
      arr[1][columnIndex] = 0;

      uppRowTotal--;
      totalUppRow++;
    } else if (lowRowTotal > 0) {
      arr[0][columnIndex] = 0;
      arr[1][columnIndex] = 1;

      lowRowTotal--;
      totalLowerRow++;
    }
  }

  // IMPOSSIBLE CHECK
  if (totalLowerRow !== L || totalUppRow !== U) return "IMPOSSIBLE"


  let upperValue = "";
  let lowerValue = "";

  for (let i = 0; i < C.length; i++) {
    upperValue += arr[0][i];
    lowerValue += arr[1][i];
  }

  return upperValue + "," + lowerValue;
}
