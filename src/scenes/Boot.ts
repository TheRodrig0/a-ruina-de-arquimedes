import AbstractScene from "./AbstractScene"
import Phaser from "phaser"
import applyBlinkEffect from "../utils/text/apply-blink-effect"
import getMainCameraCenter from "../utils/position/get-main-center"

export default class Boot extends AbstractScene {
    private continueText: Phaser.GameObjects.Text

    constructor() {
        super('Boot')
    }

    preload(): void {
        this.load.on('complete', (): void =>
            this.addEventsToGoToNextScene()
        )
    }

    create(): void {
        const MAIN_CAMERA_CENTER: { x: number, y: number } = getMainCameraCenter(this)

        this.continueText = this.add.text(
            MAIN_CAMERA_CENTER.x,
            MAIN_CAMERA_CENTER.y,
            'Press any key or click to start the game',
            {
                //fontFamily: "",
                fontSize: 12
            }
        )
            .setOrigin(0.5)

        applyBlinkEffect({
            scene: this,
            target: this.continueText,
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
