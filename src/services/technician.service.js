const conn = require("../models/db");

// login technician
exports.login = (req, res) => {
 
  const {username, password} = req.body
  var sql = `SELECT * from technician where username = ${username} and password = ${password}`;
  console.log(sql)
  con.query(sql, function (err, result) {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while login you into the system."
      });
    } 
    else{
      res.send(200);
    }
    
  }); 
};

