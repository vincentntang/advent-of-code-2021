var fs = require('fs');

var readMe = fs.readFileSync('001.txt', 'utf8').split('\n');

console.log(readMe,"readMe");