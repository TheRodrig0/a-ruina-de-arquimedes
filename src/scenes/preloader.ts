import { AbstractScene } from "./abstract-scene"
import { PreloaderUI } from "./ui/preloader-ui"

export class Preloader extends AbstractScene {
    preloaderUI!: PreloaderUI

    constructor() {
        super('Preloader')
    }

    init(): void {
        this.preloaderUI = this.scene.get("PreloaderUI") as PreloaderUI

        this.scene.launch(this.preloaderUI, {
            preloader: this
        })
    }

    preload(): void {
        this.load.setPath("assets")
        this.load.image("logo", "logos/logo_en.png")
        this.load.image("logo-phaser", "logos/logo_phaser.png")
        this.load.image("background", "backgrounds/background_test.png")
        this.load.image('button', 'buttons/button-test.png')
    }
}
