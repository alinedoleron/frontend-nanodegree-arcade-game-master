class Gem {
    constructor(x, y, t, v) {
        this.x = x;
        this.y = y;
        this.sprite = t;
        this.value = v;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 70, 80);

    }

    remove () {
        this.x = -100;
    }



}