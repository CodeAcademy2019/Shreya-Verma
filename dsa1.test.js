const mainFunc= require('./dsa1');
arrPos=[['should give max profit and number to buy- Ashrene', mainFunc('3\n7 3 2 1 3 10 12 2\n6 12 13 14 15 2 3\n3 1 2 3\n0'), '1\n62\n16\n'],
        ['should give max profit and number to buy- Hemant', mainFunc('3\n3 19 9 2\n5 20 11 10 7 1\n2 18 2\n0'), '1\n1\n5 7 8 10\n'],
        ['should give max profit and number to buy- Gurrehmat', mainFunc('1\n10 5 13 8 7 11 9 2 10 11 13\n2\n7 8 1 9 15 3 6 10\n4 7 2 14 10\n0'),'1\n15\n7 8\n2\n29\n8 9\n']
]
describe('mainFunc()', ()=> {
        arrPos.forEach((a) => {
        it(a[0], () => {
            expect(a[1]).toEqual(a[2]);
        });
    });
}); 