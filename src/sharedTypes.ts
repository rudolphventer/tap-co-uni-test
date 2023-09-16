// Parsing input
export type unvalidatedStudent = {
    faculty: string;
    marks: string[];
};
export type parsedInput = { count: string; students: unvalidatedStudent[] };

// Validating input
export type unstructuredStudent = Omit<unvalidatedStudent, 'marks'> & {
    marks: number[];
};
export type validatedInput = { count: number; students: unstructuredStudent[] };

// Structuring input
export type structuredStudent = Omit<unstructuredStudent, 'marks'> & {
    marks: { subjectName: string | undefined; mark: number }[];
};
export type structuredInput = { count: number; students: structuredStudent[] };
