import { describe, it, expect } from "vitest"
import { Position } from "./position-interface"

describe("Dimensions", (): void => {
    it("Should have the correct properties", (): void => {
        const DIMENSIONS: Position = {
            x: 100,
            y: 200
        }

        expect(DIMENSIONS.x).toBeDefined()
        expect(DIMENSIONS.y).toBeDefined()
    })
})