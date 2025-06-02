import type { Position } from "../types/commom/position-interface"
import type { Dimensions } from "../types/commom/dimensions-interface"
import { AbstractScene } from "./abstract-scene"
import { goToNextSceneWithFade } from "../utils/scene/transition/go-to-next-scene-with-fade"

export class Intro extends AbstractScene {
    private readonly DEFAULT_DELAY = 1500;
    private readonly TEXT_STYLE = {
        fontSize: 14,
        color: "#fff",
        align: "center"
    }

    constructor() {
        super('Intro')
    }

    create() {
        const cameraDimensions: Dimensions = this.cameraDimensions
        this.add.image(cameraDimensions.width / 2, cameraDimensions.height / 2, "background")
            .setDisplaySize(cameraDimensions.width, cameraDimensions.height)
        .setAlpha(0.07, 0, 0, 0.07)

        const mainCameraCenter: Position = this.cameraCenter
        const defaultImagesYPosition: number = mainCameraCenter.y * 0.7

        this.showPhaserIntro(mainCameraCenter, defaultImagesYPosition)

    }

    private showPhaserIntro(center: Position, imageY: number): void {
        const elements = this.createIntroElements(
            center,
            imageY,
            "logo-phaser",
            0.03,
            "Powered by Phaser"
        )

        this.applyTweenToObject(elements, this.DEFAULT_DELAY, 0, () => {
            this.showGameIntro(center, imageY)
        })
    }

    private showGameIntro(center: Position, imageY: number): void {
        const elements = this.createIntroElements(
            center,
            imageY,
            "logo",
            0.25,
            "A Ruína de Arquimedes"
        )

        this.applyTweenToObject(elements, this.DEFAULT_DELAY, 0, () => {
            this.transitionToMainMenu()
        })
    }

    private createIntroElements(
        center: Position,
        imageY: number,
        logoKey: string,
        scale: number,
        message: string
    ): Phaser.GameObjects.GameObject[] {
        const logo = this.add.image(center.x, imageY, logoKey)
            .setScale(scale)

        const defaultTextYPosition: number = center.y * 1.4

        const text = this.add.text(center.x, defaultTextYPosition, message, this.TEXT_STYLE)
            .setOrigin(0.5)

        return [logo, text]
    }

    private transitionToMainMenu(): void {
        goToNextSceneWithFade({
            scene: this,
            nextSceneKey: "MainMenu",
            cameraAnimationDuration1: this.DEFAULT_DELAY,
            cameraAnimationDuration2: this.DEFAULT_DELAY
        })
    }

    private applyTweenToObject(
        target: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[],
        duration: number,
        repeat: number = 0,
        onComplete?: Phaser.Types.Tweens.TweenOnCompleteCallback
    ): void {
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