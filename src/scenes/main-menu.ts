import { AbstractScene } from "./abstract-scene"
import type { Position } from "../types/commom/position-interface"
import type { Dimensions } from "../types/commom/dimensions-interface"

export class MainMenu extends AbstractScene {
    constructor() {
        super('MainMenu')
    }

    create(): void {
        const mainCameraCenter: Position = this.cameraCenter

        const logoPosition: Position = {
            x: mainCameraCenter.x,
            y: mainCameraCenter.y * 0.5
        }

        const logoDimensions: Dimensions = {
            width: 200,
            height: 100
        }

        this.add.image(logoPosition.x, logoPosition.y, "logo")
            .setDisplaySize(logoDimensions.width, logoDimensions.height)

        const inProgressTextPosition: Position = {
            x: mainCameraCenter.x,
            y: mainCameraCenter.y * 1.3
        }

        this.add.text(
            inProgressTextPosition.x,
            inProgressTextPosition.y,
            "IN PROGRESS."
        )
            .setOrigin(0.5)
    }
}