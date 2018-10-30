'use strict';
module.exports = (sequelize, DataTypes) => {
  const programs = sequelize.define('programs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    program_type: DataTypes.STRING
  }, {});
  programs.associate = function(models) {
    // associations can be defined here
  };
  return programs;
};