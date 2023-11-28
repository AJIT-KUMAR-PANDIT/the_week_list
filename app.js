const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

dotenv.config();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.get('/health', (req, res) => {

    const serverName = 'the_week_list';
    const currentTime = new Date().toLocaleString();
    var serverState = 'active'; 
    
    const healthApi = {
        serverName,
        currentTime,
        serverState,
    };

    res.json(healthApi);

});


app.use(function (req,res,next) {
    
    var auth= false;

    if (auth) {
        next();
    } else {
        return res.status(403).send("Error 403: Access Denied!");
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
