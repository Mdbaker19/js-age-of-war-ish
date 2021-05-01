function Player(money) {
    this.units = [];
    this.money = money;
    this.update = () => {
        // this.money+=5; // testing
        this.money+=.02;
    }
}