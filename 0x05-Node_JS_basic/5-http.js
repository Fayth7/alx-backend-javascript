const http = require('http');
const countStudents = require('./3-read_file_async');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const app = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Handle root path
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!\n');
    } else if (req.method === 'GET' && req.url === '/students') {
        // Handle /students path
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        // Assuming the database filename is passed as a command line argument
        const [, , databaseFileName] = process.argv;

        countStudents(databaseFileName)
            .then(() => {
                res.end();
            })
            .catch((error) => {
                res.end(error.message);
            });
    } else {
        // Handle other paths with a 404 Not Found response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});

app.listen(1245);

module.exports = app;
