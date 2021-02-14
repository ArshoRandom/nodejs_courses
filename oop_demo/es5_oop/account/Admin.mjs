import Account from "./Account.mjs";
import UserDB from "../util/UserDB.mjs";

function Admin(id, name, surname, uname,pass, photo_url) {
    Account.apply(this, arguments)
}

//extends from PiAccount
Admin.prototype = Object.create(Account.prototype)
Admin.prototype.constructor = Admin


Admin.prototype.setGoldAccountByUname = function (uname) {
    let resUser = UserDB.getUser(uname);
    if (resUser.isGold)
        console.log('User already have a gold account')
    else resUser.isGold = true;
}
Admin.prototype.unsetGoldAccountByUname = function (uname) {
    let resUser = UserDB.getUser(uname);
    if (!resUser.isGold)
        console.log('User does not have a gold account')
    else resUser.isGold = false;
}
Admin.prototype.blockUser = function (uname) {
    let resUser = UserDB.getUser(uname);
    if (resUser._isBlocked)
        console.log('User already blocked')
    else resUser._isBlocked = true;
}
Admin.prototype.unblockUser = function (uname) {
    let resUser = UserDB.getUser(uname);
    if (!resUser._isBlocked)
        console.log('User already unblocked')
    else resUser._isBlocked = false;
}

export default Admin