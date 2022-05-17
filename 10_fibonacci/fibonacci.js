const fibonacci = function(fibNum) {
    fibNum = parseInt(fibNum);
    let numList = [1, 1];
    if (fibNum < 1) {
        return "OOPS"
    }
    for (let i = 0; i < fibNum; i++) {
        const addends = numList.slice(i, i + 2);
        newNum = addends[0] + addends[1];
        numList.push(newNum);
    }
    return numList[fibNum - 1];

};

// Do not edit below this line
module.exports = fibonacci;
