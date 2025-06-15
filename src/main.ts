import { setupGlobalErrorHandler } from './utils/error/setup-global-error-handler'

import Phaser from "phaser"
import { FontPlugin } from 'phaser-font-plugin'

import { Boot } from './scenes/boot/boot'
import { BootUI } from './scenes/boot/boot-ui'
import { Preloader } from './scenes/preloader/preloader'
import { PreloaderUI } from './scenes/preloader/preloader-ui'
import { Intro } from './scenes/menu/intro'
import { MainMenu } from './scenes/menu/main-menu'
import { Game as MainGame } from './scenes/game/game'
import { GameOver } from './scenes/game/game-over'
import { InProgressScene } from './scenes/utility/in-progress-scene'

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
    plugins: {
        global: [
            {
                key: 'FontPlugin',
                plugin: FontPlugin,
                start: true,
            }
        ]
    },
    scene: [
        Boot,
        BootUI,
        Preloader,
        PreloaderUI,
        Intro,
        MainMenu,
        MainGame,
        GameOver,
        InProgressScene
    ]
}

new Phaser.Game(config)
