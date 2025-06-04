import { setupGlobalErrorHandler } from './utils/error/setup-global-error-handler'
import Phaser from "phaser"
import { Boot } from './scenes/boot'
import { Preloader } from './scenes/preloader'
import { Intro } from './scenes/intro'
import { MainMenu } from './scenes/main-menu'
import { Game as MainGame } from './scenes/game'
import { GameOver } from './scenes/game-over'
import { InProgressScene } from './scenes/in-progress-scene'

setupGlobalErrorHandler()

const config: Phaser.Types.Core.GameConfig = {
    title: "A ruína de Arquimedes",
    type: Phaser.WEBGL,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 427,
        height: 240,
    },
    parent: 'game-container',
    render: {
        antialias: false,
        antialiasGL: false,
        pixelArt: true,
    },
    roundPixels: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            fps: 24,
            timeScale: 1,
            gravity: { x: 0, y: 0 },
            tileBias: 16
        },
    },
    scene: [
        Boot,
        Preloader,
        Intro,
        MainMenu,
        MainGame,
        GameOver,
        InProgressScene
    ]
}

new Phaser.Game(config)
