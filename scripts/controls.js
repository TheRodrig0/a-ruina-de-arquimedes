function movePLayer(core, player) {
    const distance = 2;

    if (core.input.left) {
        player.x -= distance;
    }
    if (core.input.right) {
        player.x += distance;
    }
    if (core.input.up) {
        player.y -= distance;
    }
    if (core.input.down) {
        player.y += distance;
    }
}