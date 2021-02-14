function Account(id, name, surname, uname,pass, photo_url){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.uname = uname;
    this.pass = pass;
    this.photo_url = photo_url
    this.posts = []
}

Account.prototype.printInfo = function (){
    console.log(`ID : ${this.id}
Name : ${this.name}
Surname : ${this.surname}
Username : ${this.uname}
Photo url : ${this.photo_url}`
    );
}



export default Account