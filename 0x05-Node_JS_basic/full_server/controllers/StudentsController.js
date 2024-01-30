import { readDatabase } from '../utils';

/**
 * The list of supported majors.
 */
class StudentsController {
  static async getAllStudents(_, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      res.status(200).send('This is the list of our students\n');
      Object.keys(students).sort().forEach((field) => {
        const studentList = students[field].join(', ');
        res.write(`Number of students in ${field}: ${students[field].length}. List: ${studentList}\n`);
      });
      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const studentList = students[major].join(', ');
      res.status(200).send(`List: ${studentList}\n`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
