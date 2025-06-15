import type { CameraFadeConfig } from "../../../types/animations/camera-fade-config-interface"
import { fadeIn } from "./fade-in"
import { fadeOut } from "./fade-out"

export function fadeInOut(config: CameraFadeConfig): void {
    const { scene, target, duration, onComplete } = config

    fadeIn({
        scene,
        target,
        duration: duration / 2,
        onComplete: (): void => {
            fadeOut({
                scene,
                target,
                duration: duration / 2,
                onComplete,
            })
        },
    })
}