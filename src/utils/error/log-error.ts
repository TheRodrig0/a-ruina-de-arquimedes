import { ErrorDetailsInterface } from "../../types/error/error-details-interface"

export function logError(details: ErrorDetailsInterface): void {
    console.error(`[ERROR] ${details.message}`)
    if (details.filename) {
        console.error(`File: ${details.filename} at ${details.lineNumber}:${details.columnNumber}`)
    }
    if (details.stack) {
        console.error(`Stack: ${details.stack}`)
    }

}
