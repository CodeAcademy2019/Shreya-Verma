module.exports = arrayMap
function arrayMap(arr, fn) {
    return arr.reduce(function (result, currValue) {
        return result.concat([fn(currValue)]);
    }, []);
}

   