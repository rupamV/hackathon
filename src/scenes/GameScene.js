export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        // Grass background (infinite scrolling)
        this.grass = this.add.tileSprite(
            this.scale.width / 2,
            this.scale.height / 2,
            this.scale.width,
            this.scale.height,
            'grass'
        );

        // Add player sprite (above all other elements)
        this.player = this.physics.add.sprite(this.scale.width / 2, this.scale.height / 2, 'player');
        this.player.setCollideWorldBounds(true); // Keep player within horizontal bounds
        this.player.setDepth(10); // Ensure player is above all roads and grass

        // Input keys
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        const playerSpeed = 200;
        const scrollSpeed = 5;

        // Reset player velocity
        this.player.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-playerSpeed);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(playerSpeed);
        }

        // Vertical movement
        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-playerSpeed);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(playerSpeed);
        }

        // Scroll the world when player moves near the screen's top or bottom
        if (this.player.y < 100) {
            this.scrollWorld(0, scrollSpeed); // Move background down
            this.player.y = 100; // Keep player from moving off the top
        } else if (this.player.y > this.scale.height - 100) {
            this.scrollWorld(0, -scrollSpeed); // Move background up
            this.player.y = this.scale.height - 100; // Keep player from moving off the bottom
        }

        // Scroll the world when player moves near the screen's left or right
        if (this.player.x < 100) {
            this.scrollWorld(scrollSpeed, 0); // Move background right
            this.player.x = 100; // Keep player from moving off the left
        } else if (this.player.x > this.scale.width - 100) {
            this.scrollWorld(-scrollSpeed, 0); // Move background left
            this.player.x = this.scale.width - 100; // Keep player from moving off the right
        }
    }

    // Scroll the world (background)
    scrollWorld(xAmount, yAmount) {
        this.grass.tilePositionX += xAmount; // Scroll the grass background horizontally
        this.grass.tilePositionY += yAmount; // Scroll the grass background vertically
    }
}
