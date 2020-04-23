'use strict';

let game = null;

window.onload = function(){
    let config =  {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        autoResize: true,
        scene: [SceneLoadAssets, SceneMainMenu, SceneShowMessage, ScenePlay],
        backgroundColor: 0x444444,
        physics: {
            default: "arcade",
        }
    };
    game = new Phaser.Game(config);
    window.focus();
    gameResize();
    window.onresize = gameResize;

    /**
     * Manage screen resize
     * TODO complete, issue#1
     */
    function gameResize() {
        let width = window.innerWidth;
        let height = window.innerHeight;
        game.renderer.resize(width, height, 1.0);

        // from https://stackoverflow.com/questions/48964723/phaser-3-change-dimensions-of-the-game-during-runtime
        // see also https://labs.phaser.io/edit.html?src=src%5Cgame%20config%5Cgame%20resize.js
        // the x,y, width and height of the games world
        // the true, true, true, true, is setting which side of the world bounding box
        // to check for collisions
        // this.physics.world.setBounds(x, y, width, height, true, true, true, true);
        // setting the camera bound will set where the camera can scroll to
        // I use the 'main' camera here fro simplicity, use whichever camera you use
        // this.cameras.main.setBounds(0, 0, width, height);
        // NDR: what's "this"?
    }
};




