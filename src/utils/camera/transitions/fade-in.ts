import { CameraFadeConfig } from "../../../types/animations/camera-fade-config-interface"

export function fadeIn(config: CameraFadeConfig): void {
    const { scene, duration, onComplete } = config
    scene.tweens.add({
        targets: scene.cameras.main,
        alpha: 1,
        duration,
        onComplete,
    })
}