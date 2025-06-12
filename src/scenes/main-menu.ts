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
        const backgroundImageKey: string = "background"
        const backgroundImagePosition: Position = {
            x: cameraDimensions.width / 2,
            y: cameraDimensions.height / 2
        }

        this.add.image(backgroundImagePosition.x, backgroundImagePosition.y, backgroundImageKey)
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
            callback: () => this.scene.start("InProgressScene")
        },
        {
            text: "Options"
        },
        {
            text: "Credits"
        },
        {
            text: "Exit"
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
                onClick: button.callback as () => any
            })
        })
    }
}
