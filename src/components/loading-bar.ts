import type { Position } from "../types/commom/position-interface"
import type { Dimensions } from "../types/commom/dimensions-interface"

export class LoadingBar extends Phaser.GameObjects.Container {
    private readonly loadingPercentText: Phaser.GameObjects.Text
    private readonly loadingBar: Phaser.GameObjects.Rectangle
    private readonly MAX_WIDTH: number = 220

    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0)
        
        const center: Position = {
            x: scene.cameras.main.centerX,
            y: scene.cameras.main.centerY
        }

        const position: Position = {
            x: center.x,
            y: center.y * 1.05
        }

        const backgroundDimensions: Dimensions = {
            width: 226,
            height: 16
        }

        const barDimensions: Dimensions = {
            width: 0,
            height: 14
        }

        const background: Phaser.GameObjects.Rectangle = scene.add.rectangle(
            position.x,
            position.y,
            backgroundDimensions.width,
            backgroundDimensions.height,
            0x333333
        )

        this.loadingBar = scene.add.rectangle(
            position.x,
            position.y,
            barDimensions.width,
            barDimensions.height,
            0xFFFFFF
        )

        this.loadingPercentText = scene.add.text(
            position.x,
            position.y,
            "0%",
            {
                fontSize: "11px",
                color: "#000000"
            }
        ).setOrigin(0.5)

        this.add([background, this.loadingBar, this.loadingPercentText])
        scene.add.existing(this)
    }

    public updateProgress(value: number): void {
        if (value < 0 || value > 1) {
            throw new Error("Invalid argument")
        }

        const percentage: number = value * 100
        this.loadingPercentText.setText(`${percentage.toFixed(0)}%`)
        this.loadingBar.setSize(this.MAX_WIDTH * value, this.loadingBar.height)
    }
}