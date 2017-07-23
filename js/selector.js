class selector {
    constructor() {
        this.initPosX = 5;
        this.initPosY = 433;
        this.x = 5;
        this.y = 433;
        this.sprite = 'images/square.png';
        this.player = 'images/char-boy.png';
    }

    render(width = 90, height = 90) {
        ctxIntro.drawImage(Resources.get(this.sprite), this.x, this.y, width, height);
        this.renderPlayer();

    }

    renderPlayer() {
        
        ctxIntro.drawImage(Resources.get(this.player), 200, 210);      
        ctxIntro.fillStyle = "black";
        ctxIntro.strokeStyle = "blue"; 
        ctxIntro.lineWidth = 1; 
        ctxIntro.font='25px sans-serif';
        ctxIntro.textAlign="center"; 
        ctxIntro.fillText("PRESS ENTER TO START",253,375);
        ctxIntro.strokeText("PRESS ENTER TO START",253,375);    
    }

    handleInput(keyCode) {       
        
        switch(keyCode) {
            case 'left': {
                if(this.x - 100 >= 0) {
                    this.x -= 101;
                } 
                break;
            }
            case 'right': {
                if(this.x + 100 <= 500) {
                    this.x += 101;
                
                }
                break;
            }
            case 'enter': {
                character[0] = this.player;
                player.sprite = this.player;
                break;
            }
            
        }
        this.checkCharacter(this.x);
    }

    checkCharacter(x) {
        let characters = ['images/char-boy.png', 'images/char-cat-girl.png', 'images/char-horn-girl.png',
                'images/char-pink-girl.png', 'images/char-princess-girl.png'];

        switch (x) {
            case 5: {
               this.player = characters[0];
                break;
            }
            case 106: {
                this.player = characters[1];
                break;
            }
            case 207: {
                this.player = characters[2];
                break;
            }
            case 308: {
                this.player = characters[3];
                break;
            }
            case 409: {
                this.player = characters[4];
                break;
            }
        }
        this.renderPlayer(this.player);
    }
}