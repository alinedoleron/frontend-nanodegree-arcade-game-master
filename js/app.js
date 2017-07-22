var allEnemies = [];
allEnemies.push(new Enemy(-100, 50, 50));
allEnemies.push(new Enemy(-100, 130, 130));
allEnemies.push(new Enemy(-100, 220, 210));

player = new Player();

function checkCollisions() {
    
    allEnemies.forEach(function(e) {
        if (e.x < player.x + 50 && e.x + 50 > player.x &&
        e.y < player.y + 50 && 50 + e.y > player.y) {
            player.decrement();

        }
    }, this);
}

function checkReachWater() {
    allEnemies.forEach(function(e) {
        if (player.y === -30) {
            player.increment();
        }
    }, this);
}

function resetScore() {
    player.score = 0;
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
