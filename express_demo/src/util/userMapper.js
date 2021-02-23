const User = require('../../../server_demo/src/model/user')


module.exports = function (raw_data) {
    let user = new User();

    for (const userObjKey in raw_data) {
        if (!user.hasOwnProperty(userObjKey)) {
            throw new Error(`INVALID USER FORMAT - ${userObjKey}`)
        }
    }

    user.id = raw_data['id']
    user.name = raw_data['name']
    user.surname = raw_data['surname']
    user.email = raw_data['email']
    user.password = raw_data['password']
    return user
}

