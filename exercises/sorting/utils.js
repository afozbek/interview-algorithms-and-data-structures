//only works in browsers
const checkRunTime = (func, input) => {
    let performance = new Performance();
    let start = performance.now();
    func(input);
    return performance.now() - start;
};

const generateRandomNumbers = value => {
    let arr = [];
    for (let i = 0; i < value; i++) {
        let number = Math.floor((Math.random() + 5) * 10);
        arr.push(number);
    }
    return arr;
};

module.exports = {
    checkRunTime,
    generateRandomNumbers
};
