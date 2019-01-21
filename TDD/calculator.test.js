const calculator=require('./calculator');
arr=[['should give 0 for empty string', '', 0],
    ['should give number for string with one number', '1', 1],
    ['should give sum for string with two numbers', '1,2', 3]]
describe('Add()', () => {
    arr.forEach(element => {       
        it(element[0], () => {
            return expect(calculator(element[1])).toEqual(element[2]);
        });
    });
});