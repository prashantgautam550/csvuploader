'user strict';
const sql = require('./../config/dbconfig').connection;
const connecAag = require('./../config/dbconfig').reconnect;
// var sql = require('mssql');

module.exports = {

  getlots:(data)=>{
    return new Promise((resolve, reject) => {
      var query = "SELECT * FROM test.countries";
      // console.log(query);
          sql.query(query,(error, results, fields)=>{
          //  console.log(error, "fvfvfv");
          // console.log(results, "dvffc wwwwww")
            if (error) {
              return reject(error);
            }
            return resolve(results);
          });
        });
      },

      deleteAll:(data)=>{
        return new Promise((resolve, reject) => {
          var query = "DELETE FROM test.countries";
          console.log(query);
              sql.query(query,(error, results, fields)=>{
               // console.log(error, "fvfvfv");
              // console.log(results, "dvffc wwwwww")
                if (error) {
                  return reject(error);
                }
                return resolve(results);
              });
            });
          },


        getTableColumn: (data)=>{
        return new Promise(async (resolve, reject) => {
          var query = `SELECT COLUMN_NAME
          FROM INFORMATION_SCHEMA.COLUMNS
          WHERE TABLE_NAME = N'countries'`;
          await sql.query(query,(error, results, fields)=>{
              //  console.log(error, "fvfvfv");
              // console.log(results, "dvffc wwwwww")
                if (error) {
                  return reject(error);
                }
                return resolve(results);
              });
            });
          },


          getVehicleNum:(data)=>{
            return new Promise((resolve, reject) => {
             var query = "SELECT * FROM parking_vechiles_map WHERE parking_id="+data[0]+" AND vehicles_id="+data[1];
               console.log(query);
                  sql.query(query,(error, results, fields)=>{
                   // console.log(error, "fvfvfv");
                  // console.log(results, "dvffc wwwwww")
                    if (error) {
                      return reject(error);
                    }
                    return resolve(results);
                  });
                });
              },
          getLeftVehicleNum:(data)=>{
            return new Promise((resolve, reject) => {
             var query = "SELECT * FROM sch_map WHERE parking_id="+data[0]+" AND vechile_id="+data[1];
               console.log(query);
                  sql.query(query,(error, results, fields)=>{
                   // console.log(error, "fvfvfv");
                  // console.log(results, "dvffc wwwwww")
                    if (error) {
                      return reject(error);
                    }
                    return resolve(results);
                  });
                });
              },
         getCheckInVeh:(data)=>{
            return new Promise((resolve, reject) => {
              var query = "SELECT * FROM test.countries";
               console.log(query);
                  sql.query(query,(error, results, fields)=>{
                   // console.log(error, "fvfvfv");
                  // console.log(results, "dvffc wwwwww")
                    if (error) {
                      return reject(error);
                    }
                    return resolve(results);
                  });
                });
              },
          getCheckOUt:(data)=>{
            return new Promise((resolve, reject) => {
             var query = "UPDATE sch_map SET end_time = '"+data.end_time+"' WHERE parking_id="+data.parking_id+" AND vechile_id="+data.vechile_id+" AND car_no="+data.car_no+" AND start_time='"+data.start_time+"'";
             
               console.log(query);
                  sql.query(query,(error, results, fields)=>{
                   // console.log(error, "fvfvfv");
                  // console.log(results, "dvffc wwwwww")
                    if (error) {
                      return reject(error);
                    }
                    return resolve(results);
                  });
                });
              },

              uploadBulk:(data)=>{
                return new Promise((resolve, reject) => {
                 // var string= data.path.replace("\\", "/");
                  var string=data.path.split('\\').join('/')
                // var query = "NSERT INTO user_meetings_map (user_id, question_id, meeting_id, rating, rating_user_id) VALUES "+data;
                 var query = `LOAD DATA INFILE '`+string+`' 
                 INTO TABLE test.countries
                 FIELDS TERMINATED BY ',' IGNORE 1 LINES;`
                   console.log(query);
                      sql.query(query,(error, results, fields)=>{
                       // console.log(error, "fvfvfv");
                      // console.log(results, "dvffc wwwwww")
                        if (error) {
                          return reject(error);
                        }
                        return resolve(results);
                      });
                    });
                  },
          

          

}