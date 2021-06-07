const joi = require('joi');

const schema = {
  loginSchema: joi.object({
    userEmail:joi.string().required(),
  })
};

module.exports = schema;
