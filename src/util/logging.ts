/**
 * Sends debug message to the console if relevant.
 * 
 * @param content Formatted string for the console.
 * @param optionalParams Additional parameters to interpolate into the `content`.
 */
export function debug(content?: string, ...optionalParams: string[]) {
    console.log(`DEBUG: ${content}`, optionalParams);
}

/**
 * Sends info message to the console if relevant.
 * 
 * @param content Formatted string for the console.
 * @param optionalParams Additional parameters to interpolate into the `content`.
 */
export function info(content?: string, ...optionalParams: string[]) {
    console.log(`INFO: ${content}`, optionalParams);
}

/**
 * Sends warning message to the console if relevant.
 * 
 * @param content Formatted string for the console.
 * @param optionalParams Additional parameters to interpolate into the `content`.
 */
export function warn(content?: string, ...optionalParams: string[]) {
    console.log(`WARN: ${content}`, optionalParams);
}

/**
 * Sends error message to the console if relevant.
 * 
 * @param content Formatted string for the console.
 * @param optionalParams Additional parameters to interpolate into the `content`.
 */
export function error(content?: string, ...optionalParams: string[]) {
    console.error(`ERROR: ${content}`, optionalParams);
}