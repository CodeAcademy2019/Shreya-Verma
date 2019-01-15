const prog= require('./1-func');
arrPos=[['checking if prog() prints "HELLO ES6" to console', prog(), 'HELLO ES6']]
arrNeg=[['checking if prog() prints "HELLO ES6" without changing case', prog(), 'hello es6']]
arrPos.forEach((a) => {
    test(a[0], () => {
        expect(a[1]).toEqual(a[2]);
    });
});    
arrNeg.forEach((a) => {
    test(a[0], () => {
        expect(a[1]).not.toEqual(a[2]);
    });
});  