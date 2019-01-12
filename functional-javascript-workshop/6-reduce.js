function countWords(inputWords) {
    return inputWords.reduce(function abc(total, currValue, index, arr) {
        if (!total[currValue]) {
            total[currValue]=0;
        }
        total[currValue]+=1;
        return total;
    }, {});
  }
  module.exports = countWords