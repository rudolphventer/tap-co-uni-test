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

function parseMark(mark: string): number {
    if (isNaN(parseInt(mark))) throw markInvalid;
    if (MARKBOUNDS.min > parseInt(mark) || MARKBOUNDS.max < parseInt(mark)) throw markOutOfRange;
    return parseInt(mark);
}

function parseFaculty(faculty: string): string {
    if (!faculty || !FACULTIES.some((entry) => entry.shortHand === faculty)) throw facultyInvalid;
    return faculty;
}

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
