import { fadeOut } from "../../camera/transitions/fade-out"
import { fadeIn } from "../../camera/transitions/fade-in"
import { SceneTransitionConfig } from "../../../types/transitions/scene-transition-config-interface.ts"

export function goToNextSceneWithFade(config: SceneTransitionConfig): void {
    const { scene, nextSceneKey, cameraAnimationDuration1: fadeOutDuration = 500, cameraAnimationDuration2: fadeInDuration = 500 } = config

    if (!(scene instanceof Phaser.Scene)) {
        throw new Error("Invalid argument: scene isn't an instance of Phaser.Scene")
    }

    fadeOut({
        scene: scene,
        duration: fadeOutDuration,
        onComplete: (): void => {
            scene.scene.start(nextSceneKey)

            const nextSceneInstance = scene.scene.get(nextSceneKey)
            nextSceneInstance.events.once(Phaser.Scenes.Events.CREATE, (): void => {
                nextSceneInstance.cameras.main.alpha = 0
                fadeIn({
                    scene: nextSceneInstance,
                    duration: fadeInDuration,
                    onComplete: (): void => { }
                })
            })
        }
    })
}

