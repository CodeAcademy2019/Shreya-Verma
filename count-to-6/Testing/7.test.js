const prog= require('./7-func');
arrPos=[['checking average of 2 arguments by average()', prog(1, 2), 1.5], 
        ['checking average of >2 arguments by average()', prog(2, 3, 1), 2],
        ['checking average of 0 arguments by average()', prog(), 0],
        ['checking average of 1 argument by average()', prog(5), 5]];
        arrPos.forEach((a)=> {
test(a[0], () => {
        expect(a[1]).toEqual(a[2]);
    })
});