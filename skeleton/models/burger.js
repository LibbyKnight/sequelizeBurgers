//library sequelize
var Sequelize = require("sequelize");

//connection sequelize
var sequelize = require("../config/connection.js");


var burgers = sequelize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 255]
    }
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  }
});


burgers.sync();
