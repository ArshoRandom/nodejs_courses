require('dotenv').config({path:__dirname.replace('src','.env')});
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller');
const userCache = require('../src/util/userCache')

const app = express();
const base_url = '/api/v1/users'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(base_url,controller)

app.listen(process.env.PORT || 3000, () => {
    userCache.loadData();
    console.log('Server running');
})