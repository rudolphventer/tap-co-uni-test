export const SUBJECTS: Map<number, string> = new Map([
    [0, 'English'],
    [1, 'Math'],
    [2, 'Science'],
    [3, 'Japanese'],
    [4, 'Geography/History'],
]);

export const FACULTIES: { name: string; shortHand: string; passCheck: any }[] = [
    { name: 'Humanities', shortHand: 'l', passCheck: () => true },
    { name: 'Science', shortHand: 's', passCheck: () => true },
];

export const MARKBOUNDS: { max: number; min: number } = { max: 100, min: 0 };
