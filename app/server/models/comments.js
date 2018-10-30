'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bootcamp_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comments.associate = function(models) {
    // associations can be defined her
  };
  return comments;
};