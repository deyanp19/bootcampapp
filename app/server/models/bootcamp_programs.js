'use strict';
module.exports = (sequelize, DataTypes) => {
  const bootcamp_programs = sequelize.define('bootcamp_programs', {
    bootcamp_id: DataTypes.INTEGER,
    program_id: DataTypes.INTEGER
  }, {});
  bootcamp_programs.associate = function(models) {
    // associations can be defined here
  };
  return bootcamp_programs;
};