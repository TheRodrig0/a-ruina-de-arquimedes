import type { Position } from "../../types/commom/position-interface"
import { AbstractScene } from "../abstract-scene"
import { applyBlinkEffect } from "../../utils/effects/text/apply-blink-effect"

export class BootUI extends AbstractScene {
    constructor() {
        super('BootUI')
    }

    init(): void {
        this.createUI()
        this.setupLoadingEvents()
    }

    private setupLoadingEvents(): void {
        this.eventManager.on(this.EVENTS.BOOT_COMPLETE, () =>
            this.scene.stop(this)
        )
    }

    private createUI(): void {
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

}