
const MIN_GEMS = 1;
const MAX_GEMS = 3;
const MAX_SWIM = 5;

// array with the possibilities of gems
let gems = [
    {
        sprite: 'images/Gem Blue.png',
        value: 5
    },
    {
        sprite: 'images/Gem Green.png',
        value: 10
    },
    {
        sprite: 'images/Gem Orange.png',
        value: 15
    },
    {
        sprite: 'images/Heart.png',
        value: 50
    }
];

//array de gems 
let allGems = [],
    numOfGems = 0;

//create selector
selector = new selector();

//create player
player = new Player();

//create enemies
let allEnemies = [];
allEnemies.push(new Enemy(-100, 50, 50));
allEnemies.push(new Enemy(-100, 130, 130));
allEnemies.push(new Enemy(-100, 220, 210));

//check the number of gems
function checkNumOfGems() {
    if(numOfGems < MIN_GEMS) {
        while(numOfGems < MAX_GEMS) {
            createGem();
        }
    }
}

//create gems
function createGem() {
    let gemPosX = Math.floor(Math.random() * 5) * 100 + 18,
        gemPosY = (Math.floor(Math.random() * 4) + 1)* 83 + 40,
        gemKind = Math.floor(Math.random() * gems.length),
        gemSprite = gems[gemKind].sprite,
        gemValue = gems[gemKind].value;

    allGems.push(new Gem(gemPosX, gemPosY, gemSprite, gemValue));
    numOfGems++;
}

//check if a player collided with an enemy
function checkGemCatch() {
        allGems.forEach(function(gem) {
            if (gem.x <= player.x + 18 && 18 + gem.x >= player.x &&
                ((gem.y - player.y) >= 68 && (gem.y - player.y) <= 82)) {          
                player.increment(gem.value);
                gem.remove();
                numOfGems--;
            }
        }, this);
    
}

//check if a player collided with an enemy
function checkCollisions() {
    
    allEnemies.forEach(function(e) {
        if (e.x < player.x + 50 && e.x + 50 > player.x &&
        e.y < player.y + 50 && 50 + e.y > player.y) {
            player.decrement();

        }
    }, this);
}


//reset the score of the game
function resetScore() {
    player.score = 0;
}

//check if player won
function checkPlayerWin() {
    if(player.swim >= MAX_SWIM) {
        player.playerWin();
        return true;
    } 
    return false;
    
    
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        13: 'enter',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'

    };

    if(character == '') {
        selector.handleInput(allowedKeys[e.keyCode]);
    } else {
        player.handleInput(allowedKeys[e.keyCode]);
    }
    
    
});







