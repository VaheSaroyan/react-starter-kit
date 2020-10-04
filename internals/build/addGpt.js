const fs = require('fs');
const pathToEntry = './build/index.html';
const splitBy = '</body>';

const builtHTMLContent = fs.readFileSync(pathToEntry).toString();
const parts = builtHTMLContent.split(splitBy);


let fileWithPreload = [
    parts[0],
    `<div id='div-gpt-ad-1553085953221-5'><script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1553085953221-5'); });</script></div>`,
    splitBy,
];

fileWithPreload = [
    ...fileWithPreload,
    parts[1],
];



fs.writeFileSync(pathToEntry, fileWithPreload.join(''));