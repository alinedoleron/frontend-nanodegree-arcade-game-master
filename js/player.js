class Player {
    constructor(x, y) {
        this.x = 100;
        this.y = 370;
        this.sprite = 'images/char-boy.png';
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    update() {
        console.log("atualizando..");
        this.x = Math.floor(Math.random() * 5) * 100;
        this.y = 370;
        this.render();
    }

    handleInput(keyCode) {
        console.log(keyCode);
        switch(keyCode) {
            case 'left': {
                
                if(this.x - 100 >= 0) {
                    this.x -= 100;
                    console.log(this.x +" , "+ this.y);
                } 
                break;
            }
            case 'right': {
                
                if(this.x + 100 <= 400) {
                    this.x += 100;
                    console.log(this.x +" , "+ this.y);
                }
                break;
            }
            case 'up': {
                if(this.y - 80 >= -30) {
                    this.y -= 80;
                    console.log(this.x +" , "+ this.y);
                }
                break;
            }
            case 'down': {
                if(this.y + 80 <= 370) {
                    this.y += 80;
                    console.log(this.x +" , "+ this.y);
                } 
                break;
            }
        }
    }
}


