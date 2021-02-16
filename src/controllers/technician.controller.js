
var express = require('express');
var router = express.Router();
var technicianSvc = require('../services/technician.service')
    
// payment 
router.post("/login", technicianSvc.login);
 
module.exports = router;



