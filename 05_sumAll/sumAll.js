const sumAll = function() {
    let beginNum;
    let endNum;
    if (arguments[0] < 0 || arguments[1] < 0){
        return "ERROR";
    }
    if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number"){
        return "ERROR";
    }
    if (arguments[0] < arguments[1]) {
        beginNum = arguments[0];
        endNum = arguments[1];
    } else {
        beginNum = arguments[1];
        endNum = arguments[0];
    }
    let totalSum = endNum;
    for (let i = beginNum; i < endNum; i++) {
        totalSum += i;
    }
    return totalSum 
};

// Do not edit below this line
module.exports = sumAll;
