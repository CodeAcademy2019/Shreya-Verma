var slice = Array.prototype.slice

function logger(namespace) {
  return function abc(){
    console.log.apply(null, [namespace].concat(Object.values(arguments)))
  };
}

module.exports = logger