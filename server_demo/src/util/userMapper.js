const User = require('../model/user')


module.exports = function (raw_data) {
    let userObj;
    let user = new User();
    if (typeof raw_data === 'object') {
        userObj = raw_data
    } else {
        userObj = JSON.parse(raw_data)
        for (const userObjKey in userObj) {
            if (!user.hasOwnProperty(userObjKey)){
                throw new Error(`INVALID USER FORMAT - ${userObjKey}`)
            }
        }
    }
    user.id = userObj['id']
    user.name = userObj['name']
    user.surname = userObj['surname']
    user.email = userObj['email']
    user.password = userObj['password']
    return user
}