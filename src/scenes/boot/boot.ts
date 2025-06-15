import { AbstractScene } from "../abstract-scene"
import { EVENTS } from "../../core/events/constants"

export class Boot extends AbstractScene {
    constructor() {
        super('Boot')
    }

    init(): void {
        this.scene.launch("BootUI")
        this.setupEvents()
    }

    preload(): void {
        this.load.setPath("assets")
        this.load.font("alagardFont", "alagard_by_pix3m.ttf")
        this.load.font("romulusFont", "romulus_by_pix3m.ttf")
    }

    private setupEvents(): void {
        this.load.on("complete", this.loadComplete, this)
    }

    private loadComplete(): void {
        this.input.keyboard?.on('keydown', this.handleInputs, this)
        this.input.on('pointerdown', this.handleInputs, this)
    }

    private handleInputs(): void {
        this.scene.start('Preloader')
        this.eventManager.emit(EVENTS.BOOT_COMPLETE)
    }
}
