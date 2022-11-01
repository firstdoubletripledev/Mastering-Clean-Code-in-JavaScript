export function ErrorLoggingStrategy(error) {
    console.log(`An error occurred at file: ${error.source} line ${error.lineNumber} with message: ${error.message}`);
}