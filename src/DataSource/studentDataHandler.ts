import { INPUTFILEPATH } from '../constants';
import { readFile } from './localFileHandler';

/**
 * Uses a handler to fetch student data from a data source.
 * 
 * @returns A promise that resolves to student data retrieved from the data source.
 */
export async function fetchStudentData(): Promise<string> {
    return readFile(INPUTFILEPATH).catch((rejectReason) => {
        console.error(`Failed to fetch student data`);
        throw rejectReason;
    });
}
