const Comment = require('../models').comments;

module.exports = {
  //Create a new comment
  create(req, res) {
    return Comment
      .create({
        bootcamp_id: req.body.bootcamp_id,
        user_id: req.body.user_id,
        comment: req.body.comment,
      })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },
  //Return all comments
  allComments(req, res){
    return Comment
    .findAll({})
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  },
  //Return bootcamp specific comments
  bootcampComment(req, res){
    console.log(req.params.id);
    return Comment
    .findAll({
      where: {
        user_id: req.params.id
      }
    })
    .then(comment => res.status(201).send(comment))
    .catch(error => res.status(400).send(error));
  }
};