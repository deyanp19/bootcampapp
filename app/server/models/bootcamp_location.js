'use strict';
module.exports = (sequelize, DataTypes) => {
  const bootcamp_location = sequelize.define('bootcamp_location', {
    bootcamp_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER
  }, {});
  bootcamp_location.associate = function(models) {
    // associations can be defined here
  };
  return bootcamp_location;
};