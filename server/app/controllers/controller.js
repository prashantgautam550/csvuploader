'user strict';
const cbsql = require('../config/dbconfig');
const cbmodel = require('../models/manager');
//const csv = require('fast-csv');
const { parse }= require('fast-csv');

const fs = require('fs');
var jwt = require('jsonwebtoken');
var moment = require('moment');
const AppError = require('../services/appError');
const axios = require('axios');



module.exports = {
  default: async (req, res) => {
    res.json('All Good');
  },
      

  getsummaryController: async (req, res) => {
    try {
      console.log("dataPassword");
      const summary = await cbmodel.getlots();
      return res.json({
        status:true,
        message:summary
      });
     
    } catch (error) {
      return res.json({
        message: error
      });  
      
    }
  },


  deleteAllCN: async (req, res) => {
    console.log("test")
    try {
    const pendingMeetings = await cbmodel.deleteAll();
    return res.json({
      status:true,
      message:pendingMeetings
    });
    } catch (error) {
      return res.json({
        message: error
      });  
      
    }
  },


  getTableColumnCN: async (req, res) => {
    try {
      const allQuestions = await cbmodel.getTableColumn();
   //  console.log(allQuestions);
      if(!allQuestions){
                return res.json({
                  status:false,
                  message:'no record found'
                });
     }else{

      return res.json({
        status:true,
        message:allQuestions
      });
                
        }
    } catch (error) {
      return res.json({
        message: error
      });  
      
    }
  },

  getcheckoutController: async (req, res) => {
    try {
  var data ={
    parking_id: req.body.parking_id
  }
      const allQuestions = await cbmodel.getVehicle(data);
     //console.log(allQuestions);
      if(!allQuestions){
                return res.json({
                  status:false,
                  message:'no record found'
                });
     }else{

      return res.json({
        status:true,
        message:allQuestions
      });
                
        }
    } catch (error) {
      return res.json({
        message: error
      });  
      
    }
  },

  getCheckInVehCon: async (req, res) => {
    try {
      const allQuestions = await cbmodel.getCheckInVeh();
     //console.log(allQuestions);
      if(!allQuestions){
                return res.json({
                  status:false,
                  message:'no record found'
                });
     }else{
      return res.json({
        status:true,
        message:allQuestions
      });
                
        }
    } catch (error) {
      return res.json({
        message: error
      });  
      
    }
  },

  getCheckOUtCont: async (req, res) => {
    try {
  var data ={
    parking_id: req.body.parking_id,
    vechile_id: req.body.vechile_id,
    car_no: req.body.car_no,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
  }
  
      const allQuestions = await cbmodel.getCheckOUt(data);
     console.log(allQuestions);
      if(!allQuestions){
                return res.json({
                  status:false,
                  message:'no record found'
                });
     }else{

      return res.json({
        status:true,
        message:allQuestions
      });
                
        }
    } catch (error) {
      return res.json({
        message: error
      });  
      
    }
  },


  bulkUploading: async (req, res) => {
    var data ={
      path: req.file.path,
    }
    console.log(req.file.name, "req.file.name");
    const allQuestions = await cbmodel.uploadBulk(data);
      // fs.createReadStream(req.file.path)
      // .pipe(parse())
      // .on('error', error => console.error(error))
      // .on('data', row => {
      //   console.log(row)

      // })
      // .on('end', (rowCount) => {console.log(`Parsed ${rowCount} rows`);fs.unlinkSync(req.file.path);});

    return res.json({
      message: allQuestions
    });  
}


}
