import { Position } from "../../../types/commom/position-interface"

export function getMainCameraCenter(scene: Phaser.Scene): Position {
    return {
        x: scene.cameras.main.centerX,
        y: scene.cameras.main.centerY,
    }
}