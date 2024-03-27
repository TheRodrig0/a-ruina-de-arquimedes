function moveBackGround(core, camera, mapData) {
    const distance = 3
    const input = core.input

    const mapHeight = mapData.mapData.height * mapData.mapData.tilewidth
    const mapWidth = mapData.mapData.width * mapData.mapData.tilewidth

    // Verifica as entradas do jogador e move a câmera
    if (input.left && !(camera.x >= 0)) {
        camera.x += distance
    }
    if (input.right && -camera.x + camera.width <= mapWidth) {
        camera.x -= distance
    }
    if (input.up && !(camera.y >= 0)) {
        camera.y += distance
    }
    if (input.down && -camera.y + camera.height<= mapHeight) {
        camera.y -= distance
    }
}
