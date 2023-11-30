export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateString(name, 'Name');
    this._name = name;

    this._validateNumber(length, 'Length');
    this._length = length;

    this._validateArray(students, 'Students');
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._validateString(newName, 'Name');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._validateNumber(newLength, 'Length');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._validateArray(newStudents, 'Students');
    this._students = newStudents;
  }

  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
  }

  _validateNumber(value, attribute) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
  }

  _validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array`);
    }
  }
}
