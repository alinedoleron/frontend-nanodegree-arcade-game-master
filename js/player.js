class Player {
    constructor(x, y) {
        this.x = 100;
        this.y = 370;
        this.score = 0;
        this.sprite = '';
    }

    renderScore() {
        var doc = window.document;
        var span = doc.getElementById('score');
        span.innerHTML = this.score;
    }

    loadPlayer(character) {
        this.sprite = character;
        ctxIntro.drawImage(Resources.get(this.sprite), 200, 210);
    }
 
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        this.renderScore();
    }

    decrement() {
        this.score -= 1;
        this.update();
    }

    increment() {
        this.score += 1;
        this.update();
    }

    update() {
        var doc = window.document;
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


