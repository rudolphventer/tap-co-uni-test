import { SUBJECTS } from '../constants';
import { structuredInput, structuredStudent, unstructuredStudent, validatedInput } from '../sharedTypes';

/**
 * Structures the given student/mark list into the structuredInput format.
 *
 * @param studentList - A validated student/mark list.
 * @returns inputString parsed into a structuredInput object.
 */
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
