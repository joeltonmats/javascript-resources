var filterByExtension = require('./filter-by-extension');

filterByExtension(process.argv[2], process.argv[3], (err, files) => {

    if (err) throw err;

    files.forEach(file => {
        console.log(file);
    });
})