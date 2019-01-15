const prog= require('./2-func');
arrPos=[['checking for output of prog() with full uppercase', 'BLAIR', `Hello, BLAIR!
Your name lowercased is "blair".`],
['checking for output of prog() with full lowercase', 'chuck', `Hello, chuck!
Your name lowercased is "chuck".`],
['checking for output of prog() with empty string', ' ',`Hello,  !
Your name lowercased is " ".`]];
arrPos.forEach((a)=> {
    test(a[0], () => {
    expect(prog(a[1])).toEqual(a[2]);
})});
