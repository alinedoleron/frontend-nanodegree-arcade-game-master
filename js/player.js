//score got when player wins(reach the water)
const SCORE_DEFAULT = 100;

//Class Player
class Player {

    //A player has a position (x,y), score, the sprite/image and the number of times it swimmed
    constructor(x, y) {
        this.x = 100;
        this.y = 370;
        this.score = 0;
        this.sprite = '';
        this.swim = 0;
    }

    restorePlayerSwim() {
        this.swim = 0;
    }

    //shows the score
    renderScore() {
        var doc = window.document;
        var span = doc.getElementById('score');
        span.innerHTML = this.score;
    }
 
    //render the player
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        this.renderScore();
    }

    //decrement the score
    decrement() {
        this.score -= 1;
        this.update();
    }

    //increment the score
    increment(score = SCORE_DEFAULT) {
        this.score += score;
            this.renderScore();       
    }

    //update player position
    update() {
        this.x = Math.floor(Math.random() * 5) * 100;
        this.y = 370;
        this.render();
    }

    //when player win the message is "You win!" is displayed
    playerWin() {
        ctx.fillStyle = "black";
        ctx.strokeStyle = "white"; 
        ctx.lineWidth = 1; 
        ctx.font='45px sans-serif';
        ctx.textAlign="center"; 
        ctx.fillText("You Win!!!",253,230);
        ctx.strokeText("You Win!!!",253,230);
    }

    //handle the keyboard input in order to move the player to the desired position
    handleInput(keyCode) {
        switch(keyCode) {
            case 'left': {
                if(this.x - 100 >= 0) {
                    this.x -= 100;
                } 
                break;
            }
            case 'right': {
                
                if(this.x + 100 <= 400) {
                    this.x += 100;
                }
                break;
            }
            case 'up': {                
                if(this.y - 80 > -30) {
                    this.y -= 80;
                } else {
                    //if Y == -30 player reach water
                    this.swim ++;
                    this.score += SCORE_DEFAULT;
                    this.update();
                    if(this.swim >= MAX_SWIM) {
                        this.playerWin();
                    }
                }
                break;
            }
            case 'down': {
                if(this.y + 80 <= 370) {
                    this.y += 80;
                } 
                break;
            }
        }
    }
}


