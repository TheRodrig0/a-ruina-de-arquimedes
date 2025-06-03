export interface CameraFadeConfig {
    scene: Phaser.Scene
    target: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[] | Phaser.Cameras.Scene2D.Camera
    duration: number
    onComplete?: () => void
}
