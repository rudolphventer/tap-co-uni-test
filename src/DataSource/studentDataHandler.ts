import { readFile } from './localFileHandler';

export async function fetchStudentData(): Promise<string | undefined> {
    return readFile('./src/testFile.txt').catch((rejectReason) => {
        console.error(`Failed to fetch student data`);
        throw rejectReason;
    });
}
