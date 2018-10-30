'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    id: DataTypes.INTEGER,
    bootcamp_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
    comments.belongsTo(models.bootcamp,{
      foreignKey: 'id',
    })
  };
  return comments;
};