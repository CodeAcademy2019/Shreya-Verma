const mainFunc= require('./dsa1');
arrPos=[['should give max profit and number to buy- Ashrene', '3\n7 3 2 1 3 10 12 2\n6 12 13 14 15 2 3\n3 1 2 3\n0', '1\n62\n16\n'],
        ['should give max profit and number to buy- Hemant', '3\n3 19 9 2\n5 20 11 10 7 1\n2 18 2\n0', '1\n1\n5 7 8 10\n'],
        ['should give max profit and number to buy- Gurrehmat', '1\n10 5 13 8 7 11 9 2 10 11 13\n2\n7 8 1 9 15 3 6 10\n4 7 2 14 10\n0','1\n15\n7 8\n2\n29\n8 9\n'],
        ['should give max profit and number to buy- Ajay', '2\n1 13\n1 16\n4\n6 3 4 10 11 7 13\n3 14 13 10\n2 8 5\n1 14\n0','1\n0\n0\n2\n22\n7\n'],
        ['should give max profit and number to buy- Yash', '2\n6 1 2 3 10 15 5\n6 15 5 15 5 15 5\n0', '1\n24\n3 4 5 6 7 8 9 10 12\n'],
        ['should give max profit and number to buy- Manish', '4\n10 16 14 12 15 17 18 1 1 1 1\n10 20 20 10 10 8 18 17 1 1 1\n15 1 2 3 4 15 14 13 12 11 10 20 19 18 17 16\n5 1 1 18 17 1\n0', '1\n52\n16\n'],   
        ['should give max profit and number to buy- Shashwat','3\n7 4 6 7 12 15 4 11\n9 5 9 8 12 6 7 14 6 10\n11 10 5 6 7 12 17 10 8 12 10 9\n0', '1\n38\n13 15 16\n'],
        ['should give max profit and number to buy- Chirag','4\n11 3 4 11 9 11 9 11 12 7 14 6\n19 16 17 18 19 1 7 5 3 3 11 12 8 9 13 12 11 11 11 2\n3 13 16 17\n14 3 13 13 21 11 12 9 7 5 4 5 12 13 5\n0', '1\n21\n12 14 16 18 19 20 21 22 23 24\n'],
        ['should give max profit and number to buy- Shreya','2\n5 4 5 6 10 4\n5 9 8 7 4 9\n0','1\n34\n10\n'],
        ['should give max profit and number to buy- Abhinav','3\n3 10 10 1\n5 10 1 10 1 10\n4 5 15 10 5\n0', '1\n32\n8 9 11 12\n'],
        ['should give max profit and number to buy- Pulkit','8\n6 12 8 16 2 7 2\n6 1 3 11 9 11 9\n3 11 15 4\n4 2 3 9 11\n4 14 13 11 1\n2 11 2\n6 12 8 12 8 12 8\n1 8\n0', '1\n55\n18 20 21 22 23 24 25 26 27 28\n'],
        ['should give max profit and number to buy- Vibhor','2\n6 10 13 14 13 1 9\n6 6 11 7 15 11 8\n0', '1\n6\n3 4 9\n']]
describe('mainFunc()', ()=> {
        arrPos.forEach((a) => {
        it(a[0], () => {
            expect(mainFunc(a[1])).toEqual(a[2]);
        });
    });
}); 