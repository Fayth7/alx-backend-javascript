const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 */
function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        const students = lines.map(line => {
            const [firstname, lastname, age, field] = line.split(',');
            return { firstname, field };
        });

        const totalStudents = students.length;
        console.log(`Number of students: ${totalStudents}`);

        const fields = {};
        students.forEach(student => {
            if (fields[student.field] === undefined) {
                fields[student.field] = [student.firstname];
            } else {
                fields[student.field].push(student.firstname);
            }
        });

        for (const field in fields) {
            const numberOfStudentsInField = fields[field].length;
            const listOfFirstNames = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${numberOfStudentsInField}. List: ${listOfFirstNames}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
