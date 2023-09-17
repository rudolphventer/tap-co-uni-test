export function outputToInterface(outputContent: unknown): void {
    try {
        console.log(String(outputContent));
    } catch (error) {
        console.error(`Console output error`);
        throw error;
    }
}
