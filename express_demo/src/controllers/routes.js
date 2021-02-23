const userService = require('../service/userService')
const urlParser = require('../util/urlParser')

/*
Add new router in route-map using regexp-key and action-value
 */

const routes = new Map()

//Get user by id route
routes.set(/user[/][\d+]/, function (req, url_path) {
    return new Promise((resolve, reject) => {
        if (req.method === 'GET') {
            let id = Number(urlParser.getPatchVariable(req.url));
            let user = userService.getUserById(id);
            resolve(JSON.stringify(user))
        } else {
            reject('Method not allowed')
        }
    })
});

//Get all users route
routes.set(/[/]users/, function (req, url_path) {
    return new Promise((resolve, reject) => {
        if (req.method === 'GET') {
            resolve(JSON.stringify(userService.getUsers()));
        } else {
            reject('Method not allowed')
        }
    })

})

//Query string route
routes.set(/user[?].+/, function (req,url_path) {
    return new Promise((resolve, reject) => {
        if (req.method === 'GET') {
            let name = urlParser.getQueryParam(url_path, 'name');
            let search = urlParser.getQueryParam(url_path, 'search');
            if (name)
                resolve(JSON.stringify(userService.getUserByName(name)))
            else if (search)
                resolve(JSON.stringify(userService.searchUser(search)))
        } else {
            reject('Method not allowed')
        }
    })


})

//Home page route
routes.set(/^[/]$/, function (req, url_path) {
    return new Promise((resolve, reject) => {
        if (req.method === 'GET') {
            resolve('Welcome')
        } else {
            reject('Method not allowed')
        }
    })
})

//Add user route
routes.set(/[/]user[/]add/, function (req, url_path) {
    return new Promise((resolve, reject) => {
        if (req.method === 'POST') {
            req.on('data', (body) => {
                if (userService.addUser(body.toString())) {
                    resolve('Successfully added')
                } else {
                    resolve('User already exists')
                }
            })
        } else {
            reject('Method not allowed')
        }
    })

})

//Delete user route
routes.set(/user[/]delete[/][\d+]/, function (req, url_path) {
    return new Promise((resolve, reject) => {
        if (req.method === 'DELETE') {
            let id = Number(urlParser.getPatchVariable(req.url));
            if (userService.removeUserById(id)){
                resolve(`Successfully removed user with id ${id}`)
            }else {
                reject('User not found')
            }

        } else {
            reject('Method not allowed')
        }
    })

})

//Update user route
routes.set(/[/]user[/]update/, function (req, url_path) {
    return new Promise((resolve, reject) => {
        if (req.method === 'PUT') {
            req.on('data', (body) => {
                if (userService.updateUser(body.toString())) {
                    resolve('Successfully updated')
                }else {
                    reject('User not found')
                }
            })
        } else {
            reject('Method not allowed')
        }
    })
})


module.exports = routes