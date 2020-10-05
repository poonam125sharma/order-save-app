const db = require("../models");
const Bracket = db.bracket;

// Get all brackets from the database
exports.getAllBrackets = (req, res) {

}

// Create or Save a new Bracket
exports.addBracket = (req, res) {
  let userData = req.body;
  if(Object.keys(userData).length == 0) {
      res.status(401).json({'status':'false','error':'empty payload'});
  }else{
    if( ( (typeof userData.bracket_id == 'undefined') && (typeof userData.info == 'undefined') )  ||
        ( !userData.bracket_id && !userData.info )
    ) {
      res.status(401).json({'status':'false','error':'required parameter bracket_id, bracket info'});
    }else{
      if(!userData.bracket_id) {
          res.status(401).json({'status':'false','error':'required parameter bracket_id'});
      }else{
        if(!userData.info) {
            res.status(401).json({'status':'false','error':'required parameter bracket info'});
        }else{
          let bracket = new Bracket(userData);
          bracket.save(err, savedBracket) => {
            if(err) {
                res.status(500).json({'status':'false','error':err});
            }else{
              res.status(200).json({'status':'true','error':''});
            }
          }
        }
      }
    }
  }
}

// Update Bracket
exports.updateBracket = (req, res) {

}

// Get a Bracket
exports.getBracket = (req, res) {

}

// Get a Bracket
exports.deleteBracket = (req, res) {

}

// Get all Brackets
exports.deleteAllBrackets = (req, res) {

}
