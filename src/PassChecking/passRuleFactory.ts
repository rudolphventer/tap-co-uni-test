import { SUBJECTS } from '../constants';
import { structuredStudent } from '../sharedTypes';

export function sciencePass(student: structuredStudent): boolean {
    return (
        student.marks.reduce((acc, mark) => acc + mark.mark, 0) >= 350 &&
        student.marks.reduce(
            (acc, mark) => ([SUBJECTS.get(1), SUBJECTS.get(2)].includes(mark.subjectName) ? acc + mark.mark : acc),
            0,
        ) >= 160
    );
}

export function HumanitiesPass(student: structuredStudent): boolean {
    return (
        student.marks.reduce((acc, mark) => acc + mark.mark, 0) >= 350 &&
        student.marks.reduce(
            (acc, mark) => ([SUBJECTS.get(3), SUBJECTS.get(4)].includes(mark.subjectName) ? acc + mark.mark : acc),
            0,
        ) >= 160
    );
}
