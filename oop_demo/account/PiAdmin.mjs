import PiAccount from "./PiAccount.mjs";
import UserDB from "../util/UserDB.mjs";

function PiAdmin(id, name, surname, uname, photo_url) {
    PiAccount.apply(this, arguments)
}

//extends from PiAccount
PiAdmin.prototype = Object.create(PiAccount.prototype)
PiAdmin.prototype.constructor = PiAdmin


PiAdmin.prototype.setGoldAccountByUname = function (uname) {
    let resUser = UserDB.getUser(uname);
    if (resUser.isGold)
        console.log('User already have a gold account')
    else resUser.isGold = true;
}
PiAdmin.prototype.unsetGoldAccountByUname = function (uname) {
    let resUser = UserDB.getUser(uname);
    if (!resUser.isGold)
        console.log('User does not have a gold account')
    else resUser.isGold = false;
}
PiAdmin.prototype.blockUser = function (uname) {
    let resUser = UserDB.getUser(uname);
    if (resUser._isBlocked)
        console.log('User already blocked')
    else resUser._isBlocked = true;
}
PiAdmin.prototype.unblockUser = function (uname) {
    let resUser = UserDB.getUser(uname);
    if (!resUser._isBlocked)
        console.log('User already unblocked')
    else resUser._isBlocked = false;
}

export default PiAdmin