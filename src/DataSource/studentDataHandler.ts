import { readFile } from './localFileHandler';

export async function fetchStudentData(): Promise<string> {
    return readFile('./src/sampleInput_1.txt').catch((rejectReason) => {
        console.error(`Failed to fetch student data`);
        throw rejectReason;
    });
}
