import * as fsPromise from 'fs/promises';

/**
 * Reads a file from the file system asynchronously.
 * 
 * @remark
 * Also trims whitespace from the start and end of the file contents.
 *
 * @param path - Path to the file being read.
 * @returns A promise that resolves to a string of the contents of the file.
 */
export async function readFile(path: string): Promise<string> {
    try {
        return fsPromise.readFile(path, 'utf-8').then((result) => result.trim());
    } catch (error) {
        console.error(`Failed to read file at ${path}`);
        throw error;
    }
}


/**
 * Reads a file from the file system asynchronously and trims whitespace
 *
 * @param x - The first input number
 * @returns The arithmetic mean of `x` and `y`
 */