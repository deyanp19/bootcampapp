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
    // associations can be defined here
  };
  return Bootcamp;
};