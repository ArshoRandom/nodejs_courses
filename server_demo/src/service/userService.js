const dao = require('../dao/userDao')
const cache = require('../util/userCache')

function getUserById(id) {
    let cachedUser = cache.getUserById(id);
    if (cachedUser) {
        return cachedUser;
    } else {
        let daoUser = dao.fetchUserById(id);
        return daoUser || `User with id = ${id} not found`
    }
}

function getUsers() {
    if (cache.isEmpty()) {
        cache.loadData();
    }
    return cache.getAll()

}

function getUserByName(name) {
    let matchesCache = cache.getByName(name);
    if (matchesCache.length !== 0)
        return matchesCache;
    else {
        let matchesDao = dao.fetchUserByName(name);
        return matchesDao.length !== 0 ? matchesDao : `Users with name = ${name} not founds`;
    }
}

function searchUser(token) {
    let matchesCache = cache.search(token);
    if (matchesCache.length !== 0)
        return matchesCache;
    else {
        let matchesDao = dao.findUser(token);
        return matchesDao.length !== 0 ? matchesDao : `${token} not matches`;
    }

}

function removeUserById(id) {
    if (dao.deleteUserById(id)) {
        cache.removeUser(id)
        return true;
    }
    return false;


}

function updateUser(data) {
    if (dao.updateUser(data)) {
        cache.cacheUser(data);
        return true;
    }
    return false;

}

function addUser(data) {
    if (dao.createUser(data)) {
        cache.cacheUser(data)
        return true;
    }
    return false;
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