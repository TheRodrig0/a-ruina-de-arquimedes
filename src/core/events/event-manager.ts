import { EVENTS } from './constants'

export class EventManager {
    private static instance: EventManager
    private scene: Phaser.Scene

    private constructor(scene: Phaser.Scene) {
        this.scene = scene
    }

    static getInstance(scene: Phaser.Scene): EventManager {
        if (!EventManager.instance) {
            EventManager.instance = new EventManager(scene)
        }
        return EventManager.instance
    }

    emit(event: EVENTS, data?: any): void {
        this.scene.events.emit(event, data)
    }

    on(event: EVENTS, callback: Function): void {
        this.scene.events.on(event, callback)
    }

    once(event: EVENTS, callback: Function): void {
        this.scene.events.once(event, callback)
    }

    off(event: EVENTS, callback?: Function): void {
        if (!callback) {
            this.scene.events.off(event)
            return
        }

        this.scene.events.off(event, callback)
    }
} 