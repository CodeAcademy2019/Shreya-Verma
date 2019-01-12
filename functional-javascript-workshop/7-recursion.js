function reduce(arr, fn, initial) {
    if (!arr.length) return {};
    //fn(prevValueOfResult, currValue, currIndex, array)
    var x=fn(initial, arr[0], 0, arr);
    //Object.assign(target, source)
    /*target {
        a:1
    }
    source {
        a:2
    }*/
    return Object.assign(x, reduce(arr.slice(1), fn, initial));   
}

module.exports = reduce