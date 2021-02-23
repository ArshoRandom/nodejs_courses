const userMapper = require('../util/userMapper');
const service = require('../service/userService');

const cache = new Map();

function cacheUser(raw_data) {
    if (raw_data) {
        let user = userMapper(raw_data);
        cache.set(user.id, user);
    }
}

function removeUser(id) {
    cache.delete(id);
}

function getUserById(id) {
    return cache.get(id);
}

function getAll() {
    return [...cache.values()];
}

function isEmpty() {
    return cache.size === 0;
}

function loadData() {
    service.getUsers().forEach(user => {
        cache.set(user.id, user);
    })
}

function getByName(name) {
    return getAll().filter(user => user.name === name);
}

function search(token) {
    return getAll().filter(user => user.name.startsWith(token) || user.surname.startsWith(token));
}

module.exports = {
    cacheUser: cacheUser,
    removeUser: removeUser,
    loadData: loadData,
    getAll: getAll,
    getUserById: getUserById,
    getByName: getByName,
    search: search,
    isEmpty: isEmpty,
}