var con = require('../models/db')

// Create and Save a new dentist
exports.create = (req, res) => {
  // Validate request
  if (!req.body.technicianid) {
    res.status(400).send({
      message: "tech id can not be empty!"
    });
    return;
  }

  const {technicianid, dentistid, date, time, notes,equipmentid } = req.body

  var sql = `INSERT INTO appointment (technicianid, dentistid, equipmentid, date, time, notes) VALUES (${technicianid},${dentistid},${equipmentid},'${date}','${time}','${notes}')`;
  console.log(sql)
  con.query(sql, function (err, result) {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    } 
    else{
      console.log("1 record inserted");
      res.send("You have success make an appointment");
    }
    
  });

};

// Retrieve all dentis from the database.
exports.findAll = (req, res) => {
  var sql = `SELECT * from dentist`;
  console.log(sql)
  con.query(sql, function (err, result) {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while selecting the Dentist."
      });
    } 
    else{
      res.send(result);
    }
    
  });

 
};

// Find a single appointment with an id
exports.findOne = (req, res) => {
  const date = req.params.date;
 
  var sql = `SELECT * from appointment where date = '${date}'`;
  console.log(sql)
  con.query(sql, function (err, result) {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    } 
    else{
      console.log("records selected");
      res.send(result);
    }
    
  });
 
};

// Update a appointment by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;


};

// Delete a appointment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

};

// Delete all appointment from the database.
exports.deleteAll = (req, res) => {
  
};

