class WorldMap extends Phaser.Objects.Image {
	constructor(scene, width, height) {
		super(scene, width, height);
		this.scene = scene;
		this.width = width;
		this.height = height;

		//
		this.setOrigin(0);
	}
}
