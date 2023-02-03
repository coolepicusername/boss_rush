// Add your code here
let bossfight = false

function boss(boss : any,difficulty : any) {
    bossfight = true
    let bossSprite = sprites.create(img`
        ................................................................
        ..................444444422222222222222222......................
        ..................444444422222222222222222......................
        ..............444411111111111111111111112222222.................
        ..............444411111111111111111111112222222.................
        ..........44441111111111111221111111112222111112222.............
        ..........44441111111111111221111111112222111112222.............
        .......4441111221111122111122111111111221111111111122...........
        .......4441111221111122111122111111111221111111111122...........
        .....441111111112211111111122111111122221111122111122222........
        .....441111111112211111111122111111122221111122111122222........
        .....441111111112211111111122111111122221111122111122222........
        ...4411111111111221111111222211111111111111111111222211122......
        ...4411111111111221111111222211111111111111111111222211122......
        ...4411222111111111111111111111111111111111111122221111122......
        ...4411222111111111111111111111111111111111111122221111122......
        .44111122222111111111111111111111122111111111111111111111122....
        .44111122222111111111111111111111122111111111111111111111122....
        .44111111111111111111111111111111111111122111111111111111122....
        .44111111111111111111111111111111111111122111111111111111122....
        41111111111111112211111111111111111111111111111111111111111122..
        41111111111111112211111111111111111111111111111111111111111122..
        41111222221111111111111111111111111111111111111221111111222222..
        41111222221111111111111111111111111111111111111221111111222222..
        41111222221111111111111111111111111111111111111221111111222222..
        42222221111122111111111111111111111111111111111111111222221122..
        42222221111122111111111111111111111111111111111111111222221122..
        4111111111111111111111111ffffff1111111111111111111111111111122..
        4111111111111111111111111ffffff1111111111111111111111111111122..
        21111111111111111111111fffffffffff1111111111111111111111111122..
        21111111111111111111111fffffffffff1111111111111111111111111122..
        21111111111111111111111fffffffffff1111111111111111111111111122..
        21111111111111111111111fffffffffff1111111111111111111111111122..
        21111111112211111111111fffffffffff111111111111111112211111dd22..
        21111111112211111111111fffffffffff111111111111111112211111dd22..
        2222211111111111111111111ffffff1111111111111111111111111dddd22..
        2222211111111111111111111ffffff1111111111111111111111111dddd22..
        2111111222111111111111111111111111111111111111111112222222dd22..
        2111111222111111111111111111111111111111111111111112222222dd22..
        2111111222111111111111111111111111111111111111111112222222dd22..
        21111111111111111111111111111111111111111111111111111ddddd2222..
        21111111111111111111111111111111111111111111111111111ddddd2222..
        211111111111112211111111122111111111111111111111111ddddddddd22..
        211111111111112211111111122111111111111111111111111ddddddddd22..
        .221111111111111111111111111111111111111111111111ddddddddd22....
        .221111111111111111111111111111111111111111111111ddddddddd22....
        .2211111111111221111111111111111111111111111122dddddddddbb22....
        .2211111111111221111111111111111111111111111122dddddddddbb22....
        ...221111122221111111111111111111111111111111ddddddddbbb22......
        ...221111122221111111111111111111111111111111ddddddddbbb22......
        ...2211222221111111111122111111111111111ddddd2222ddbbbbb22......
        ...2211222221111111111122111111111111111ddddd2222ddbbbbb22......
        ...2211222221111111111122111111111111111ddddd2222ddbbbbb22......
        .....222221111111111111111111111111111ddddddddd2222bb222........
        .....222221111111111111111111111111111ddddddddd2222bb222........
        .......222111111111111111111122ddddddddddddddbbbbbb22...........
        .......222111111111111111111122ddddddddddddddbbbbbb22...........
        ..........22221111111dddddd22dddddddddbbbbbbbbb2222.............
        ..........22221111111dddddd22dddddddddbbbbbbbbb2222.............
        ..............2222ddddddddddd22dddddbbbbbb22222.................
        ..............2222ddddddddddd22dddddbbbbbb22222.................
        ..................222222222222222222222222......................
        ..................222222222222222222222222......................
        ................................................................
    `,SpriteKind.Enemy)
    let bossHealth = statusbars.create(120, 4, StatusBarKind.Health)
bossHealth.positionDirection(CollisionDirection.Top)
bossSprite.setPosition(136,50)
}

game.onUpdate(function() {


})