//class Gem
class Gem {
    //Each gem has a position(x,y), an image/sprite and a value
    constructor(x, y, t, v) {
        this.x = x;
        this.y = y;
        this.sprite = t;
        this.value = v;
    }

    //display the gem
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 70, 80);

    }

    //remove the gem
    remove () {
        this.x = -100;
    }



}