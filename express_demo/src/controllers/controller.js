const userService = require('../service/userService')
const route = require('express').Router();


/*GET routes*/
route.get(`/`, (req, res) => {
    res.status(200).send(JSON.stringify(userService.getUsers()));
});
route.get(`/:id`, (req, res) => {
    let user = userService.getUserById(Number(req.params.id));
    if (user) {
        res.status(200).send(user)
    } else {
        res.status(400).send('User not found')
    }
});
route.get(`/name/:name`, (req, res) => {
    let name = req.params.name;
    let users = userService.getUserByName(name);
    users ? res.status(200).send(users) : res.status(400).send('Users not found')
});
route.get(`/search/:token`, (req, res) => {
    let token = req.params.token;
    let users = userService.searchUser(token);
    users ? res.status(200).send(users) : res.status(400).send('Users not found')
});

/*POST routes*/
route.post(`/`, (req, res) => {
    if (userService.addUser(req.body))
        res.status(200).send('User successfully added');
    else
        res.status(502).send('Fail to add user')
});

/*DELETE routes*/
route.delete(`/delete/:id`, (req, res) => {
    if (userService.removeUserById(Number(req.params.id)))
        res.status(200).send('User successfully removed');
    else
        res.status(502).send('Fail to remove user')
});

/*PUT routes*/
route.put(`/update`, (req, res) => {
    if (userService.updateUser(req.body))
        res.status(200).send('User successfully updated');
    else
        res.status(502).send('Fail to update user')
});

route.get('/*', function (req, res) {
    res.status(404).send('Page not found');
});


module.exports = route