'use strict';
module.exports = (sequelize, DataTypes) => {

  const Bootcamp = sequelize.define('Bootcamp', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {});
  Bootcamp.associate = function(models) {
    Bootcamp.hasMany(models.comments, {
      foreignKey: 'bootcamp_id',
      as: 'bootcampReviews'
    })
  };
  return Bootcamp;
};