// Parsing
export const emptyInput = new Error('Input is empty');

// Validation
export const emptyStudentCount = new Error('Student count is not a valid number');
export const incorrectStudentCount = new Error('Given student count differs from expected student count');
export const incorrectSubjectCount = new Error('Given subject count differs from expected subject count');
export const facultyInvalid = new Error('Faculty is invalid');
export const markInvalid = new Error('Mark is not a valid number');
export const markOutOfRange = new Error('Mark is out of range');
