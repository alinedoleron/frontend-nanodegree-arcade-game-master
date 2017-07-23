class Player {
    constructor(x, y) {
        this.x = 100;
        this.y = 370;
        this.score = 0;
        this.sprite = '';
        this.scoreDefaut = 1;
    }

    renderScore() {
        var doc = window.document;
        var span = doc.getElementById('score');
        span.innerHTML = this.score;
    }
 
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        this.renderScore();
    }

    decrement() {
        this.score -= 1;
        this.update();
    }

    increment(score = this.scoreDefaut) {
        console.log("this score = ", score);
        this.score += score;
        if(score == this.scoreDefaut) {
            this.update();
        } else {
            this.renderScore();
        }
        
    }

    update() {
        this.x = Math.floor(Math.random() * 5) * 100;
        this.y = 370;
        this.render();
    }

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
                console.log("up");
                if(this.y - 80 >= -30) {
                    this.y -= 80;
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


