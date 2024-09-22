const express = require('express')
const router = express.Router();
const fs = require('fs');
const accountRoutes  = require('./acount.js');

router.use(accountRoutes)



module.exports = router

