const http = require('http')
const controller = require('./controllers/controller')
const cache = require("./util/userCache");
require('dotenv').config({path:__dirname.replace('src','.env')});

http.createServer(((req, res) => {
    controller.dispatch(req,res)
})).listen(process.env.PORT || 3000,() => {
    cache.loadData();
    console.log('SERVER RUNNING');
});


