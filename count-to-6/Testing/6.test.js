const prog= require('./6-func');
arrPos=[['checking output of prog() with negative numbers', [1, -1, 2], 'The minimum of [1,-1,2] is -1'],
        ['checking output of prog() with positive numbers', [2, 3, 1],'The minimum of [2,3,1] is 1'],
        ['checking output of prog() with array of size 1', [1], 'The minimum of [1] is 1'],
        ['checking output of prog() with array of size 0', [], 'The minimum of [] is not defined']]
arrPos.forEach((a)=> {
    test(a[0], () => {
    expect(prog(a[1])).toEqual(a[2]);
})});