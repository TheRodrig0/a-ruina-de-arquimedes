import Phaser from "phaser"
import type { Position } from "../types/commom/position-interface"
import type { Dimensions } from "../types/commom/dimensions-interface"

export abstract class AbstractScene extends Phaser.Scene {
    constructor(key: string) {
        super(key)
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

}