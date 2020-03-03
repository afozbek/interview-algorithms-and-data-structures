// https://www.hackerrank.com/challenges/maximum-element
function processData(input) {
  const operations = input.split(/\n/);

  let stack = [];
  let maxValue = null;
  const types = {
    "null": null,
    "undefined": undefined,
    "true": true,
    "false": false
  }

  operations.forEach(op => {
    let [opCode, val] = op.split(/ /);
    if (types[val]) {
      val = types[val]
    } else {
      val = +val
    }

    switch (opCode) {
      case "1":
        stack.unshift(val);

        if (!maxValue) {
          maxValue = val
        } else if (val > maxValue) {
          maxValue = val
        }
        break;
      case "2":
        const poppedValue = stack.shift();
        if (poppedValue == maxValue) {
          maxValue = Math.max.apply(null, stack);
        }
        break;
      case "3":
        console.log(maxValue)
        break;
      default:
        return;
    }
  })
}

const input = "10\n" +
"1 null\n" +
"2\n" +
"1 20\n" +
"2\n" +
"1 26\n" +
"1 20\n" +
"2\n" +
"3\n" +
"1 91\n" +
"3";

processData(input)