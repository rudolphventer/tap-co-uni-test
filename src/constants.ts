import { HumanitiesPass, sciencePass } from './PassChecking/passRuleFactory';
import { passRule } from './sharedTypes';

export const SUBJECTS: Map<number, string> = new Map([
    [0, 'English'],
    [1, 'Math'],
    [2, 'Science'],
    [3, 'Japanese'],
    [4, 'Geography/History'],
]);

export const FACULTIES: { name: string; shortHand: string; passRule: passRule }[] = [
    { name: 'Humanities', shortHand: 'l', passRule: HumanitiesPass },
    { name: 'Science', shortHand: 's', passRule: sciencePass },
];

export const MARKBOUNDS: { max: number; min: number } = { max: 100, min: 0 };
