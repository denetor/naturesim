/**
 * Base class for every entity in the game
 */
class Entity extends Phaser.GameObjects.Sprite {


    constructor(scene, x, y, key, gameData) {
        super(scene, x, y, key);
        this.gameData = gameData;
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData('type', 'scenery');
        this.setData('killable', false);
    }
}