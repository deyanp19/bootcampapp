'use strict';
module.exports = (sequelize, DataTypes) => {
  const programs = sequelize.define('programs', {
    id: DataTypes.INTEGER,
    program_type: DataTypes.STRING
  }, {});
  programs.associate = function(models) {
    // associations can be defined here
  };
  return programs;
};