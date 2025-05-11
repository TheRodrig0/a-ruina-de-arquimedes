import { describe, it, expect } from "vitest"
import { ErrorDetailsInterface } from "./error-details-interface"

describe("Dimensions", (): void => {
    it("Should have the correct properties", (): void => {
        const ERROR_DETAILS: ErrorDetailsInterface = {
            message: "Generic Error",
            filename: "Fake file",
            lineNumber: 10,
            columnNumber: 20,
            stack: "TypeError",
            error: Error("Generic Error")
        }

        expect(ERROR_DETAILS.message).toBeDefined()
        expect(ERROR_DETAILS.error?.message).toEqual("Generic Error")

        expect(ERROR_DETAILS.filename).toBeDefined()

        expect(ERROR_DETAILS.lineNumber).toBeDefined()
        expect(ERROR_DETAILS.columnNumber).toBeDefined()

        expect(ERROR_DETAILS.stack).toBeDefined()
        expect(ERROR_DETAILS.error).toBeDefined()
        
        expect(ERROR_DETAILS.error?.name).toEqual("Error")
    })
})