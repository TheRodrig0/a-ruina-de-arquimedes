class MapData {
    constructor(core) {
        if (core.constructor.name != 'Game') {
            createErrorMensage(`Argumentos da classe MapData são inválidos`)

        } else {
            this.core = core

            this.mapData = JSON.parse(core.assets['assets/tilesets/map.json'])
            this.mapLayers = this.mapData.layers
            this.mapHeight = this.mapData.height
            this.mapTiles = []
        }
    }

    convertArrayInMatrix() {
        for (let i = 0; i < this.mapLayers.length; i++) {
            let mapSubTiles = []

            let currentLayerArray = this.mapLayers[i].data

            for (let j = 0; j < currentLayerArray.length; j += this.mapHeight) {
                mapSubTiles.push(currentLayerArray.slice(j, j + this.mapHeight))
            }

            this.mapTiles[i] = mapSubTiles
        }
    }

    getMapTiles() {
        this.convertArrayInMatrix()
        return this.mapTiles
    }
}

class MapRenderer {
    constructor(core, mapData) {
        this.core = core
        this.mapData = mapData
    }

    renderMap() {
        const mapTiles = this.mapData.getMapTiles()

        for (let o = 0; o < mapTiles.length; o++) {
            const map = new Map(16, 16)
            map.image = this.core.assets['assets/tilesets/mapTileset.png']
            map.loadData(mapTiles[o].map(subArray => subArray.map(e => e - 1)))
            this.core.addChild(map)
        }
    }
}
