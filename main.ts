tiles.setCurrentTilemap(tilemap`level2`)
tiles.setCurrentTilemap(tilemap`level3`)
let joe = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
    let playerhealth = statusbars.create(40,5,StatusBarKind.Health)

playerhealth.setPosition(21,119)

controller.moveSprite(joe, 120, 120)
joe.z += 1
let camera = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
scene.cameraFollowSprite(camera)
camera.follow(joe, 110)
tileUtil.createSpritesOnTiles(img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 e 7 7 7 7 7 e 7 7 7 7 7
        7 7 7 7 e f f f f f e 7 7 7 7 7
        7 7 7 f e e e e e e e f 7 7 7 7
        7 7 f f e f f f f f e f f 7 7 7
        7 f f f e f f f f f e f f f 7 7
        7 f f f e f f f f f e f f f 7 7
        7 f f f e e e e e e e f f f 7 7
        7 f f f b f f f f f b f f f 7 7
        7 f f f b f f f f f b f f f 7 7
        7 f f f b f f f f f b f f f 7 7
        7 f f f c c c c c c c f f f 7 7
        7 7 f f c f f f f f c f f 7 7 7
        7 7 7 f c f f f f f c f 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    `, img`
    ................................
    ................................
    ................................
    ................................
    ............e......e............
    ............e.ffff.e............
    ..........ffeffffffeff..........
    .........fffeeeeeeeefff.........
    .......fffffeffffffefffff.......
    ......ffffffeffffffeffffff......
    .....fffffffeffffffefffffff.....
    .....fffffffeeeeeeeefffffff.....
    ....ffffffffeffffffeffffffff....
    ...fffffffffeffffffefffffffff...
    ...fffffffffbffffffbfffffffff...
    ...fffffffffbbbbbbbbfffffffff...
    ...fffffffffbffffffbfffffffff...
    ...fffffffffbffffffbfffffffff...
    ...fffffffffbffffffbfffffffff...
    ....ffffffffccccccccffffffff....
    .....fffffffcffffffcfffffff.....
    .....fffffffcffffffcfffffff.....
    ......ffffffcffffffcffffff......
    .......fffffccccccccfffff.......
    .........fffcffffffcfff.........
    ..........ffffffffffff..........
    ..............ffff..............
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    let pprojectile = sprites.createProjectileFromSprite(img`
        . . . b b . . .
        . . b 5 5 b . .
        . b 5 d 1 5 b .
        . b 5 3 1 5 b .
        . c 5 3 1 d c .
        . c 5 1 d d c .
        . . f d d f . .
        . . . f f . . .
    `,joe, 0, -200)
})
boss(1,1)

