import type { CameraFadeConfig } from "../../../types/animations/camera-fade-config-interface"

export function fadeIn(config: CameraFadeConfig): void {
    const { scene, target, duration, onComplete } = config
    scene.tweens.add({
        targets: target,
        alpha: 1,
        duration,
        onComplete,
    })
}