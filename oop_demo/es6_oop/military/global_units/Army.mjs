class Army{
    constructor(platoons) {
        this.platoons = platoons;
    }

    massiveAttack(){
        this.platoons.forEach(e => {
            e.platoonAttack();
        })
    }
}

export default Army