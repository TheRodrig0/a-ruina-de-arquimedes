import { TextButton } from "phaser-ui-tools"

export class Button extends TextButton {
    constructor({ scene, x = 0, y = 0, text = "", key = "", callback }:
        { scene: Phaser.Scene, x?: number, y?: number, text?: string, key: string, callback?: () => void }) {
        super(scene, x, y, key, callback)

        this.setText(text, {
            color: '#ffffff',
            fontSize: '10px',
            align: 'center'
        })
        
        this.button.setInteractive({ useHandCursor: true })

        this.button.setOrigin(0.5, 0.5)

        this.button.on('pointerover', () => this.onPointerOver())
        this.button.on('pointerout', () => this.onPointerOut())
    }

    private onPointerOver(): void {
        this.scene.tweens.add({
            targets: [this.button, this.text],
            scale: 1.04,
            duration: 100,
            ease: 'Power1'
        })
    }

    private onPointerOut(): void {
        this.scene.tweens.add({
            targets: [this.button, this.text],
            scale: 1,
            duration: 100,
            ease: 'Power1'
        })
    }

    setText(text: string, style?: Phaser.Types.GameObjects.Text.TextStyle): this {
        if (this.text) {
            this.text.destroy()
        }

        this.text = this.scene.add.text(this.button.x, this.button.y, text, style)
        this.text.setOrigin(0.5, 0.5)

        const bounds = this.button.getBounds()
        this.text.setPosition(bounds.centerX, bounds.centerY)

        this.add(this.text)

        return this
    }
}