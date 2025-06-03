import type { CameraFadeConfig } from "../../../types/animations/camera-fade-config-interface"

export function fadeOut(config:CameraFadeConfig): void {
    const { scene, target, duration, onComplete } = config
    scene.tweens.add({
        targets: target,
        alpha: 0,
        duration,
        onComplete,
    })
}