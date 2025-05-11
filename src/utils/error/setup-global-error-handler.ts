import { logError } from "./log-error"

export function setupGlobalErrorHandler(): void {
    // Captura erros globais
    window.addEventListener("error", handleGlobalError)

    // Captura rejeições de Promises não tratadas
    window.addEventListener("unhandledrejection", handleUnhandledRejection)
}

function handleGlobalError(event: ErrorEvent): void {
    const { message, filename, lineno: lineNumber, colno: columnNumber, error } = event

    logError({
        message,
        filename,
        lineNumber,
        columnNumber,
        stack: error?.stack
    })
}

function handleUnhandledRejection(event: PromiseRejectionEvent): void {
    const reason = event.reason

    logError({
        message: reason?.message || "Unhandled Promise Rejection",
        stack: reason?.stack || String(reason)
    })
}