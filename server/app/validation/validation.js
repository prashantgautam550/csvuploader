/* eslint-disable */
const iisfManager = require("./schema");

module.exports = {
  loginValid: async (req, res,next) =>{
    const value = await iisfManager.loginSchema.validate(req.body);
    errorMessage(value, res, next);
  }
  //getEventById
  //iisfUserRegister
  //iisfLoginEmail
}
const errorMessage = (value, res, next) => {
  if (value.error) {
    return res.json({
      success: false,
      message: value.error.details[0].message
    })
  } else {
    next();
  }
}