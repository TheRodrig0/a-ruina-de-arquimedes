import { describe, it, expect } from "vitest"
import { SceneTransitionConfig } from "./scene-transition-config-interface"

describe("SceneTransitionConfig", (): void => {
    it("Should have the correct properties", (): void => {
        const SCENE_TRANSITION_CONFIG: SceneTransitionConfig = {
            scene: {} as Phaser.Scene,
            nextSceneKey: "GenericScene",
            durationAnim1: 1000,
            durationAnim2: 1000
        }

        expect(SCENE_TRANSITION_CONFIG.scene).toBeDefined()
        expect(SCENE_TRANSITION_CONFIG.nextSceneKey).toBeDefined()
        expect(SCENE_TRANSITION_CONFIG.durationAnim1).toBeDefined()
        expect(SCENE_TRANSITION_CONFIG.durationAnim2).toBeDefined()
    })
})