/**
 * Player ship
 */
class PlayerShip extends Ship {


    constructor(scene, x, y, key, gameData) {
        super(scene, x, y, key, gameData);
        this.setData('type', 'playerShip');
        this.setData('speed', this.gameData.defaults.ship.player.speed);
        this.play(this.gameData.defaults.ship.player.animIdle);
    }


    update(dt) {
        // update position
        let distanceX = this.getData('currentSpeedX') / 1000 * dt;
        this.x += distanceX;
        let distanceY = this.getData('currentSpeedY') / 1000 * dt;
        this.y += distanceY;

        // reduce speed when not pressing buttons
        this.setData('currentSpeedX', this.getData('currentSpeedX') * 0.95);
        this.setData('currentSpeedY', this.getData('currentSpeedY') * 0.95);

        // aavoid exiting from screen bounds
        this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
        this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
    }


}