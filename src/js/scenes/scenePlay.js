'use strict';

/**
 * Plays the simulation
 */
class ScenePlay extends Phaser.Scene {
	constructor() {
		super('ScenePlay');
		this.terrains = new Map();      // terrain types Map
		this.cells = [];                // map cells
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
		var terrains = this.terrains;
		var cells = this.cells;
		loadJsonFromUri('assets/maps/map-' + mapName + '.json', function(err, mapData) {
			if (!err) {
				// load terrain data
				loadJsonFromUri('assets/maps/' + mapData.terrain, function(err, terrainData) {
					if (!err) {
						// build terrain types map
						if (terrainData && Array.isArray(terrainData)) {
							for (let i=0; i<terrainData.length; i++) {
								terrains.set(terrainData[i].id, terrainData[i]);
							}
						}

						// build cells
						let tilesRow, cellsRow;
						for (let row = 0; row < mapData.tiles.length; row++) {
							tilesRow = mapData.tiles[row];
							cellsRow = [];
							for (let col = 0; col < tilesRow.length; col++) {
								// TODO usea a Cell class
								cellsRow.push({
									terrainType: tilesRow[col],
									terrainName: terrains.get(tilesRow[col]).name,
								});
							}
							cells.push(cellsRow);
						}

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
