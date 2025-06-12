import type { Position } from "../../types/commom/position-interface"
import type { Dimensions } from "../../types/commom/dimensions-interface"
import { AbstractScene } from "../abstract-scene"
import { LoadingBar } from "../../components/loading-bar"
import { goToNextSceneWithFade } from "../../utils/transitions/scene/go-to-next-scene-with-fade"

export class PreloaderUI extends AbstractScene {
    preloader: Phaser.Scene
    loadingBar: LoadingBar
    currentAssetInLoadingText: Phaser.GameObjects.Text
    constructor() {
        super('PreloaderUI')
    }

    init(data: any): void {
        this.preloader = data.preloader
        this.createUI()
        this.setupLoadingEvents()
    }

    private setupLoadingEvents(): void {
        this.preloader.load.on("progress", this.loadingBar.updateProgress.bind(this.loadingBar))
        this.preloader.load.on("fileprogress", this.updateCurrentAssetText.bind(this))
        this.preloader.load.on("complete", this.onCompleteLoading.bind(this))
    }

    private createUI(): void {
        const cameraCenter: Position = this.cameraCenter

        const loadingBarPosition: Position = {
            x: cameraCenter.x,
            y: cameraCenter.y * 1.05
        }
        const loadingBarDimensions: Dimensions = {
            width: 226,
            height: 16
        }
        const loadingTextPosition: Position = {
            x: cameraCenter.x,
            y: cameraCenter.y * 0.9
        }
        const currentAssetTextPosition: Position = {
            x: cameraCenter.x,
            y: cameraCenter.y * 1.18
        }

        this.createLoadingBar(loadingBarPosition, loadingBarDimensions)
        this.createStaticLoadingText(loadingTextPosition)
        this.createCurrentAssetText(currentAssetTextPosition)
    }

    private createLoadingBar(position: Position, dimensions: Dimensions): void {
        this.loadingBar = new LoadingBar({
            scene: this,
            position, dimensions
        })
    }

    private createStaticLoadingText(position: Position): void {
        const text: string = "Loading"

        this.add.text(
            position.x,
            position.y,
            text
        )
            .setOrigin(0.5)
    }

    private createCurrentAssetText(position: Position): void {
        const text: string = "Asset: "
        const style: Phaser.Types.GameObjects.Text.TextStyle = {
            color: '#c1c1c1',
            fontSize: 10
        }

        this.currentAssetInLoadingText = this.add.text(
            position.x,
            position.y,
            text,
            style
        )
            .setOrigin(0.5)
    }

    private updateCurrentAssetText(file: { key: string }): void {
        this.currentAssetInLoadingText.setText(`Asset: ${file.key}`)
    }

    private onCompleteLoading(): void {
        const nextSceneKey: string = "Intro"
        const durationAnim1: number = 1000
        const durationAnim2: number = 1000

        goToNextSceneWithFade({
            scene: this,
            nextSceneKey,
            durationAnim1,
            durationAnim2
        })
    }
}