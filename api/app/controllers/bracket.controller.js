const db = require("../models");
const Bracket = db.bracket;

// Get all brackets from the database
exports.getAllBrackets = (req, res) => {
    let bracket = Bracket.find({})
      .then(data => {
        res.send({'status':'true','error':'','data':data});
      })
      .catch(err => {
        res.status(500).send({
          'status':'false',
          'error': err.message || "Some error occurred while retrieving bracket."
        });
      });
}

// Create or Save a new Bracket
exports.addBracket = (req, res) => {
  let userData = req.body;
  if(Object.keys(userData).length == 0) {
      res.status(401).json({'status':'false','error':'empty payload'});
  }else{
    if( ( (typeof userData.bracket_id == 'undefined') && (typeof userData.info == 'undefined') && (typeof userData.date == 'undefined') )  ||
        ( !userData.bracket_id && !userData.info && !userData.date )
    ) {
      res.status(401).json({'status':'false','error':'required parameter bracket_id, bracket info and bracket date'});
    }else{
      if(!userData.bracket_id) {
          res.status(401).json({'status':'false','error':'required parameter bracket_id'});
      }else{
        if(!userData.info) {
            res.status(401).json({'status':'false','error':'required parameter bracket info'});
        }else{
          if(!userData.date) {
              res.status(401).json({'status':'false','error':'required parameter bracket date'});
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
}

// Update Bracket
exports.updateBracket = (req, res) => {
  let userData = req.body;
  if(Object.keys(userData).length == 0) {
      res.status(401).json({'status':'false','error':'empty payload'});
  }else{
    if( ( (typeof userData.bracket_id == 'undefined') && (typeof userData.info == 'undefined') && (typeof userData.date == 'undefined'))  ||
        ( !userData.bracket_id && !userData.info && !userData.date)
    ) {
      res.status(401).json({'status':'false','error':'required parameter bracket_id, bracket info and bracket date'});
    }else{
      if(!userData.bracket_id) {
          res.status(401).json({'status':'false','error':'required parameter bracket_id'});
      }else{
        if(!userData.info) {
            res.status(401).json({'status':'false','error':'required parameter bracket info'});
        }else{
          if(!userData.date) {
              res.status(401).json({'status':'false','error':'required parameter bracket date'});
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
}

// Get a Bracket
exports.getBracket = (req, res) => {
  const bracketId = req.params.id;
  if(bracketId) {
    let bracket = Bracket.find({"bracket_id":bracketId})
      .then(data => {
        res.send({'status':'true','error':'','data':data});
      })
      .catch(err => {
        res.status(500).send({
          'status':'false',
          'error': err.message || "Some error occurred while retrieving bracket."
        });
      });
  }
}

// Delete a Bracket
exports.deleteBracket = (req, res) => {
  const id = req.params.id;

  Bracket.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          'status': 'false',
          'error': `Cannot delete Bracket with id=${id}. Maybe Bracket was not found!`
        });
      } else {
        res.send({
          'status': 'false',
          'error': 'Bracket was deleted successfully!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        'status': 'false',
        'error': "Could not delete Tutorial with id=" + id
      });
    });
}
