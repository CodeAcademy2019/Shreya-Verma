const prog= require('./3-func');
arrPos=[['checking output of prog() for array of size=1', ['ab'], '[ab] becomes "a"'],
['checking output of prog() for array of size=2 with upper/lowercases', ['ab', 'CD'], '[ab,CD] becomes "aC"'],
['checking output of prog() for array of size >2 with upper/lowercases', ['BLAIR','chuck','Dan','Serena'],'[BLAIR,chuck,Dan,Serena] becomes "BcDS"'],
['checking output of prog() for array with empty string', [' '],'[ ] becomes " "']];
arrNeg=[['checking output of prog() for array with one element has same case', ['Half'], '[Half] becomes "h"]']];

arrPos.forEach((a)=> {
        test(a[0], () => {
        expect(prog(a[1])).toEqual(a[2]);
    })
});

arrNeg.forEach((a) => {
        test(a[0], () => {
        expect(prog(a[1])).not.toEqual(a[2]);
    });
});