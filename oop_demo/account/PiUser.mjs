import PiAccount from "./PiAccount.mjs";
import UserDB from "../util/UserDB.mjs";

function PiUser(id, name, surname, uname, photo_url, isGold) {
    PiAccount.call(this, id, name, surname, uname, photo_url)
    this.isGold = isGold;
    this._photos = [];
    this._isBlocked = false;
    UserDB.addUser(this)
}

//extends from PiAccount
PiUser.prototype = Object.create(PiAccount.prototype)
PiUser.prototype.constructor = PiUser

//overriding printInfo()
PiUser.prototype.printInfo = function () {
    if (!this._isBlocked) {
        PiAccount.prototype.printInfo.call(this);
        console.log(`Is gold account : ${this.isGold ? 'Yes' : 'No'}`)
    } else {
        console.log(`${this.uname} account is blocked`)
    }
}

// show user photo list
PiUser.prototype.showPhotos = function () {
    if (!this._isBlocked) {
        this._photos.forEach(e => {
            e.printPhotoInfo()
            console.log(" - - - - - - - - - ")
        })
    } else {
        console.log(`${this.uname} account is blocked`)
    }
}

// add photo in list
PiUser.prototype.addPhoto = function (photo) {
    if (!this._isBlocked) {
        this._photos.push(photo);
        console.log('Photo successfully added\n')
    } else {
        console.log(`${this.uname} account is blocked`)
    }
}

//remove photo from list
PiUser.prototype.removePhoto = function (photo) {
    if (!this._isBlocked) {
        this._photos = this._photos.filter((e) => photo.id !== e.id)
        console.log('Photo successfully removed\n')
    } else {
        console.log(`${this.uname} account is blocked`)
    }

}

export default PiUser
