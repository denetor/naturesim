'use strict';

/**
 * Plays the simulation
 */
class ScenePlay extends Phaser.Scene {
	constructor() {
		super('ScenePlay');
	}



	// load assets
	preload() {
	}


	// create game objects
	create() {
		game.gameData.status = 'game-simulation';

		// background
		// let background = this.add.image(0, 0, 'bg-black');
		// background.setOrigin(0, 0);
		// background.displayWidth = game.config.width;
		// background.displayHeight = game.config.height;

		// world map
		this.buildMap('island');

		// manage window resize
		// this.events.on('resize', resize, this);
	}


	update(t, dt) {

	}


	/**
	 * Load and generates map
	 *
	 * @param {string} mapName
	 */
	buildMap(mapName) {
		// load map data file
		var scene = this;
		loadJsonFromUri('assets/maps/map-' + mapName + '.json', function(err, mapData) {
			if (!err) {
				// load terrain data
				loadJsonFromUri('assets/maps/' + mapData.terrain, function(err, terrainData) {
					if (!err) {
						// build terrain map
						// <TODO> find a quick way to link every map tile with its terrain description

						// build map layer
						const mapTiles = mapData.tiles;
						const map = scene.make.tilemap({ data: mapTiles, tileWidth: 16, tileHeight: 16 });
						const tiles = map.addTilesetImage("map-tiles");
						const layer = map.createStaticLayer(0, tiles, 0, 0);
					} else {
						console.error('Error loading terrain data: assets/maps/' + mapData.terrain);
						console.error(err);
					}
				});
			} else {
				console.error('Error loading map: assets/maps/map-' + mapName + '.json');
				console.error(err);
			}
		});
	}


}
