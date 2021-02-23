require('dotenv').config({path:__dirname.replace('src','.env')});
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller');
const userCache = require('../src/util/userCache')

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

controller.dispatch(app)

app.listen(process.env.PORT || 3000, () => {
    userCache.loadData();
    console.log('Server running');

})