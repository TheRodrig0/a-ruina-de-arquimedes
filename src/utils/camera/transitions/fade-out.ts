export default function fadeOut(scene: Phaser.Scene, fadeOutDuration: number = 500, fadeInDuration: number = 500, onComplete: () => void): void {
    if (!(scene instanceof Phaser.Scene)) {
        throw new Error("Invalid argument: scene isn't an instance of Phaser.Scene")
    }

    scene.tweens.add({
        targets: scene.cameras.main,
        alpha: 0,
        duration: fadeOutDuration,
        onComplete
    })
}