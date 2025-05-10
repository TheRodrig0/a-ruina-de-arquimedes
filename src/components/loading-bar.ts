import getMainCameraCenter from "../utils/camera/position/get-main-center"

export default class LoadingBar {
    private loadingPercentText!: Phaser.GameObjects.Text
    private loadingBar!: Phaser.GameObjects.Rectangle

    create(scene: Phaser.Scene): void {
        if (!(scene instanceof Phaser.Scene)) {
            throw new Error("Invalid argument: scene isn't an instance of Phaser.Scene")
        }

        const MAIN_CAMERA_CENTER: { x: number, y: number } = getMainCameraCenter(scene)

        const LOADING_BACKGROUND_POSITION: { x: number, y: number } = {
            x: MAIN_CAMERA_CENTER.x,
            y: MAIN_CAMERA_CENTER.y * 1.05
        }

        const LOADING_BAR_POSITION: { x: number, y: number } = {
            x: MAIN_CAMERA_CENTER.x,
            y: LOADING_BACKGROUND_POSITION.y
        }

        const LOADING_PERCENT_TEXT_POSITION: { x: number, y: number } = {
            x: MAIN_CAMERA_CENTER.x,
            y: MAIN_CAMERA_CENTER.y * 1.05
        }

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
            LOADING_BACKGROUND_POSITION.x,
            LOADING_BACKGROUND_POSITION.y,
            LOADING_BACKGROUND_DIMENSIONS.width,
            LOADING_BACKGROUND_DIMENSIONS.height,
            0x333333
        )

        this.loadingBar = scene.add.rectangle(
            LOADING_BAR_POSITION.x,
            LOADING_BAR_POSITION.y,
            LOADING_BAR_DIMENSIONS.width,
            LOADING_BAR_DIMENSIONS.height,
            0xFFFFFF
        )

        this.loadingPercentText = scene.add.text(
            LOADING_PERCENT_TEXT_POSITION.x,
            LOADING_PERCENT_TEXT_POSITION.y,
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
