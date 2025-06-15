import type { Position } from "../types/commom/position-interface"
import type { Dimensions } from "../types/commom/dimensions-interface"
import { EventManager } from "../core/events/event-manager"
import { EVENTS } from "../core/events/constants"
import { fadeIn } from "../utils/effects/object/fade-in"
import { fadeOut } from "../utils/effects/object/fade-out"

export abstract class AbstractScene extends Phaser.Scene {
    protected readonly EVENTS = EVENTS
    protected eventManager: EventManager

    constructor(key: string) {
        super(key)

        this.eventManager = EventManager.getInstance(this)
    }

    get cameraCenter(): Position {
        return {
            x: this.cameras.main.centerX,
            y: this.cameras.main.centerY,
        }
    }

    get cameraDimensions(): Dimensions {
        return {
            width: this.cameras.main.width,
            height: this.cameras.main.height,
        }
    }

    protected applyFadeInToScene(duration: number = 1000): void {
        this.cameras.main.setAlpha(0)

        fadeIn({
            scene: this,
            target: this.cameras.main,
            duration
        })
    }

    protected startSceneWithFadeOut(nextScene: Phaser.Scene | string, duration: number = 1000): void {
        fadeOut({
            scene: this,
            target: this.cameras.main,
            duration,
            onComplete: (): void => {
                this.scene.start(nextScene)
            },
        })
    }


}