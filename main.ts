function encontrou_arbusto () {
    return tiles.tileAtLocationEquals(grid.getLocation(mySprite), sprites.builtin.forestTiles0)
}
// A mensagem "Achei o arbusto!" só pode ser exibida se o macaquinho encontrou o arbusto.
// 
// A função 'encontrou_arbusto' retorna true/false e pode ser usada para detectar o arbusto.
function solucionar () {
    game.splash("Encontrei o arbusto!")
}
function esquerda (aSprite: Sprite) {
    grid.move(aSprite, -1, 0)
    pause(200)
}
function mostrar_tarefa () {
    game.showLongText("Escreva uma condição para a exibição da mensagem.", DialogLayout.Bottom)
}
function subir (aSprite: Sprite) {
    grid.move(aSprite, 0, -1)
    pause(200)
}
function inicializar () {
    scene.setBackgroundImage(assets.image`tabuleiro`)
    tiles.setCurrentTilemap(tilemap`tabuleiro_tiles`)
    mySprite = sprites.create(assets.image`personagem`, SpriteKind.Player)
    mySprite.setStayInScreen(true)
    grid.place(mySprite, tiles.getTileLocation(1, 6))
}
function direita (aSprite: Sprite) {
    grid.move(aSprite, 1, 0)
    pause(200)
}
function descer (aSprite: Sprite) {
    grid.move(aSprite, 0, 1)
    pause(200)
}
let mySprite: Sprite = null
inicializar()
mostrar_tarefa()
solucionar()
game.onUpdateInterval(500, function () {
    direita(mySprite)
    solucionar()
})
