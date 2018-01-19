var Sequelize = require('sequelize'),
    sequelize = new Sequelize('postgres://expressbuzz:123.456@localhost:5432/expressbuzzdb');

module.exports = sequelize;