( () => {

    const v = new Variables();

    const home = new Base(0, v.h - 200, 50, 1, "#043d0f", true);
    const player = new Player(100);
    v.baseHealth.innerText = home.hp;

    v.summonOptionsArr.forEach( (btn, i) => btn.addEventListener("click", () => {
        const cost = (i * 10) + 10;
        const summonCall = v.summonUnitArr[i];
        if(player.money >= cost) {
            v.summonOptionsArr[i].disabled = true;
            v.summonOptionsArr[i].style.opacity = ".2";
            player.money -= cost;
            const unit = new Creature(v.pStart, v.hStart - summonCall.h, summonCall.w, summonCall.h, 10, 3.5, summonCall.color, false, i);
            player.units.push(unit);
        }
        v.playerMoney.innerText = player.money.toFixed(1);
        v.sleep(1250).then( () => {
            v.callAgain(i);
        });
    }));

    // this will be a btn later
    window.addEventListener("keydown", (e) => {
        let cost = home.towerCount * 50 + 50;
        if(e.key === "u" &&
            home.towerCount < 3 &&
            player.money >= cost) {
            home.towerCount++;
            player.money -= cost;
            v.playerMoney.innerText = player.money.toFixed(1);
        }
    });





    const enemyBase = new Base(v.w - 50, v.h - 200, 50, 1, "#5c1515", false);
    const enemy = new Player(100);
    v.eBaseHp.innerText = enemyBase.hp;
    const enemyUnits = () => {
        const summonIDX = ~~(Math.random() * 4);
        const summonCall = v.summonUnitArr[summonIDX];
        const cost = (summonIDX * 10) + 10;
        if(enemy.money >= cost) {
            enemy.money -= cost;
            enemy.units.push(new Creature(v.eStart, v.hStart - summonCall.h, summonCall.w, summonCall.h, 10, 3.5, summonCall.color, true, summonIDX));
        }
        v.enemyMoney.innerText = enemy.money.toFixed(1);
    }
    setInterval(enemyUnits, 2950);





    // for some reason the unit that kills will stay in place....
    const evalContact = (creature, allOpposingUnitsArr, playerToEnemy) => {
        const xLoc = creature.x + creature.w;
        const canSee = creature.getSight();
        player.units = player.units.filter(e => e.hp > 0);
        enemy.units = enemy.units.filter(e => e.hp > 0);
        allOpposingUnitsArr.forEach( (e, i) => {
            if(playerToEnemy) {
                // it is my unit seeing enemy, go off enemy x as it is the face
                if(e.x <= xLoc + canSee) {
                    creature.s = 0;
                    creature.attack();
                    e.hp--;
                } else {
                    creature.s = 3.5
                }
            } else {
                // it is enemy unit seeing mine, go off my xLoc as it needs to be the face
                if(e.x + e.w >= creature.x + canSee) {
                    creature.s = 0;
                    creature.attack();
                    e.hp--;
                } else {
                    creature.s = 3.5;
                }
            }
        });
    }









    const draw = () => {
        fill(0, 0, v.c.width, v.c.height, "#201717");
    }
    const load = () => {
        fill(0, 0, 0, 0, "#0d3c5c"); // draw canvas
        draw(); // draw and reset canvas with ^^ color for some reason
        fill(-1, -1, 1, 1, "#05845e"); // set color (not sure why this is needed)
        home.show();
        player.units.forEach(creature => {
            creature.show();
            creature.move();
            evalContact(creature, enemy.units, true);
        });
        player.update();
        v.playerMoney.innerText = player.money.toFixed(1);
        enemy.units.forEach(creature => {
            creature.show();
            creature.move();
            evalContact(creature, player.units, false);
        });
        enemy.update();
        v.enemyMoney.innerText = enemy.money.toFixed(1);
        fill(-1, -1, 1, 1, "#948d3a");

        enemyBase.show();
    }
    setInterval(load, 50);
})();