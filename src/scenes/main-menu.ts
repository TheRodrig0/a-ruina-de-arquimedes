import type { Dimensions } from "../types/commom/dimensions-interface"
import type { Position } from "../types/commom/position-interface"
import { AbstractScene } from "./abstract-scene"
import { Button } from "../components/button"

export class MainMenu extends AbstractScene {
    constructor() {
        super('MainMenu')
    }

    create(): void {
        this.createBackground()
        this.createLogo()
        this.createPrincipalButtons()
    }

    private createBackground(): void {
        const cameraDimensions: Dimensions = this.cameraDimensions
        this.add.image(cameraDimensions.width / 2, cameraDimensions.height / 2, "background")
            .setDisplaySize(cameraDimensions.width, cameraDimensions.height)
            .setAlpha(0, 0, 0, 0.3)
    }

    private createLogo(): void {
        const logoPosition: Position = {
            x: 85,
            y: this.cameraCenter.y * 0.5
        }

        const logoDimensions: Dimensions = {
            width: 150,
            height: 75
        }

        this.add.image(logoPosition.x, logoPosition.y, "logo")
            .setDisplaySize(logoDimensions.width, logoDimensions.height)
            .setOrigin(0.5)
    }

    private createPrincipalButtons(): void {
        const buttonsProps = [{
            text: "Start",
            key: "button",
            callback: () => this.scene.start('InProgressScene')
        },
        {
            text: "Options",
            key: "button"
        },
        {
            text: "Credits",
            key: "button"
        },
        {
            text: "Exit",
            key: "button"
        }]

        const buttonSpacing: number = 18
        const startX: number = 30
        const startY: number = this.cameraCenter.y

        buttonsProps.forEach((button, index) => {
            new Button({
                scene: this,
                x: startX,
                y: startY + (index * buttonSpacing),
                text: button.text,
                key: button.key,
                callback: button.callback
            })
        })
    }
}
