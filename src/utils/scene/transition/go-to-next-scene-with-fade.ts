import fadeOut from "../../camera/transitions/fade-out"
import fadeIn from "../../camera/transitions/fade-in"

export default function goToNextSceneWithFade(scene: Phaser.Scene, nextSceneKey: string | Phaser.Scene, fadeOutDuration: number = 500, fadeInDuration: number = 500): void {
    if (!(scene instanceof Phaser.Scene)) {
        throw new Error("Invalid argument: scene isn't an instance of Phaser.Scene")
    }

    fadeOut(scene, fadeOutDuration, fadeInDuration, (): void => {
        scene.scene.start(nextSceneKey)

        // Wait for the next scene to initialize
        scene.scene.get(nextSceneKey).events.once('create', (): void => {
            const NEXT_SCENE = scene.scene.get(nextSceneKey)
            NEXT_SCENE.cameras.main.alpha = 0
            fadeIn(NEXT_SCENE, fadeInDuration, () => { })
        })
    })
}