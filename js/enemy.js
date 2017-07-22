// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x, y, s) {
        this.sprite = 'images/enemy-bug.png';
        this.initPosition = -100;
        this.finalPosition = 505;
        this.x = x;
        this.y = y;
        this.speed = s;
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        this.x += this.speed * dt;
        if(this.x >=  this.finalPosition) {
            this.x = this.initPosition;
            this.speed = Math.random() * this.finalPosition + 50; 
        }
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }

    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.

}

