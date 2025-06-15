export enum EVENTS {
    // Scene transitions
    SCENE_TRANSITION_START = 'scene-transition-start',
    SCENE_TRANSITION_COMPLETE = 'scene-transition-complete',

    // Boot events
    BOOT_COMPLETE = 'boot-complete',

    // Preloader events
    PRELOADER_PROGRESS = 'preloader-progress',
    PRELOADER_FILE_PROGRESS = 'preloader-file-progress',
    PRELOADER_COMPLETE = 'preloader-complete',

    // Menu events
    MENU_BUTTON_CLICK = 'menu-button-click',


    // Game state
    GAME_START = 'game-start',
    GAME_PAUSE = 'game-pause',
    GAME_RESUME = 'game-resume',
    GAME_OVER = 'game-over'
}