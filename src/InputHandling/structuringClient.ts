import { SUBJECTS } from '../constants';
import { structuredInput, structuredStudent, unstructuredStudent, validatedInput } from '../sharedTypes';

// No error handling here because any errors with the data would have been caught during parsing or validation, this is simply formatting.
export function structureInput(studentList: validatedInput): structuredInput {
    return {
        ...studentList,
        students: studentList.students.map((student: unstructuredStudent): structuredStudent => {
            return {
                faculty: student.faculty,
                marks: student.marks.map((mark, index) => {
                    return { subjectName: SUBJECTS.get(index), mark: mark };
                }),
            };
        }),
    };
}
