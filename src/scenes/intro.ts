import type { Position } from "../types/commom/position-interface"
import type { Dimensions } from "../types/commom/dimensions-interface"
import { AbstractScene } from "./abstract-scene"
import { goToNextSceneWithFade } from "../utils/transitions/scene/go-to-next-scene-with-fade"
import { fadeInOut } from "../utils/effects/object/fade-in-out"

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

    create(): void {
        this.createBackground()

        const mainCameraCenter: Position = this.cameraCenter
        const defaultImagesYPosition: number = mainCameraCenter.y * 0.7
        this.showPhaserIntro(mainCameraCenter, defaultImagesYPosition)

    }

    private createBackground(): void {
        const cameraDimensions: Dimensions = this.cameraDimensions
        this.add.image(cameraDimensions.width / 2, cameraDimensions.height / 2, "background")
            .setDisplaySize(cameraDimensions.width, cameraDimensions.height)
            .setAlpha(0.13, 0, 0, 0.13)
    }

    private showPhaserIntro(center: Position, imageY: number): void {
        const elements = this.createIntroElements(
            center,
            imageY,
            "logo-phaser",
            0.03,
            "Powered by Phaser"
        )

        fadeInOut({
            scene: this,
            target: elements,
            duration: this.DEFAULT_DELAY,
            onComplete: (): void => {
                this.showGameIntro(center, imageY)
            }
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

        fadeInOut({
            scene: this,
            target: elements,
            duration: this.DEFAULT_DELAY,
            onComplete: (): void => {
                this.transitionToMainMenu()
            }
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
            .setAlpha(0)

        const defaultTextYPosition: number = center.y * 1.4

        const text = this.add.text(center.x, defaultTextYPosition, message, this.TEXT_STYLE)
            .setOrigin(0.5)
            .setAlpha(0)

        return [logo, text]
    }

    private transitionToMainMenu(): void {
        goToNextSceneWithFade({
            scene: this,
            nextSceneKey: "MainMenu",
            durationAnim1: this.DEFAULT_DELAY,
            durationAnim2: this.DEFAULT_DELAY
        })
    }

}