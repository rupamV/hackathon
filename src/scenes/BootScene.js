export default class BootScene extends Phaser.Scene {
    constructor() {
      super('BootScene');
    }
  
    preload() {
      this.load.image('grass', '/src/assets/grass.png');
      this.load.spritesheet('player', '/src/assets/player.png', {
        frameWidth: 60,
        frameHeight: 60
      });
    }
  
    create() {
      this.scene.start('GameScene');
    }
  }
  