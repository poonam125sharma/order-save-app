const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');
db.mongoose.connect(db.url, {
  newUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to the database");
}).catch(err => {
  console.log("Error in connecting to the database ", err);
  process.exit();
});

// simple route
app.get('/',(req,res) => {
  res.json({message: "Welcome to the Order Store app"});
});

// set ports, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on the PORT ${PORT}`);
});
