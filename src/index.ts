import { fetchStudentData } from './DataSource/studentDataHandler';
import { parseInput } from './InputHandling/parserClient';
import { structureInput } from './InputHandling/structuringClient';
import { validateInput } from './InputHandling/validatorClient';
import { outputToInterface } from './OutputHandling/outputHandler';
import { calculatePassingStudents } from './PassChecking/passRuleChecker';
import { parsedInput, structuredInput, validatedInput } from './sharedTypes';

async function mainHandler(): Promise<boolean> {
    try {
        const unparsedInput = await fetchStudentData();
        const parsedInput: parsedInput = parseInput(unparsedInput);
        const validatedInput: validatedInput = validateInput(parsedInput);
        const structuredInput: structuredInput = structureInput(validatedInput);
        const passingStudents: number = calculatePassingStudents(structuredInput);
        outputToInterface(passingStudents);
        return Promise.resolve(true);
    } catch (error) {
        return Promise.reject(error);
    }
}

mainHandler().catch((err) => {
    throw err;
});
