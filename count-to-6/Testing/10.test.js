const prog= require('./10-func');
arrPos=[["checking html() output for ', < and >", prog`<b>${"O'Hara"} says</b>: "${'I am <i>free</i>'}"`, '<b>O&apos;Hara says</b>: "I am &lt;i&gt;free&lt;/i&gt;"'], 
        ['checking html() output for ", <, > and &', prog`<b>${'Ed Dumbhill'} says</b>: "${'I am <i>free</i> & "alive"'}"`, '<b>Ed Dumbhill says</b>: "I am &lt;i&gt;free&lt;/i&gt; &amp; &quot;alive&quot;"']];
arrPos.forEach((a)=> {
    console.log(a[1]);
    test(a[0], () => {
        expect(a[1]).toEqual(a[2]);
    })
});
