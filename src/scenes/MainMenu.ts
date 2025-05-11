import { AbstractScene } from "./AbstractScene"
import { getMainCameraCenter } from "../utils/camera/position/get-main-center"
import { Position } from "../types/commom/position-interface"

export class MainMenu extends AbstractScene {
    constructor() {
        super('MainMenu')
    }

    create(): void {
        const MAIN_CAMERA_CENTER: Position = getMainCameraCenter(this)

        const LOGO_POSITION: Position = {
            x: MAIN_CAMERA_CENTER.x,
            y: MAIN_CAMERA_CENTER.y * 0.5
        }

        const LOGO_DIMENSIONS: { width: number, height: number } = {
            width: 200,
            height: 100
        }

        this.add.image(LOGO_POSITION.x, LOGO_POSITION.y, "logo")
            .setDisplaySize(LOGO_DIMENSIONS.width, LOGO_DIMENSIONS.height)

        const IN_PROGRESS_TEXT_POSITION: Position = {
            x: MAIN_CAMERA_CENTER.x,
            y: MAIN_CAMERA_CENTER.y * 1.3
        }

        this.add.text(
            IN_PROGRESS_TEXT_POSITION.x,
            IN_PROGRESS_TEXT_POSITION.y,
            "IN PROGRESS."
        )
            .setOrigin(0.5)
    }
}