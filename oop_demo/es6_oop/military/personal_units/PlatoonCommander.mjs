import Commander from "./Commander.mjs";

class PlatoonCommander {
    constructor(name, surname,commanders) {
        this.name = name;
        this.surname = surname;
        this.commanders = commanders;
    }

    attackOrder(){
        console.log(`Commander ${this.name} platoon go to attack`)
        this.commanders.forEach(e => e.attackOrder())
    }

    retreatOrder(){
        console.log(`Commander ${this.name} platoon go to retreat`)
        this.commanders.forEach(e => e.retreatOrder())
    }
}

export default PlatoonCommander