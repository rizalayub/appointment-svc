
    var express = require('express');
    var router = express.Router();
    var appointSvc = require('../services/appointment.service')
    
   // Create a new appointment
  router.post("/", appointSvc.create);

  // Retrieve all appointment
  router.get("/", appointSvc.findAll);


  // Retrieve a single appointment with date
  router.get("/:date", appointSvc.findOne);

  // Retrieve a single appointment with id
  router.get("/getAppointment/:id", appointSvc.findAppointment);

  // Update a appointment with id
  router.put("/:id", appointSvc.update);

  // Delete a appointment with id
  router.delete("/:id", appointSvc.delete);

  // Delete all appointment
  router.delete("/", appointSvc.deleteAll);
    
    
  module.exports = router;
