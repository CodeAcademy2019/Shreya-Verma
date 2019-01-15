const prog= require('./5-func');
arrPos=[['checking for output of prog() with standard user array', [1, 'ABC', 'ABC@gmail.com'],{username: 'ABC', email: 'ABC@gmail.com'}],
['checking for output of prog() with user array with null at index 0', [null, 'def', 'def@gmail.com'],{username: 'def', email: 'def@gmail.com'}],
['checking for output of prog() with large user array', [null, 'def', 'def@gmail.com', '122009', '9003873143'],{username: 'def', email: 'def@gmail.com'}],
['checking for output of prog() with empty user array', [],{username: '', email: ''}]];

arrPos.forEach((a)=> {
    test(a[0], () => {
    expect(prog(a[1])).toEqual(a[2]);
})});
    
    