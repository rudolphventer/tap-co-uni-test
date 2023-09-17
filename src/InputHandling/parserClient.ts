import { emptyInput } from '../customErrors';
import { parsedInput, unvalidatedStudent } from '../sharedTypes';

/**
 * Parses a string value into a JSON object of the parsedInput type.
 *
 * @param inputString - A student/mark list.
 * @returns inputString parsed into an object with student and mark details.
 */
export function parseInput(inputString: string): parsedInput {
    try {
        if (inputString.length === 0) throw emptyInput;
        return {
            count: inputString.split('\n')[0],
            students: inputString
                .split('\n')
                .slice(1)
                .map((student: string): unvalidatedStudent => {
                    return {
                        faculty: student.split(' ')[0],
                        marks: student.split(' ').splice(1),
                    };
                }),
        };
    } catch (error) {
        console.error(`Input parsing failed on input ${inputString}`);
        throw error;
    }
}
