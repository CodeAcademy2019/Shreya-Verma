function duckCount() {
    return (Object.values(arguments).filter(function abc (object){
        return (Object.prototype.hasOwnProperty.call(object, 'quack'))
    })).length;
}

module.exports = duckCount
