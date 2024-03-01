// chamando a biblioteca
enchant()

// criando a tela do game
let game = new Core(1200, 600)
game.fps = 60

// seta os arquivos que vão ser carregados
let loadFiles = [
    'assets/tilesets/Tileset.png',
    'assets/tilesets/map.json',
    'assets/character.png'

]
game.preload(loadFiles)

//
let stage = new Group()

//Criar Sprite
function createNewSprite(width, height, url, x, y) {
    let sprite

    sprite = new Sprite(width, height)
    sprite.image = game.assets[url]
    sprite.x = x
    sprite.y = y
    stage.addChild(sprite)

    return sprite

}

// quando a variavel game carrega ele executa o que deve acontecer nele
game.onload = () => {

    //mapa
    createMap()
    loadMap()

    game.rootScene.addChild(stage)

    //player
    let player = createNewSprite(50, 80, 'assets/character.png', 50, 50)



}

// começa o game
game.start()