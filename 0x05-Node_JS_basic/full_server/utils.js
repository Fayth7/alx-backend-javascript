import fs from 'fs/promises';

/**
 * Reads the data of students in a CSV data file
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>}
 */
export const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const students = {};

    for (const line of lines) {
      const [firstName, , , field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
    }

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
