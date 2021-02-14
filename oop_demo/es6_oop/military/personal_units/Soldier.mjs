import MilitaryMan from "./MilitaryMan.mjs";

class Soldier extends MilitaryMan{
    constructor(name, surname) {
        super(name, surname);
    }

    introduce(){
        console.log(`I am a soldier ${this.name}` )
    }

    attack(){
        console.log(`soldier ${this.name} attacked`)
    }

    retreat(){
        console.log(`soldier ${this.name} retreated`)
    }
}

export default Soldier