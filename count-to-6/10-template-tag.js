console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(...args) {
    var safe={"'": '&apos;', '"': '&quot;', '<': "&lt;", ">": "&gt;", "&": "&amp"};
    var b=args.slice(1).map((a) => a.replace(/"|'|<|>|&/g, (c) => safe[c]));
    return args[0].reduce((r, a, i)=>r+=(b[i-1]+a));
}