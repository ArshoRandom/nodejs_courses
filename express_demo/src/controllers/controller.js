const userService = require('../service/userService')

const base_url = '/api/v1/'

function dispatch(server) {
    /*GET routes*/
    server.get('/', (req,res) => {
        res.status(200).send('Welcome');
    });
    server.get(`${base_url}users`, (req,res) => {
        res.status(200).send(JSON.stringify(userService.getUsers()));
    });
    server.get(`${base_url}users/:id`, (req,res) =>{
        let user = userService.getUserById(Number(req.params.id));
        if (user){
            res.status(200).send(user)
        }else {
            res.status(400).send('User not found')
        }
    });
    server.get(`${base_url}users`, (req,res) =>{
        let name = req.query.name;
        let search = req.query.search;
        if (name){
            res.send(userService.getUserByName(name));
        }else if(search){
            res.status(200).send(userService.searchUser(search));
        }else {
            res.status(400).send('Use name or search parameters');
        }
    });

    /*POST routes*/
    server.post(`${base_url}users/add`, (req,res) => {
        if (userService.addUser(req.body))
            res.status(200).send('User successfully added');
        else
            res.status(502).send('Fail to add user')
    });

    /*DELETE routes*/
    server.delete(`${base_url}users/delete/:id`, (req,res) => {
        if (userService.removeUserById(Number(req.params.id)))
            res.status(200).send('User successfully removed');
        else
            res.status(502).send('Fail to remove user')
    });

    /*PUT routes*/
    server.put(`${base_url}users/update`, (req,res) => {
        if (userService.updateUser(req.body))
            res.status(200).send('User successfully updated');
        else
            res.status(502).send('Fail to update user')
    });

    server.get('*', function(req, res){
        res.status(404).send('Page not found');
    });

}

module.exports = {dispatch: dispatch}