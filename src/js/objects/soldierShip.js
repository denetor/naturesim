/**
 * Basic enemy ship
 *
 * This ship moves only forward without steering
 */
class SoldierShip extends Ship {


    constructor(scene, x, y, key, gameData) {
        super(scene, x, y, key, gameData);
        this.setData('type', 'soldierShip');
        this.play(this.gameData.defaults.ship.generic.animIdle);
        this.moveDown(Phaser.Math.Between(this.getData('speed')/2, this.getData('speed')));
    }


}