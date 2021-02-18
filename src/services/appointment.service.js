var con = require('../models/db')

// Create and Save a new appointment
exports.create = (req, res) => {
  // Validate request
  if (!req.body.technicianid) {
    res.status(400).send({
      message: "tech id can not be empty!"
    });
    return;
  }

  const {technicianid, dentistid, date, time, notes,equipmentid } = req.body


  var sql = `SELECT * from appointment where date = '${date}' and technicianid = ${technicianid} and dentistid = ${dentistid}`
  con.query(sql, function (err, result) {
    if(result.length > 0){
      res.send("You already make appointment for the dentist for this date, please choose different date");
    }
    else{
      sql = `INSERT INTO appointment (technicianid, dentistid, equipmentid, date, time, notes) VALUES (${technicianid},${dentistid},${equipmentid},'${date}','${time}','${notes}')`;
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
        
      })
    }
    
  })

}

// Retrieve all appointment from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

 
};

// Find a single appointment with an id
exports.findOne = (req, res) => {
  const date = req.params.date;
 
  var sql = `SELECT * from appointment where date = '${date}' order by time`;
  console.log(sql)
  con.query(sql, function (err, result) {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting the appointment."
      });
    } 
    else{
      console.log("records selected");
      res.send(result);
    }
    
  });
 
};


// Find a single appointment with an id
exports.findAppointment = (req, res) => {
  const id = req.params.id;
 
  var sql = `SELECT * from appointment where id = ${id}`;
  console.log(sql)
  con.query(sql, function (err, result) {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting the appointment."
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
  const {dentistid, date, time, notes,equipmentid} = req.body
  var sql = `UPDATE appointment set dentistid = ${dentistid}, date= '${date}',time = '${time}', notes = '${notes}', equipmentid = ${equipmentid} where id = ${id}`;
  console.log(sql)
  con.query(sql, function (err, result) {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the appointment."
      });
    } 
    else{
      console.log("records updated");
      res.send(200);
    }
    
  });

};

// Delete a appointment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  var sql = `delete from appointment where id = ${id}`;
  console.log(sql)
  con.query(sql, function (err, result) {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting the appointment."
      });
    } 
    else{
      console.log("records deleted");
      res.send("success deleted");
    }
    
  });


};

// Delete all appointment from the database.
exports.deleteAll = (req, res) => {
  
};

