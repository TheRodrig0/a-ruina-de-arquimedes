import type { Position } from "../types/commom/position-interface"
import type { Dimensions } from "../types/commom/dimensions-interface"
import { AbstractScene } from "./abstract-scene"
import { goToNextSceneWithFade } from "../utils/scene/transition/go-to-next-scene-with-fade"

export class Intro extends AbstractScene {
    constructor() {
        super('Intro')
    }

    create() {
        //const cameraDimensions: Dimensions = this.cameraDimensions
        //this.add.image(cameraDimensions.width / 2, cameraDimensions.height / 2, //"background")
        //    .setDisplaySize(cameraDimensions.width, cameraDimensions.height)
        //    .setAlpha(0.07)

        const mainCameraCenter: Position = this.cameraCenter
        const logo = this.add.image(mainCameraCenter.x, mainCameraCenter.y, "logo")
            .setScale(0.3)

        const delay: number = 1500
        this.applyTweenToObject(logo, delay, 0, (): void => {
            const logoPhaser = this.add.image(mainCameraCenter.x, mainCameraCenter.y, "logo-phaser")
                .setScale(0.05)

            this.applyTweenToObject(logoPhaser, delay, 0, (): void => {
                goToNextSceneWithFade({
                    scene: this,
                    nextSceneKey: "MainMenu",
                    cameraAnimationDuration1: delay,
                    cameraAnimationDuration2: delay
                })
            })
        })
    }

    private applyTweenToObject(target: Phaser.GameObjects.GameObject, duration: number, repeat: number = 0, onComplete?: Phaser.Types.Tweens.TweenOnCompleteCallback) {
        this.tweens.add({
            targets: target,
            alpha: { from: 0, to: 1 },
            duration: duration,
            yoyo: true,
            repeat: repeat,
            onComplete: onComplete
        })
    }
}