class GameData {


	/**
	 * Game information (player status, score, ...)
	 */
	constructor() {
		this.reset();
		let defaults = new Parameters();
		this.defaults = defaults.getValues();
	}


	/**
	 * Reset values at initial state
	 */
	reset() {
		// player money
		this.turn = 0;
		// game status
		// begin: game begin
		this.status = 'begin';
	}


	/**
	 * Basing on game status, decides what scene to play
	 *
	 * @returns {{sceneName: string}}
	 */
	getNextAction() {
		let res = {
			sceneName: null,
		};
		if (this.status === 'begin') {
			res.sceneName = 'SceneShowMessage';
			res.messageName = 'gameIntroMessage';
		} else if (this.status === 'game-intro') {
			res.sceneName = 'ScenePlay';
		}

		return res;
	}


}
