import MilitaryMan from "./MilitaryMan.mjs";

class Commander extends MilitaryMan{
    constructor(name, surname, soldiers) {
        super(name, surname);
        this.soldiers = soldiers;
    }

    introduce(){
        console.log(`I am a commander ${this.name}` )
    }

    attackOrder(){
        console.log(`Commander ${this.name} soldiers go to attack`)
        this.soldiers.forEach(e => e.attack())
    }

    retreatOrder(){
        console.log(`Commander ${this.name} soldiers go to retreat`)
        this.soldiers.forEach(e => e.retreat())
    }

}

export default Commander