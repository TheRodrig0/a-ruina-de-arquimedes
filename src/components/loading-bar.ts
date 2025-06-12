import type { Position } from "../types/commom/position-interface"
import type { Dimensions } from "../types/commom/dimensions-interface"

export class LoadingBar extends Phaser.GameObjects.Container {
    private static readonly DEFAULT_PERCENT_TEXT: string = "0%"
    private loadingPercentText: Phaser.GameObjects.Text
    private loadingBar: Phaser.GameObjects.Rectangle
    private readonly MAX_WIDTH: number = 220

    constructor({ scene, position, dimensions }: { scene: Phaser.Scene, position: Position, dimensions: Dimensions }) {
        super(scene, position.x, position.y)

        const barHeight: number = dimensions.height * 0.8
        const barDimensions: Dimensions = {
            width: 0,
            height: barHeight
        }

        this.setupBackground(dimensions)
        this.setupBar(barDimensions)
        this.setupLoadingPercentText()

        scene.add.existing(this)
    }

    private setupBackground(dimensions: Dimensions) {
        const color: number = 0x333333

        const background = this.scene.add.rectangle(
            0,
            0,
            dimensions.width,
            dimensions.height,
            color
        )

        this.add(background)
    }

    private setupBar(dimensions: Dimensions) {
        const color: number = 0xFFFFFF

        this.loadingBar = this.scene.add.rectangle(
            0,
            0,
            dimensions.width,
            dimensions.height,
            color
        )

        this.add(this.loadingBar)
    }

    private setupLoadingPercentText() {
        const text: string = LoadingBar.DEFAULT_PERCENT_TEXT
        const fontSize: string = "11px"
        const color: string = "#000000"
        const origin: number = 0.5

        this.loadingPercentText = this.scene.add.text(
            0,
            0,
            text,
            {
                fontSize,
                color
            }
        )
            .setOrigin(origin)

        this.add(this.loadingPercentText)
    }

    updateProgress(value: number): void {
        const isValidValue: boolean = value >= 0 && value <= 1

        if (!isValidValue) {
            throw new Error("Invalid argument")
        }

        const percentage: number = value * 100
        this.loadingPercentText.setText(`${percentage.toFixed(0)}%`)
        this.loadingBar.setSize(this.MAX_WIDTH * value, this.loadingBar.height)
    }
}