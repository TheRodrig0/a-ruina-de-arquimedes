interface BlinkEffectConfig {
    scene: Phaser.Scene,
    target: Phaser.GameObjects.Text,
    othersConfigs: {
        alpha?: number,
        duration?: integer,
        yoyo?: boolean,
        repeat?: integer
    }
}

export default function applyBlinkEffect(config: BlinkEffectConfig): void {
    const { scene, target, othersConfigs } = config

    scene.tweens.add({
        targets: target,
        alpha: othersConfigs.alpha || 0,
        duration: othersConfigs.duration || 1000,
        yoyo: othersConfigs.yoyo || true,
        repeat: othersConfigs.repeat || -1
    })
}