import './style.css'
import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth, // Dynamically set to full width
  height: window.innerHeight, // Dynamically set to full height
  backgroundColor: '#87CEEB',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: [BootScene, GameScene]
};

const game = new Phaser.Game(config);

// Listen to window resize events and adjust game size
window.addEventListener('resize', () => {
  game.scale.resize(window.innerWidth, window.innerHeight);
});

