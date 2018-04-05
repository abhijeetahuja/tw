const fs = require('fs');

const nextChar = c => String.fromCharCode(c.charCodeAt(0) + 1);
const readInput = () => fs.readFileSync('./input/file.txt','utf8').split('\n');

module.exports = {
    nextChar,
    readInput,
};