import { setupGlobalErrorHandler } from './utils/error/setup-global-error-handler'
import { Boot } from './scenes/Boot'
import { Game as MainGame } from './scenes/Game'
import { GameOver } from './scenes/GameOver'
import { MainMenu } from './scenes/MainMenu'
import { Preloader } from './scenes/Preloader'

setupGlobalErrorHandler()

import Phaser from "phaser"

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
        MainMenu,
        MainGame,
        GameOver
    ]
}

new Phaser.Game(config)
