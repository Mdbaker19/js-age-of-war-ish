function Base (x, y, hp, towerCount, c, mine) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.towerCount = towerCount;
    this.c = c;
    this.w = 50;
    this.h = 200;
    this.mine = mine;

    this.show = () => {
        fill(this.x, this.y, this.w, this.h, this.c);
        let value = mine ? 1 : -1;
        fill(0, 0, 0, 0, "#000");
        for(let i = 0; i < this.towerCount; i++) {
            fill(this.x + (this.w * value), this.y + this.h / 4 - (i * 20), 50, 5, "#000");
        }
        // if(this.mine) {
        //     console.log("show base");
        // } else {
        //     console.log("enemy base");
        // }
    }

    this.upgrade = () => {
        this.towerCount++;
    }

}