const net = require('net');

function getDateFormatted(date) {
    const dataFormatted = `${date.getFullYear()}-${zeroFill(date.getMonth() + 1)}-${zeroFill(date.getDate())} ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}\n`;
    return dataFormatted;
}

function zeroFill(element) {
    if (String(element).length == 1)
        element = `0${element}`;
    return element;
}

const server = net.createServer((socket) => {
    socket.end(getDateFormatted(new Date()));
});

server.listen(process.argv[2]);
