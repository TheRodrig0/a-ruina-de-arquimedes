import type { Position } from "../../types/commom/position-interface"
import type { Dimensions } from "../../types/commom/dimensions-interface"
import { AbstractScene } from "../abstract-scene"

export class InProgressScene extends AbstractScene {
    constructor(){
        super("InProgressScene")
    }

    create(): void {
        this.createLogo()
        this.createInProgressText()
    }

    private createLogo(): void {
        const logoPosition: Position = {
            x: this.cameraCenter.x,
            y: this.cameraCenter.y * 0.5
        }

        const logoDimensions: Dimensions = {
            width: 200,
            height: 100
        }

        this.add.image(logoPosition.x, logoPosition.y, "logo")
            .setDisplaySize(logoDimensions.width, logoDimensions.height)
    }

    private createInProgressText(): void {
        const inProgressTextPosition: Position = {
            x: this.cameraCenter.x,
            y: this.cameraCenter.y * 1.3
        }

        this.add.text(
            inProgressTextPosition.x,
            inProgressTextPosition.y,
            "IN PROGRESS."
        )
            .setOrigin(0.5)
    }

    
}