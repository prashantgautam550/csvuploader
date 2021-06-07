'user strict';
try {
	var mssql = require('mysql');
  } catch (error) {
	console.log('Cannot find `mysql` module. Is it installed ? Try `npm install mysql` or `npm install`.');
  }


var db_config = {
	server     : '127.0.0.1:3306',
	user     : 'root',
	password : 'password',
	database : 'test',
}


 

var connection = mssql.createConnection(db_config)

connection.connect((err)=>{
	if(err) {
	  // mysqlErrorHandling(connection, err);
	  console.log("\n\t *** Cannot establish a connection with the database. ***");
	  connection = reconnect(connection);
	}else {
		  console.log("\n\t *** cb new connection established with the database. ***")
	  }
  });


 module.exports = {connection};



