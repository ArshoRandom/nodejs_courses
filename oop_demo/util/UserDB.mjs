function UserDB(){}

const db = new Map();

UserDB.addUser = function (user){
    if (!db.has(user.uname))
        db.set(user.uname, user)
    else
        throw new Error('User already exists : ' + user.uname)
}

UserDB.getUser = function (uname){
    let res = db.get(uname)
    if (res) return res
    throw new Error('User not found : ' + uname)
}

export default UserDB