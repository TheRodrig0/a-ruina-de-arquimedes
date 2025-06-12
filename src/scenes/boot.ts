import type { Position } from "../types/commom/position-interface"
import { AbstractScene } from "./abstract-scene"
import { applyBlinkEffect } from "../utils/effects/text/apply-blink-effect"

export class Boot extends AbstractScene {
    constructor() {
        super('Boot')
    }

    preload(): void {
        this.load.on('complete', (): void =>
            this.addEventsToGoToNextScene()
        )
    }

    create(): void {
        const cameraCenter: Position = this.cameraCenter
        this.createContinueText(cameraCenter)
    }

    private createContinueText(position: Position): void {
        const continueText = this.add.text(
            position.x,
            position.y,
            "Press any key or click to start the game",
            {
                //fontFamily: "",
                fontSize: 12
            }
        )
            .setOrigin(0.5)

        applyBlinkEffect({
            scene: this,
            target: continueText,
            othersConfigs: {
                duration: 1000
            }
        })
    }

    private addEventsToGoToNextScene(): void {
        this.input.keyboard?.on('keydown', (): void => {
            this.scene.start('Preloader')
            this.removeEventsToGoToNextScene()
        })

        this.input.on('pointerdown', (): void => {
            this.scene.start('Preloader')
            this.removeEventsToGoToNextScene()
        })
    }

    private removeEventsToGoToNextScene(): void {
        this.input.keyboard?.off('keydown')
        this.input.off('pointerdown')
    }
}
