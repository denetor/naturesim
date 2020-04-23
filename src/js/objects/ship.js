/**
 * Generic ship class
 */
class Ship extends Entity {
    constructor(scene, x, y, key, gameData) {
        super(scene, x, y, key, gameData);
        this.scene.physics.world.enableBody(this, 0);
        this.setData('type', 'ship');
        this.setData('killable', true);
        this.setData('alive', true);
        this.setData('speed', this.gameData.defaults.ship.generic.speed);
        this.setData('currentSpeedX', 0);
        this.setData('currentSpeedY', 0);
    }


    moveUp(speed) {
        if (speed) {
            this.setData('currentSpeedY', -speed);
        } else {
            this.setData('currentSpeedY', -this.getData('speed'));
        }
    }
    moveDown(speed) {
        if (speed) {
            this.setData('currentSpeedY', speed);
        } else {
            this.setData('currentSpeedY', this.getData('speed'));
        }
    }
    moveLeft(speed) {
        if (speed) {
            this.setData('currentSpeedX', -speed);
        } else {
            this.setData('currentSpeedX', -this.getData('speed'));
        }
    }
    moveRight(speed) {
        if (speed) {
            this.setData('currentSpeedX', speed);
        } else {
            this.setData('currentSpeedX', this.getData('speed'));
        }
    }


    update(dt) {
        // update position
        let distanceX = this.getData('currentSpeedX') / 1000 * dt;
        this.x += distanceX;
        let distanceY = this.getData('currentSpeedY') / 1000 * dt;
        this.y += distanceY;
    }

}