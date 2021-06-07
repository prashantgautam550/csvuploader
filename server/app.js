
dotenv = require('dotenv').config();
const http = require('http');
https = require('https');
fs = require('fs');
path = require('path');
methods = require('methods');
express = require('express');
morgan = require('morgan');

bodyParser = require('body-parser');
compression = require('compression');
cors = require('cors');
const isProduction = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV, "po");
const AppError = require('./app/services/appError');
var app = express();
var cron = require('node-cron');

// Implement CORS
app.use(cors({
  origin: '*'
}));

if (!isProduction) {
  app.use(morgan('dev'));
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./app/routes/index')(app);


 


app.use((err, req, res, next)=> {
  res.status(err.status || 500);
  res.json({
    'errors': {
      message: err.message,
      error: {}
    }
  });
});
if (!isProduction) {
  console.log('Not in production call');
  var server = http.createServer(app);
}else{
  var server = http.createServer(app);
}
server.listen(process.env.PORT || 4000, ()=> {
  console.log(`Listening on port `);
});
