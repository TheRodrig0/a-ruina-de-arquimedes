import { AbstractScene } from "../abstract-scene"

export class Preloader extends AbstractScene {
    constructor() {
        super('Preloader')
    }

    init(): void {
        this.scene.launch("PreloaderUI")
        this.setupEvents()
    }

    preload(): void {
        this.load.setPath("assets")
        this.load.image("logo", "logos/logo_en.png")
        this.load.image("logo-phaser", "logos/logo_phaser.png")
        this.load.image("background", "backgrounds/background_test.png")
        this.load.image("button", "buttons/button-test.png")
    }

    private setupEvents(): void {
        this.load.on("progress", this.handleProgress, this)
        this.load.on("fileprogress", this.handleFileProgress, this)
        this.load.on("complete", this.loadComplete, this)
    }

    private handleProgress(value: number): void {
        this.eventManager.emit(this.EVENTS.PRELOADER_PROGRESS, value)
    }

    private handleFileProgress(file: { key: string }): void {
        this.eventManager.emit(this.EVENTS.PRELOADER_FILE_PROGRESS, file)
    }

    private loadComplete(): void {
        const duration = 1000

        this.eventManager.emit(this.EVENTS.PRELOADER_COMPLETE, duration)

        setTimeout((): Phaser.Scenes.ScenePlugin =>
            this.scene.start("Intro")
            , duration)
    }

}
