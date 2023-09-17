import { FACULTIES } from '../constants';
import { structuredInput, structuredStudent } from '../sharedTypes';

function passStudent(student: structuredStudent): boolean {
    return FACULTIES.find((faculty) => student.faculty === faculty.shortHand)?.passRule(student) || false;
}
export function calculatePassingStudents(studentList: structuredInput): number {
    return studentList.students.reduce((passCount: number, student: structuredStudent): number => {
        return passStudent(student) ? passCount + 1 : passCount;
    }, 0);
}
