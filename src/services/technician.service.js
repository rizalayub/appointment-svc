const con = require("../models/db");

// login technician
exports.login = (req, res) => {
 
  const {username, password} = req.body
  var sql = `SELECT * from technician where username = '${username}' and password = '${password}'`;
  console.log(sql)
  con.query(sql, function (err, result) {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while login you into the system."
      });
    } 
    else{
      if(result.length > 0){
        console.log(result)
        res.status(200).json({status : 1, technicianid : result[0].id, name : result[0].name });
      }
      else{
        res.status(200).json({status : 2}); // password not match
      }
      
    }
    
  }); 
};

