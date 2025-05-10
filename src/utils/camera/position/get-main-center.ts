export default function getMainCameraCenter(scene: Phaser.Scene): { x: number, y: number } {
    return {
        x: scene.cameras.main.centerX,
        y: scene.cameras.main.centerY,
    }
}