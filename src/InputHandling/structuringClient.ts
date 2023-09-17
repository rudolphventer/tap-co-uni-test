import { SUBJECTS } from '../constants';
import { structuredInput, structuredStudent, unstructuredStudent, validatedInput } from '../sharedTypes';

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
