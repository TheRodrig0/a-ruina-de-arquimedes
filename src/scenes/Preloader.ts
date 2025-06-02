import { AbstractScene } from "./abstract-scene"
import { LoadingBar } from "../components/loading-bar"
import { goToNextSceneWithFade } from "../utils/scene/transition/go-to-next-scene-with-fade"
import type { Position } from "../types/commom/position-interface"

export class Preloader extends AbstractScene {
    private loadingBar!: LoadingBar
    private currentAssetInLoadingText!: Phaser.GameObjects.Text

    constructor() {
        super('Preloader')
    }

    init(): void {
        this.loadingBar = new LoadingBar(this)

        const mainCameraCenter: Position = this.cameraCenter
        const currentLoadingAssetTextPosition: Position = {
            x: mainCameraCenter.x,
            y: mainCameraCenter.y * 0.9
        }

        this.add.text(
            currentLoadingAssetTextPosition.x,
            currentLoadingAssetTextPosition.y,
            "Loading",
        )
            .setOrigin(0.5)

        const currentAssetInLoadingTextPosition: Position = {
            x: mainCameraCenter.x,
            y: mainCameraCenter.y * 1.18
        }

        this.currentAssetInLoadingText = this.add.text(
            currentAssetInLoadingTextPosition.x,
            currentAssetInLoadingTextPosition.y,
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
        this.load.image("logo-phaser", "logos/logo_phaser.png")
        this.load.image("background", "backgrounds/background_test.png")

        this.load.on("progress", this.loadingBar.updateProgress.bind(this.loadingBar))
        this.load.on('fileprogress', this.updateFilesInLoadingText.bind(this))
        this.load.on("complete", this.completeLoading.bind(this))
    }

    private updateFilesInLoadingText(file: {key: string}): void {
        this.currentAssetInLoadingText.setText(`Asset: ${file.key}`)
    }

    private completeLoading(): void {
        const delay: number = 2000

        goToNextSceneWithFade({
            scene: this,
            nextSceneKey: "Intro",
            cameraAnimationDuration1: delay / 2,
            cameraAnimationDuration2: delay / 2
        })
    }
}