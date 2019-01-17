
function logger(namespace) {
  return function abc(...args){
    console.log.apply(this, [namespace].concat(args))
    //console.log.call(this, namespace,...args);

  };
}
module.exports = logger