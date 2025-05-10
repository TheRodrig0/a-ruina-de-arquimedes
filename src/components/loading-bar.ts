import getMainCameraCenter from "../utils/position/get-main-center"

export default class LoadingBar {
    private loadingPercentText!: Phaser.GameObjects.Text
    private loadingBar!: Phaser.GameObjects.Rectangle

    create(scene: Phaser.Scene): void {
        if (!(scene instanceof Phaser.Scene)) {
            throw new Error("Invalid argument: scene isn't an instance of Phaser.Scene")
        }

        const MAIN_CAMERA_CENTER: { x: number, y: number } = getMainCameraCenter(scene)
        const CENTER_X: number = MAIN_CAMERA_CENTER.x
        const CENTER_Y: number = MAIN_CAMERA_CENTER.y

        const LOADING_BACKGROUND_POSITION: number = CENTER_Y * 1.05
        const LOADING_BACKGROUND_DIMENSIONS: Record<string, number> = {
            width: 226,
            height: 16
        }

        const LOADING_BAR_DIMENSIONS: Record<string, number> = {
            width: 0,
            height: 14
        }

        const FONT_STYLE: Record<string, string> = {
            fontSize: "11px",
            color: "#000000"
        }

        scene.add.rectangle(
            CENTER_X,
            LOADING_BACKGROUND_POSITION,
            LOADING_BACKGROUND_DIMENSIONS.width,
            LOADING_BACKGROUND_DIMENSIONS.height,
            0x333333
        )

        this.loadingBar = scene.add.rectangle(
            CENTER_X,
            LOADING_BACKGROUND_POSITION,
            LOADING_BAR_DIMENSIONS.width,
            LOADING_BAR_DIMENSIONS.height,
            0xFFFFFF
        )

        this.loadingPercentText = scene.add.text(
            CENTER_X,
            LOADING_BACKGROUND_POSITION,
            "0%",
            FONT_STYLE
        )
            .setOrigin(0.5)
    }

    updateProgress(value: number): void {
        if (value < 0 || value > 1) {
            throw new Error("Invalid argument")
        }

        const MAX_WIDTH = 220
        const PERCENTAGE = value * 100

        this.loadingPercentText.setText(`${PERCENTAGE.toFixed(0)}%`)
        this.loadingBar.setSize(MAX_WIDTH * value, this.loadingBar.height)
    }
}
