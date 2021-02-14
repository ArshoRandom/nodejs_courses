class Platoon{
    constructor(platoonCommander) {
        this.platoonCommander = platoonCommander;
    }

    platoonAttack(){
        this.platoonCommander.attackOrder()
    }
}

export default Platoon