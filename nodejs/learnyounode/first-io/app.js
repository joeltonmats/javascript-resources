var fs = require('fs');

var bufferFile = fs.readFileSync(process.argv[2]);
var bufferFileString = bufferFile.toString();
var lines = bufferFileString.split('\n');
var totalNewLine = lines.length - 1;

console.log(totalNewLine);

