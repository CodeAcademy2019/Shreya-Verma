function Spy(target, method) {
    var op = { count: 0 };
    var func = target[method];
    target[method] = function abc() {
        ++op.count; 
        return func.apply(null, arguments);
    }
    return op;
  }

  module.exports = Spy