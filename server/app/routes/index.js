module.exports = (app) => {
  app.use('/api', require('./routes'));
  //comment added
};

