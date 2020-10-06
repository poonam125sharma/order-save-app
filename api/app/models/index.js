const dbConfig = require('../config/db.config.js');

const mongoose = require("mongoose");
// mongoose.Promise = global.promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.brackets = require("./bracket.model.js")(mongoose);

module.exports = db;
