import { MARKBOUNDS, FACULTIES, SUBJECTS } from '../constants';
import {
    markInvalid,
    markOutOfRange,
    facultyInvalid,
    emptyStudentCount,
    incorrectStudentCount,
    incorrectSubjectCount,
} from '../customErrors';
import { parsedInput, unstructuredStudent, unvalidatedStudent, validatedInput } from '../sharedTypes';

/**
 * Checks if the given mark is valid.
 *
 * @param mark - The given mark for a subject as a string.
 * @returns The given mark as a number.
 */
function parseMark(mark: string): number {
    if (isNaN(parseInt(mark))) throw markInvalid;
    if (MARKBOUNDS.min > parseInt(mark) || MARKBOUNDS.max < parseInt(mark)) throw markOutOfRange;
    return parseInt(mark);
}

/**
 * Checks if a given faculty is valid.
 *
 * @param faculty - The given faculty for a student as a string.
 * @returns The validated faculty.
 */
function parseFaculty(faculty: string): string {
    if (!faculty || !FACULTIES.some((entry) => entry.shortHand === faculty)) throw facultyInvalid;
    return faculty;
}

/**
 * Validates each part of the given parsedInput object.
 *
 * @param studentList - A parsed student/mark list of all string values.
 * @returns The validated and correctly typed student/mark list.
 */
export function validateInput(studentList: parsedInput): validatedInput {
    try {
        if (!studentList.count) throw emptyStudentCount;
        if (parseInt(studentList.count) !== studentList.students.length) throw incorrectStudentCount;
        return {
            count: parseInt(studentList.count),
            students: studentList.students.map((student: unvalidatedStudent): unstructuredStudent => {
                if (student.marks.length !== SUBJECTS.size) throw incorrectSubjectCount;
                return {
                    faculty: parseFaculty(student.faculty),
                    marks: student.marks.map((mark) => parseMark(mark)),
                };
            }),
        };
    } catch (error) {
        console.error(`Input validation failed on input ${JSON.stringify(studentList)}`);
        throw error;
    }
}
