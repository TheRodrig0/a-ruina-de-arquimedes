import AbstractScene from "./AbstractScene"
import LoadingBar from "../components/loading-bar"
import getMainCameraCenter from "../utils/position/get-main-center"

export default class Preloader extends AbstractScene {
    private loadingBar!: LoadingBar
    private currentAssetInLoadingText!: Phaser.GameObjects.Text

    constructor() {
        super('Preloader')
    }

    init(): void {
        this.loadingBar = new LoadingBar()
        this.loadingBar.create(this)

        const MAIN_CAMERA_CENTER: { x: number, y: number } = getMainCameraCenter(this)
        const CURRENT_LOADING_ASSET_TEXT_POSITION: { x: number, y: number } = {
            x: MAIN_CAMERA_CENTER.x,
            y: MAIN_CAMERA_CENTER.y * 0.9
        }

        this.add.text(
            CURRENT_LOADING_ASSET_TEXT_POSITION.x,
            CURRENT_LOADING_ASSET_TEXT_POSITION.y,
            "Loading",
        )
            .setOrigin(0.5)

        const CURRENT_ASSET_IN_LOADING_TEXT_POSITION: { x: number, y: number } = {
            x: MAIN_CAMERA_CENTER.x,
            y: MAIN_CAMERA_CENTER.y * 1.18
        }

        this.currentAssetInLoadingText = this.add.text(
            CURRENT_ASSET_IN_LOADING_TEXT_POSITION.x,
            CURRENT_ASSET_IN_LOADING_TEXT_POSITION.y,
            "Asset: ",
            {
                color: '#c1c1c1',
                fontSize: 10,
            }
        )
            .setOrigin(0.5)
    }

    preload(): void {
        this.load.setPath("assets")
        this.load.image("logo", "logos/logo_en.png")

        this.load.on("progress", this.loadingBar.updateProgress.bind(this.loadingBar))
        this.load.on('fileprogress', this.updateFilesInLoadingText.bind(this))
        this.load.on("complete", this.completeLoading.bind(this))
    }

    private updateFilesInLoadingText(file: any): void {
        this.currentAssetInLoadingText.setText(`Asset: ${file.key}`)
    }

    private completeLoading(): void {
        const DELAY_TIME: number = 2000

        this.time.delayedCall(DELAY_TIME, (): Phaser.Scenes.ScenePlugin =>
            this.scene.start("MainMenu")
        )
    }
}