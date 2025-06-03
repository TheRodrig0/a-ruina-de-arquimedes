import { AbstractScene } from "./abstract-scene"
import { applyBlinkEffect } from "../utils/effects/text/apply-blink-effect"
import type { Position } from "../types/commom/position-interface"

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
        const mainCameraCenter: Position = this.cameraCenter

        const continueText = this.add.text(
            mainCameraCenter.x,
            mainCameraCenter.y,
            'Press any key or click to start the game',
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
