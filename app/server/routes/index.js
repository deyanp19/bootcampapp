const bootcampController = require('../controller/bootcamps');


module.exports = (app) => {
  
  app.get('/hi', (req, res) => res.status(200).send({
    message: 'Welcome to Bootcamp Connect',
  }));

  app.get('/comment', bootcampController.find);

  app.post('/api/comments', bootcampController.create);
};