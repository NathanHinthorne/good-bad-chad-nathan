const loadPlaygroundCaleb = () => {

    const queueAssets = () => {
        ASSET_MGR.queueDownload(Decoration.DECORATIONS.flowers.MED_RED_FLOWER.SPRITESHEET);
        ASSET_MGR.queueDownload(PapaChad.SPRITESHEET);
        ASSET_MGR.queueDownload(Block.SPRITESHEET);
        ASSET_MGR.queueDownload(Projectile.SPRITESHEET);
        ASSET_MGR.queueDownload(DialogBubble.SPRITESHEET);
        ASSET_MGR.queueDownload(Crosshair.SPRITESHEET);
        ASSET_MGR.queueDownload(Slingshot.SPRITESHEET);
        ASSET_MGR.queueDownload(Snake.SPRITESHEET);

        // queue music
        ASSET_MGR.queueDownload("./music/starting_off_2_sample.wav");

        // queue sound effects
        ASSET_MGR.queueDownload("./sfx/temp_jump.wav");
        ASSET_MGR.queueDownload("./sfx/slingshot_launch.wav");
    };

    const addEntities = () => {

        // Add a border to the right side of the map, leading to the field.
        GAME.addEntity(new Border(
            new Vector(-1, 0), // start at the far right side of the Zone, and at the top
            new Vector(1, ZONE.PIXEL_SIZE.y), // only one pixel wide, but as tall as the entire Zone.
            Zone.getZones().village.main
        ));
        for (let y = ZONE.MAX_BLOCK.y; y >= ZONE.MIN_BLOCK.y; y--) {
            for (let x = ZONE.MAX_BLOCK.x; x >= ZONE.MIN_BLOCK.x; x--) {
                // GAME.addEntity(new Block(i, j, Block.DIRT));a

                // const pos = new Vector(y, x);
                console.log("Starting block x " + x);
                console.log("Starting block y " + y);

                switch (playGroundTileMap[y][x]) {
                    case 4:
                        GAME.addEntity(new Block(new Vector(x, y), Block.LAVA_ROCK));
                        break;
                    case 3:
                        GAME.addEntity(new Block(new Vector(x, y), Block.SNOWY_ICE));
                        break;
                    case 2:
                        GAME.addEntity(new Block(new Vector(x, y), Block.SNOWY_DIRT));
                        break;
                    case 1:
                        GAME.addEntity(new Block(new Vector(x, y), Block.DIRT));
                        break;
                    default:
                        break;
                }
            }

        }

        // Draw Sun.
        GAME.addEntity(new Sun(new Vector(Camera.SIZE.x - 2 * Sun.SCALED_SIZE, Sun.SCALED_SIZE), Sun.VILLAGE));
};
        // Set background color:
        BG_COLOR = "red";

        queueAssets();
        ASSET_MGR.downloadAll(addEntities);
};

const loadPlaygroundDevin = () => {
    const queueAssets = () => {

    };

    const addEntities = () => {
        for (let y = ZONE.MAX_BLOCK.y; y >= ZONE.MAX_BLOCK.y - 5; y--) {
            for (let x = ZONE.MIN_BLOCK.x; x <= ZONE.MAX_BLOCK.x; x++) {
                GAME.addEntity(new Block(new Vector(x, y), Block.DIRT));
            }
        }


        const papaChadBlockPos = new Vector(15, 15);

        const papa = new PapaChad(Vector.blockToWorldSpace(papaChadBlockPos));
        GAME.addEntity(papa);
    };

    const chadBlockPos = new Vector(1, 15);
    CHAD.pos = Vector.blockToWorldSpace(chadBlockPos);

    queueAssets();
    ASSET_MGR.downloadAll(addEntities);
};

const loadPlaygroundEverybody = () => {
    const queueAssets = () => {

    };

    const addEntities = () => {

    };

    queueAssets();
    ASSET_MGR.downloadAll(addEntities);
};

const loadPlaygroundNathan = () => {
    const queueAssets = () => {
        ASSET_MGR.queueDownload(PapaChad.SPRITESHEET);
        ASSET_MGR.queueDownload(Block.SPRITESHEET);
        ASSET_MGR.queueDownload(Projectile.SPRITESHEET);
        ASSET_MGR.queueDownload(DialogBubble.SPRITESHEET);
        ASSET_MGR.queueDownload(Crosshair.SPRITESHEET);
        ASSET_MGR.queueDownload(Slingshot.SPRITESHEET);
        ASSET_MGR.queueDownload(Snake.SPRITESHEET);

        // queue music
        ASSET_MGR.queueDownload(MUSIC.STARTING_OFF.path);
        ASSET_MGR.queueDownload(MUSIC.PEACEFUL_CHIPTUNE.path);

        // queue sound effects
        ASSET_MGR.queueDownload(SFX.JUMP1.path);
        ASSET_MGR.queueDownload(SFX.JUMP2.path);
        ASSET_MGR.queueDownload(SFX.SLINGSHOT_LAUNCH1.path);
        ASSET_MGR.queueDownload(SFX.SLINGSHOT_LAUNCH2.path);
        ASSET_MGR.queueDownload(SFX.SLINGSHOT_LAUNCH3.path);
        ASSET_MGR.queueDownload(SFX.SLINGSHOT_LAUNCH4.path);
        ASSET_MGR.queueDownload(SFX.SLINGSHOT_STRETCH.path);

    };

    const addEntities = () => {
        // Add a layer of blocks to the floor.
        for (let x = ZONE.MIN_BLOCK.x; x <= ZONE.MAX_BLOCK.x; x++) {
            GAME.addEntity(new Block(new Vector(x, ZONE.MAX_BLOCK.y), Block.DIRT));
        }

        // Place chad above the blocks.
        const blockPos = new Vector(5, 20);
        CHAD.pos = Vector.blockToWorldSpace(blockPos);


        // NOTE: we can't activate music until the user has interacted with the canvas. (this issue is inherent to HTML5)
        //  If listening for a click is the only way to activate music, that's fine. 
        //  Our game's START button in the final version can be the trigger.
        let playMusic = () => {
            ASSET_MGR.playAudio(MUSIC.PEACEFUL_CHIPTUNE.path, MUSIC.PEACEFUL_CHIPTUNE.volume, true);
        
            // delete the event listener so that the music doesn't restart when the user clicks again
            document.body.removeEventListener('click', playMusic);
        };
        
        document.body.addEventListener('click', playMusic);

        // GAME.addEntity(new DialogBubble(CHAD, "Hey pal! My name's Papa Chad", DialogBubble.NORMAL));
        GAME.addEntity(new Crosshair());
        GAME.addEntity(new Slingshot());
        CANVAS.addEventListener('dblclick', function(e) {
            e.preventDefault();
        });
    };

    // Set background color:
    BG_COLOR = "skyblue";

    queueAssets();
    ASSET_MGR.downloadAll(addEntities);
};

const loadPlaygroundTrae = () => {
    const queueAssets = () => {
        ASSET_MGR.queueDownload(Snake.SPRITESHEET);
        ASSET_MGR.queueDownload(Slime.SPRITESHEET);
        ASSET_MGR.queueDownload(Bunny.SPRITESHEET);
        ASSET_MGR.queueDownload(Yeti.SPRITESHEET);
    };

    const addEntities = () => {
        // Add a layer of blocks to the floor.
        for (let x = ZONE.MIN_BLOCK.x; x <= ZONE.MAX_BLOCK.x; x++) {
            GAME.addEntity(new Block(new Vector(x, ZONE.MAX_BLOCK.y), Block.DIRT));
        }
        GAME.addEntity(new Bunny(Vector.blockToWorldSpace(new Vector(60, 20))));
        GAME.addEntity(new Snake(Vector.blockToWorldSpace(new Vector(80, 20))));
        GAME.addEntity(new Slime(Vector.blockToWorldSpace(new Vector(100, 20))));
        GAME.addEntity(new Yeti(Vector.blockToWorldSpace(new Vector(120, 20))));

        CHAD.pos = Vector.blockToWorldSpace(new Vector(50, 20));
    };

    BG_COLOR = "purple";

    queueAssets();
    ASSET_MGR.downloadAll(addEntities);
};
