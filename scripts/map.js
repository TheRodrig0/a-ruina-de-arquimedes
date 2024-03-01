// Criar mapa
let map

function loadMap() {
    const mapData = JSON.parse(game.assets['assets/tilesets/map.json'])
    let mapLayers = mapData.layers

    const mapHeight = mapData.height

    for (let i = 0; i < mapLayers.length; i++) {
        let mapTiles = []
        let arrayData = mapLayers[i].data
        
        for (let j = 0; j < arrayData.length; j += mapHeight) {
            mapTiles.push(arrayData.slice(j, j + mapHeight));
        }

        let map = new Map(mapData.tilesets[0].tilewidth, mapData.tilesets[0].tileheight)
        map.image = game.assets['assets/tilesets/Tileset.png']
        map.loadData(mapTiles.map(subArray => subArray.map(e => e - 1)))
        stage.addChild(map)

    }
}


function createMap() {
    loadMap()
}