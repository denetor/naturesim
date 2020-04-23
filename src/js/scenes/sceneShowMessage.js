'use strict';

/**
 * Show am intro message to ne next game scene
 */
class SceneShowMessage extends Phaser.Scene {

	constructor() {
		super('SceneShowMessage');
	}



	// load assets
	preload() {
	}


	// create game objects
	create() {
		game.gameData.status = 'game-intro';

		let background = this.add.image(0, 0, 'bg-black');
		background.setOrigin(0, 0);
		background.displayWidth = game.config.width;
		background.displayHeight = game.config.height;

		let txtMessage = this.add.text(20, 40, 'Message body...');
		let txtOk = this.add.text(20, 100, 'Ok');
		txtOk.setInteractive();
		txtOk.name = 'ok';

		// manage user input
		this.input.on('gameobjectdown',this.onObjectClicked);

		// manage window resize
		// this.events.on('resize', resize, this);
	}


	update() {
		//
	}


	/**
	 * When a menu object is clicked
	 *
	 * @param pointer
	 * @param gameObject
	 */
	onObjectClicked(pointer, gameObject) {
		if (gameObject.name === 'ok') {
			let nextAction = game.gameData.getNextAction();
			game.scene.start(nextAction.sceneName);
		}
	}


}
