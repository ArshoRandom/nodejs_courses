class MilitaryMan {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    introduce(){
        console.log(`I am a ${this.name}` )
    }
}

export default MilitaryMan