const prog= require('./10-func');
describe('prog', () => {
    test("checking for ', < and >", () => {
        expect(prog`<b>${"O'Hara"} says</b>: "${'I am <i>free</i>'}"`).toBe('<b>O&apos;Hara says</b>: "I am &lt;i&gt;free&lt;/i&gt;"');
    });
    test('checking for " and &', () => {
        expect(prog`<b>${"Ed Dumbhill"} says</b>: "${'I am <i>free</i> & "alive"'}"`).toBe('<b>Ed Dumbhill says</b>: "I am &lt;i&gt;free&lt;/i&gt; &amp; &quot;alive&quot;"');
    });
});