'user strict';
// router/routes/landtRoutes.js
var express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/' });
const validation = require('../validation/validation');
const controller = require('../controllers/controller');
const checkAuth = require('../config/check-auth');


var router = express.Router();
router.post('/allgood',   checkAuth, controller.default);
router.post('/summary',  controller.getsummaryController);
router.post('/column', controller.getTableColumnCN);
router.post('/par-vehicles', controller.getCheckInVehCon);
router.post('/delete-all', controller.deleteAllCN);
router.post('/bulk-upload', upload.single('file'), controller.bulkUploading);


module.exports = router;
