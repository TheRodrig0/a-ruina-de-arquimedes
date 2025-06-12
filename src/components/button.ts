export class Button extends Phaser.GameObjects.Container {
    private static readonly DEFAULT_FONT_SIZE: number = 10
    private static readonly DEFAULT_TEXT: string = "Click me"
    private static readonly DEFAULT_ORIGIN: number = 0.5

    private textElement: Phaser.GameObjects.Text
    private backgroundElement: Phaser.GameObjects.Image | undefined
    private isEnabled: boolean = true

    constructor({ scene, x, y, text, background, onClick }: { scene: Phaser.Scene, x: number, y: number, text: string, background?: string, onClick?: () => any }) {
        super(scene, x, y)

        if (background) {
            this.setupBackground(background)
        }

        this.setupText(text ?? Button.DEFAULT_TEXT)
        this.setupEvents(onClick ?? (() => { }))
        this.setupHitbox()

        this.scene.add.existing(this)
    }

    private setupText(text: string) {
        this.textElement = this.scene.add.text(0, 0, text, {
            fontSize: Button.DEFAULT_FONT_SIZE + "px"
        })
            .setOrigin(Button.DEFAULT_ORIGIN)

        this.add(this.textElement)
    }

    private setupBackground(background: string) {
        this.backgroundElement = this.scene.add.image(0, 0, background)
            .setOrigin(Button.DEFAULT_ORIGIN)

        this.add(this.backgroundElement)
    }

    private setupHitbox() {
        const element = this.backgroundElement ?? this.textElement

        this.setSize(element.width, element.height)
        this.setInteractive({ useHandCursor: true })
    }

    private setupEvents(onClick: () => any) {
        const elements = [this.backgroundElement, this.textElement].filter(Boolean) as Phaser.GameObjects.GameObject[]

        this.onPointerOverEvent(elements)
        this.onPointerOutEvent(elements)

        if (!onClick) {
            return
        }

        this.onClickEvent(onClick)
    }

    private onClickEvent(onClick: () => any) {
        this.on("pointerdown", () => {
            if (!this.isEnabled) {
                return
            }

            onClick()
        })
    }

    private onPointerOverEvent(elements: Phaser.GameObjects.GameObject[]) {
        const duration: number = 100
        const scale: number = 1.04
        
        this.on("pointerover", () => {
            if (!this.isEnabled) {
                return
            }

            this.scene.tweens.killTweensOf(elements)

            this.scene.tweens.add({
                targets: elements,
                scale,
                duration
            })
        })
    }

    private onPointerOutEvent(elements: Phaser.GameObjects.GameObject[]) {
        const duration: number = 100
        const scale: number = 1 

        this.on("pointerout", () => {
            if (!this.isEnabled) {
                return
            }

            this.scene.tweens.killTweensOf(elements)

            this.scene.tweens.add({
                targets: elements,
                scale,
                duration
            })
        })
    }

    setEnabled(enabled: boolean) {
        const alpha: number = enabled ? 1 : 0.5

        this.isEnabled = enabled
        this.setAlpha(alpha)
        this.disableInteractive()

        if (!enabled) {
            return
        }

        this.setInteractive({ useHandCursor: true })
    }

    destroy(fromScene?: boolean): void {
        this.removeAllListeners()
        super.destroy(fromScene)
    }
}