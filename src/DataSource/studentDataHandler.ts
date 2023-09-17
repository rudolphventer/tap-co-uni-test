import { INPUTFILEPATH } from '../constants';
import { readFile } from './localFileHandler';

export async function fetchStudentData(): Promise<string> {
    return readFile(INPUTFILEPATH).catch((rejectReason) => {
        console.error(`Failed to fetch student data`);
        throw rejectReason;
    });
}
