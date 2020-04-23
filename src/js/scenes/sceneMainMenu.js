'use strict';

/**
 * Main menu
 */
class SceneMainMenu extends Phaser.Scene {

	constructor() {
		super('SceneMainMenu');
		game.gameData = new GameData();
		game.gameData.reset();
	}



	// load assets
	preload() {

	}


	// create game objects
	create() {
		let background = this.add.image(0, 0, 'bg-black');
		background.setOrigin(0, 0);
		background.displayWidth = game.config.width;
		background.displayHeight = game.config.height;

		let txtStart = this.add.text(20, 40, 'Start simulation');
		let txtPreferences = this.add.text(20, 60, 'Options');
		let txtQuit = this.add.text(20, 80, 'Quit');
		txtStart.setInteractive();
		txtPreferences.setInteractive();
		txtQuit.setInteractive();
		txtStart.name = 'start';
		txtQuit.name = 'quit';

		// manage user input
		this.input.on('gameobjectdown',this.onObjectClicked);

		// manage window resize
		// this.events.on('resize', resize, this);
	}


	update() {

	}


	/**
	 * When a menu object is clicked
	 *
	 * @param pointer
	 * @param gameObject
	 */
	onObjectClicked(pointer, gameObject) {
		if (gameObject.name === 'start') {
			// start new game
			game.gameData.reset();
			let nextAction = game.gameData.getNextAction();
			game.scene.start(nextAction.sceneName);
		} else if (gameObject.name === 'quit') {
			// quit game
			alert('bye');
		}
	}


}
