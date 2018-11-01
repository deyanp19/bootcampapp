const bootcampController = require('../controller/bootcamps');


module.exports = (app) => {
  
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Bootcamp Connect',
  }));

  //Return all comments
  app.get('/comment', bootcampController.allComments);

  //Return comments for a specific bootcamp
  app.get('/comment/:id', bootcampController.bootcampComment);

  //Create a new comment for a bootcamp
  app.post('/api/comments', bootcampController.create);
};