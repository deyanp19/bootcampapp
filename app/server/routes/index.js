const bootcampController = require('../controller/bootcamps');


module.exports = (app) => {
  
  app.get('/all', (req, res) => res.status(200).send({
    message: 'Welcome to Bootcamp Connect',
  }));

  app.post('/api/comments', bootcampController.create);
};