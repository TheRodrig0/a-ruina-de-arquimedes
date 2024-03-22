// Chamando a biblioteca Enchant.js
enchant()

// Criação de erros para uma manutenção mais facil do código.
function createErrorMensage(mensage) {
    throw new Error(mensage)
}

function isNumber(...args) {
    return args.every(arg => typeof arg === 'number')
}

// Classe para criação da instancia game, onde todo o jogo acontecerá
class Game extends enchant.Core {
    constructor(width, height, fps) {
        super()

        if (!isNumber(width, height, fps)) {
            createErrorMensage(`Argumentos da classe Game são inválidos, pois não são números`)
        } else {
            this.width = width
            this.height = height
            this.fps = fps
        }

    }

    addChild(element) {
        if (!(element instanceof enchant.Node)) {
            createErrorMensage(`Elemento ${element} é inválido`)

        } else {
            this.rootScene.addChild(element)
        }

    }

    fileLoader(files) {
        if (!Array.isArray(files)) {
            createErrorMensage(`Argumento ${files} deve ser um array`)

        } else {
            this.preload(files)
        }

    }
}

// Classe CreateEntity herda as caracteristicas da classe enchant.Sprite
class CreateEntity extends enchant.Sprite {
    constructor(core, width, height, x, y, scale, url) {
        super()

        if (!(isNumber(width, height, x, y, scale) || scale.length >= 0 || core instanceof enchant.node)) {
            createErrorMensage(`Argumentos da classe CreateEntity são inválidos`)

        } else {
            this.core = core

            this.width = width
            this.height = height
            this.scaleX = this.scaleY = scale

            this.x = x
            this.y = y

            this.image = this.core.assets[url]

            this.core.addChild(this)
        }
    }

}

// Função para renderização do jogo
function renderGame() {
    const game = new Game(750, 400, 60)
    const files = [
        'assets/player/character.png',
        'assets/tilesets/mapTileset.png',
        'assets/tilesets/map.json'
    ]

    game.fileLoader(files)

    game.onload = () => {
        const mapData = new MapData(game)
        const renderMap = new MapRenderer(game, mapData).renderMap()

        const player = new CreateEntity(game, 50, 60, 100, 100, 2, 'assets/player/character.png')
    }

    game.start()

}

renderGame()
