function Variables () {
    this.c = document.getElementById("game");
    this.cc = this.c.getContext("2d");
    this.w = this.c.width;
    this.h = this.c.height;

    this.pStart = 50;
    this.eStart = this.w - 60;
    this.hStart = this.h - 25;

    this.summonOptionsArr = Array.from(document.getElementsByClassName("summonBtn"));

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



}