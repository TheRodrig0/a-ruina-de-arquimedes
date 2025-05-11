import { describe, it, expect } from "vitest"
import { Dimensions } from "./dimensions-interface"

describe("Dimensions", (): void => {
    it("Should have the correct properties", (): void => {
        const DIMENSIONS: Dimensions = {
            width: 100,
            height: 200
        }

        expect(DIMENSIONS.width).toBeDefined()
        expect(DIMENSIONS.height).toBeDefined()
    })
})