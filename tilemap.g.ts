// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000020202020202020202020203030302020203030303030202020202030203020202030303030302020202020303030202020301010303020202020202020202020203010101030202030303030302020203030301010202020303030203030202030303040505050505050506030302020303030b0c0c0c0c0c0c0c07030302020202020b0c0c0c0c0c0c0c07030202020202020b0c0c0c0c0c0c0c07030202020202020a0808080808080809030202020202020202020203030303030302020202010103030202030303020303020202020101010302020202020303010101020202010103020202020202010101010202020202020202020202020201020202`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002020202020202020202020303030202020303030303020202020203020302020203030303030202020202030303020202030101030302020202020202020202020301010103020203030303030202020303030101020202030303020303020203030304070707070707070a0303020203030305080808080808080b0303020202020205080808080808080b0302020202020205080808080808080b0302020202020206090909090909090c030202020202020202020203030303030302020202010103030202020303020303020202020101010302020d02020303010101020202010103020202020202010101010202020202020202020202020201020202`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,myTiles.tile1,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
