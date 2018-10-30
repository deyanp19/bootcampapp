'use strict';
module.exports = (sequelize, DataTypes) => {
  const locations = sequelize.define('locations', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    location: DataTypes.STRING
  }, {});
  locations.associate = function(models) {
    // associations can be defined here
  };
  return locations;
};