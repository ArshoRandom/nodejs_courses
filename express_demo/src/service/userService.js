const service = require('../../../server_demo/src/service/userService');


function getUserById(id) {
    return service.getUserById(id);
}

function getUsers() {
    return service.getUsers();

}

function getUserByName(name) {
    return service.getUserByName(name);
}

function searchUser(token) {
    return service.searchUser(token);

}

function removeUserById(id) {
    return service.removeUserById(id);


}

function updateUser(data) {
    return service.updateUser(data);

}

function addUser(data) {
    return service.addUser(data);
}

module.exports = {
    getUserById: getUserById,
    getUserByName: getUserByName,
    getUsers: getUsers,
    searchUser: searchUser,
    removeUserById: removeUserById,
    updateUser: updateUser,
    addUser: addUser,
}