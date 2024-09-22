const express = require('express');
const fs = require('fs');
const app = express();
const routes = require('./route/Routes')
//middlewares
app.use(express.json());


//routes
app.use('/', routes)


// server
app.listen(3000, ()=> {
    console.log('Listenin at port: 3000')
})