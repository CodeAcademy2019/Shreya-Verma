var curryN= (fn, n) => {
    n=n||fn.length;
    addToArgList=(argList) => {
        return (newArg) => {
            var newArgList=argList.concat(newArg);
            if (newArgList.length<n){
                return addToArgList(newArgList);
            }
            return fn(...newArgList);
        }   
    }
    return addToArgList([]);
  }

module.exports = curryN
