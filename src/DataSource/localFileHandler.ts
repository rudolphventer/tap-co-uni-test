import * as fsPromise from 'fs/promises';

export async function readFile(path: string): Promise<string> {
    try {
        return fsPromise.readFile(path, 'utf-8').then((result) => result.trim());
    } catch (error) {
        console.error(`Failed to read file at ${path}`);
        throw error;
    }
}
