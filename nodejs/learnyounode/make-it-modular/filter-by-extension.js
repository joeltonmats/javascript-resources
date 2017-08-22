const fs = require('fs');
const path = require('path');

function filterByExtension(dirName, ext, callback) {
    fs.readdir(dirName, (err, list) => {
        if (err) return callback(err);

        list = list.filter(file => {
            return path.extname(file) == `.${ext}`;
        })

        callback(null, list);
    })
}

module.exports = filterByExtension;


