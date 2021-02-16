
(function(){
    // index.js - route module.
    
    var express = require('express');
    router = express.Router();

    router.use('/appointment', require('./appointment.controller'));
    // router.use('/equipment', require('./equipment.controller'));
    // router.use('/technician', require('./technician.controller'));
    router.use('/dentist',require('./dentist.controller'));
    
    module.exports = router;
    }())