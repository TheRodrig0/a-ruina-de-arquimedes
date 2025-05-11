export interface ErrorDetailsInterface {
    message: string
    filename?: string
    lineNumber?: number
    columnNumber?: number
    stack?: string
    error?: Error
}