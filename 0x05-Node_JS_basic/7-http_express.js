const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
app.get('/', (req, res) => {
    res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
    // Assuming the database filename is passed as a command line argument
    const [, , databaseFileName] = process.argv;

    countStudents(databaseFileName)
        .then(() => {
            res.end();
        })
        .catch((error) => {
            res.end(error.message);
        });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
