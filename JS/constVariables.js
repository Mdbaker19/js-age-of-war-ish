function Variables () {
    this.c = document.getElementById("game");
    this.cc = this.c.getContext("2d");
    this.w = this.c.width;
    this.h = this.c.height;

    this.pStart = 50;
    this.eStart = this.w - 60;
    this.hStart = this.h - 25;

    this.summonOptionsArr = Array.from(document.getElementsByClassName("summonBtn"));

    this.towerOptionsArr = Array.from(document.getElementsByClassName("towerBtn"));

    this.canAfford = (player) => {
        this.towerOptionsArr.forEach( (tower, i) => {
            const towerCost = (i + 40) * (i + 1);
            if(towerCost > player.money) {
                v.towerOptionsArr[i].style.opacity = ".2";
                v.towerOptionsArr[i].disabled = true;
            } else {
                v.towerOptionsArr[i].style.opacity = "1";
                v.towerOptionsArr[i].disabled = false;
            }
        });
    }

    this.summonUnitArr = [
        {w: 20, h: 20, color: "#ae9"},
        {w: 12, h: 35, color: "#b72020"},
        {w: 40, h: 8, color: "#371c1c"},
        {w: 35, h: 50, color: "#6708f7"}];


    this.baseHealth = document.getElementById("health");
    this.playerMoney = document.getElementById("money");


    this.eBaseHp = document.getElementById("eHealth");
    this.enemyMoney = document.getElementById("eMoney");

    this.sleep = (ms) => {
        return new Promise( (res) => setTimeout(res, ms));
    }

    this.callAgain = (idx) => {
        v.summonOptionsArr[idx].disabled = false;
        v.summonOptionsArr[idx].style.opacity = ".9";
    }


    this.getHp = (hpLvl) => {
        if (hpLvl === 0) {
            return 10;
        } else if (hpLvl === 1) {
            return 15;
        }
        return hpLvl === 3 ? 40 : 65;
    }

    this.getSpd = (spdLvl) => {
        return spdLvl % 2 === 0 ? (spdLvl === 2 ? 5 : 8) : (spdLvl === 1 ? 15 : 10);
    }

    this.canHitBase = (creature, isMe, home, enemyBase, otherPlayer) => {
        const loc = isMe ? creature.x + creature.w : creature.x;
        const baseToAttack = isMe ? enemyBase.x : home.x + home.w;
        otherPlayer.units.forEach(unit => {
            // if unit location is at the base level ( in between the enemy attacking the base and the base ) to be the one that takes damage instead // return false ( ? )
            const offset = isMe ? -1 : 1; // not sure about this yet

        });
        return isMe ? loc + creature.getSight() >= baseToAttack : loc - creature.getSight() <= baseToAttack;
    }

}