import { describe, it, expect } from "vitest"
import { CameraFadeConfig } from "./camera-fade-config-interface"

describe("CameraFadeConfig", (): void => {
    it("Should have the correct properties", (): void => {
        const CONFIG: CameraFadeConfig = {
            scene: {} as Phaser.Scene,
            duration: 1000,
            onComplete: () => { }
        }

        expect(CONFIG.scene).toBeDefined()
        expect(CONFIG.duration).toEqual(1000)
        expect(CONFIG.onComplete).toBeDefined()
    })
})