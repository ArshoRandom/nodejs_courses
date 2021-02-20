const fs = require('fs')
const userMapper = require('../util/userMapper')

function fetchAll() {
    return JSON.parse(fs.readFileSync(process.env.USER_DATA_PATH)).map(userMapper);
}

function fetchUserById(id) {
    return fetchAll().find(user => user.id === id);
}

function fetchUserByName(name) {
    return fetchAll().filter(user => user.name === name);
}

function findUser(token) {
    return fetchAll().filter(user => user.name.startsWith(token) || user.surname.startsWith(token));
}

function deleteUserById(id) {
    let data = fetchAll();
    let newData = data.filter(user => user.id !== id);
    if (data.length === newData.length){
        return false;
    }
    if (newData.length > 0) {
        fs.writeFileSync(process.env.USER_DATA_PATH,JSON.stringify(newData))
        return true;
    }else {
        fs.writeFileSync(process.env.USER_DATA_PATH,'[]')
        return true
    }

}

function updateUser(data) {
    let id = JSON.parse(data)['id']
    if (deleteUserById(id)){
        createUser(data);
        return true;
    }
    return false;

}

function createUser(raw_data) {
    let users = fetchAll();
    let newUser = userMapper(raw_data);
    if (users.findIndex(el => el.id === newUser.id) === -1){
        users.push(newUser)
        fs.writeFileSync(process.env.USER_DATA_PATH, JSON.stringify(users))
        return true
    }
    return false;

}


module.exports = {
    fetchUserById: fetchUserById,
    fetchUserByName: fetchUserByName,
    fetchAll: fetchAll,
    findUser: findUser,
    deleteUserById: deleteUserById,
    updateUser: updateUser,
    createUser: createUser,
}