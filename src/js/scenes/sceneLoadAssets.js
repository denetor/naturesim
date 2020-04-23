'use strict';

/**
 * Load most common game assets
 */
class SceneLoadAssets extends Phaser.Scene {

	constructor() {
		super('SceneLoadAssets');
	}


	// load assets
	preload() {
		// backgrounds
		this.load.image('bg-black', 'assets/graphics/backgrounds/bg-black.png');

		// map tiles
		this.load.image("map-tiles", "assets/graphics/map-tiles.png");

		// ships
		// this.load.spritesheet('animPlayerShipIdle', 'assets/entities/animPlayerShipIdle.png', {
		// 	frameWidth: 64,
		// 	frameHeight: 64
		// });
		// this.load.spritesheet('animSoldierShipIdle', 'assets/entities/animSoldierShipIdle.png', {
		// 	frameWidth: 64,
		// 	frameHeight: 64
		// });
	}


	// create game objects
	create() {
		this.add.text(game.config.width / 2, game.config.height / 2, 'Loading...');

		// ship animations
		// this.anims.create({
		// 	key: 'animPlayerShipIdle',
		// 	frames: this.anims.generateFrameNumbers('animPlayerShipIdle'),
		// 	frameRate: 4,
		// 	repeat: -1
		// });
		// this.anims.create({
		// 	key: 'animSoldierShipIdle',
		// 	frames: this.anims.generateFrameNumbers('animSoldierShipIdle'),
		// 	frameRate: 4,
		// 	repeat: -1
		// });

		this.scene.start('SceneMainMenu');
	}
}
