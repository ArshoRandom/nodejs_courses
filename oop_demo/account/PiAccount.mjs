function PiAccount(id, name, surname, uname, photo_url){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.uname = uname;
    this.photo_url = photo_url
}

PiAccount.prototype.printInfo = function (){
    console.log(`ID : ${this.id}`);
    console.log(`Name : ${this.name}`);
    console.log(`Surname : ${this.surname}`);
    console.log(`Username : ${this.uname}`);
    console.log(`Photo url : ${this.photo_url}`);
}

export default PiAccount