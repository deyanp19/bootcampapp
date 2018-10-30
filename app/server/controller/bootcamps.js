const Comment = require('../models').comments;

module.exports = {
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
};