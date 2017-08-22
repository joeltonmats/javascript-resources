/* SOLUTION TWO - THIRD PARTY LIBRARY */
const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (response) => {
    response.pipe(bl((err, data) => {
        if (err) return console.error(err);

        data = data.toString();
        console.log(data.length);
        console.log(data);
    }))
}).on('error', console.error)

/* SOLUTION ONE
const http = require('http');
let rawData = '';

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    response.on('data', data => {
        rawData += data;
    })
    response.on('end', () => {
        console.log(rawData.length);
        console.log(rawData);
    })
}).on('error', console.error) */