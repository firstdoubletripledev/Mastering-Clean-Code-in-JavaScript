const loggingEndpoint = "https://mytestapi.com/v1/logging";

export function ServerLoggingStrategy(error) {
    fetch(loggingEndpoint, {
        method: 'POST',
        body: error
    });
}