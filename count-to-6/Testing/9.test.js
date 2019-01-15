const prog= require('./9-func');
arrPos=[['checking passing without default argument to prog()',['Hello'], 'Hello!!!!!'], 
        ['checking passing with both arguments to prog()', ['Hi', 4], 'Hi!!!!'], 
        ['checking passing empty string without second argument to prog()', ['', ], ''],
        ['checking passing empty string with second argument to prog()', ['', 3], '!!!']]
        arrPos.forEach((a)=> {
test(a[0], () => {
        expect(prog(...a[1])).toEqual(a[2]);
    })
});