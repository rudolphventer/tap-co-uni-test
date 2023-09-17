/**
 * Outputs the given outputContent to the console.
 *
 * @remark
 * The outputContent type is left as unknown so as to allow for type conversion checks to be done
 * in this method and any errors handled here.
 * 
 * @param outputContent - The string value to be output to the console.
 */
export function outputToInterface(outputContent: unknown): void {
    try {
        console.log(String(outputContent));
    } catch (error) {
        console.error(`Console output error`);
        throw error;
    }
}
