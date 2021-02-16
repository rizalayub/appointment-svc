
var express = require('express');
var router = express.Router();
var dentitstSvc = require('../services/dentist.service')
    
   // Create a new User
  router.post("/", dentitstSvc.create);

  // Retrieve all User
  router.get("/", dentitstSvc.findAll);

     
  module.exports = router;
