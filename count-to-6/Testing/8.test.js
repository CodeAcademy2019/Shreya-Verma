const prog= require('./8-func');
arrPos=[['checking output of midpoint() for 2 positive numbers', [1, 2], 1.5], 
        ['checking output of midpoint() for positive and negative numbers', [2, -3], -0.5],
        ['checking output of midpoint() with only lowerBound', [2], 1.5],
        ['checking output of midpoint() with only upperBound', [, 1], 0.5],
        ['checking output of midpoint() with no arguements', [], 0.5]];
arrPos.forEach((a)=> {
    test(a[0], () => {
        expect(prog(...a[1])).toEqual(a[2]);
    })
});