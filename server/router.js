const express = require('express')

const appController = require('./controller/appRoutes')
    
const router=express.Router()

router.use('/app',appController);

module.exports = router;