function getShortMessages(messages) {
    return (messages.map(function abc(a) 
        { return a.message;
        }).filter(function def(i){
        if (i.length<50)
            return true;
        return false; 
        }))
}
module.exports = getShortMessages