import { FACULTIES } from '../constants';
import { structuredInput, structuredStudent } from '../sharedTypes';

/**
 * Applies the correct passRule to a student's marks based on their faculty.
 *
 * @param student - A student record object.
 * @returns A boolean indicating a pass or fail.
 */
function passStudent(student: structuredStudent): boolean {
    return FACULTIES.find((faculty) => student.faculty === faculty.shortHand)?.passRule(student) || false;
}

/**
 * Calculates the total passing number of students.
 *
 * @param studentList - A validated and structured student/mark list.
 * @returns The number of passing students.
 */
export function calculatePassingStudents(studentList: structuredInput): number {
    return studentList.students.reduce((passCount: number, student: structuredStudent): number => {
        return passStudent(student) ? passCount + 1 : passCount;
    }, 0);
}
