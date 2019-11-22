const alfy = require('alfy');

const input = alfy.input;

// 'https://github.com/imjohnbo/github-link-prettifier'
let str = input.split('github.com/')[1];
if (!str) {
    alfy.output('');
}
// 'imjohnbo/github-link-prettifier/issues/1' or 'imjohnbo/github-link-prettifier/pull/2'
else {
    // alfy.output(`[${input}](${str})`);
    alfy.output([{
        title: `[${str}](${input})`,
        arg: `[${str}](${input})`
    }]);
}