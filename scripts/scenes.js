// Criar mapa
let map

function createMap() {
    let mapData = JSON.parse(game.assets['assets/tilesets/map.json'])
    let mapData2D = []


    for (let y = 0; y < mapData.height; y++) {
        let row = []
        for (let x = 0; x < mapData.width; x++) {
            let tile = mapData.layers[0].data[y * mapData.width + x]
            row.push(tile)
        }
        mapData2D.push(row)
    }

    map = new Map(mapData.tilesets[0].tilewidth, mapData.tilesets[0].tileheight);
    map.image = game.assets['assets/tilesets/Tileset.png'];
    map.loadData(mapData2D);
    game.rootScene.addChild(map);
}