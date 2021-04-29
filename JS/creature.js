function Creature(x, y, w, h, hp, s, c, isEnemy, lvl) {
    this.x = x;
    this.y = y;
    this.lvl = lvl;
    this.hp = hp;
    this.s = s;
    this.w = w;
    this.h = h;
    this.c = c;
    this.isEnemy = isEnemy;

    this.show = () => {
        if(this.hp > 0) {
            if (this.lvl === 1) {
                fill(this.x, this.y, 10, 10, this.c);
                fill(this.x, this.y + 5, 15, 10, this.c);
                fill(this.x + 10, this.y + 10, 10, 3, this.c);
                fill(this.x + 10, this.y + 15, 10, 3, this.c);
            } else if (this.lvl === 0) {
                fill(this.x, this.y, 15, 30, this.c);
                fill(this.x, this.y + 10, 15, 10, this.c);
                fill(this.x + 10, this.y + 40, 5, 15, this.c);
                fill(this.x + 10, this.y + 25, 10, 15, this.c);
            } else if (this.lvl === 3) {
                fill(this.x, this.y, 50, 10, this.c);
                fill(this.x, this.y + 5, 1, 20, this.c);
                fill(this.x + 14, this.y + 5, 15, 2, this.c);
                fill(this.x - 10, this.y + 3, 10, 3, this.c);
            } else {
                fill(this.x, this.y, 40, 40, this.c);
                fill(this.x, this.y + 5, 25, 10, this.c);
                fill(this.x + 10, this.y + 10, 5, 15, this.c);
                fill(this.x + 35, this.y + 5, 10, 25, this.c);
            }
        }
    }

    this.attack = () => {
        console.log("attacking");
    }

    this.getSight = () => {
        switch (this.lvl) {
            case 0:
                return 10;
            case 1:
                return 20;
            case 2:
                return 2;
            case 3:
                return 40;
        }
    }

    this.move = () => {
        if(this.isEnemy) {
            this.x -= this.s;
        } else {
            this.x += this.s;
        }
    }

}