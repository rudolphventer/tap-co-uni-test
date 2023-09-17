import { SUBJECTS } from '../constants';
import { structuredStudent } from '../sharedTypes';

/**
 * Calculates whether a given student has passed if they are part of the science faculty.
 *
 * @param student - A student record object.
 * @returns A boolean indicating a pass or fail.
 */
export function sciencePass(student: structuredStudent): boolean {
    return (
        student.marks.reduce((acc, mark) => acc + mark.mark, 0) >= 350 &&
        student.marks.reduce(
            (acc, mark) => ([SUBJECTS.get(1), SUBJECTS.get(2)].includes(mark.subjectName) ? acc + mark.mark : acc),
            0,
        ) >= 160
    );
}

/**
 * Calculates whether a given student has passed if they are part of the humanities faculty.
 *
 * @param student - A student record object.
 * @returns A boolean indicating a pass or fail.
 */
export function HumanitiesPass(student: structuredStudent): boolean {
    return (
        student.marks.reduce((acc, mark) => acc + mark.mark, 0) >= 350 &&
        student.marks.reduce(
            (acc, mark) => ([SUBJECTS.get(3), SUBJECTS.get(4)].includes(mark.subjectName) ? acc + mark.mark : acc),
            0,
        ) >= 160
    );
}
