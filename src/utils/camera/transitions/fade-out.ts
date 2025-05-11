import { CameraFadeConfig } from "../../../types/animations/camera-fade-config-interface"

export function fadeOut(config:CameraFadeConfig): void {
    const { scene, duration, onComplete } = config
    scene.tweens.add({
        targets: scene.cameras.main,
        alpha: 0,
        duration,
        onComplete,
    })
}