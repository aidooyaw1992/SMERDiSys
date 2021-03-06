'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'test';
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
  // var sequelize = new Sequelize('sql2235084', 'sql2235084', 'wii7fw6b', {host:'sql2.freemysqlhosting.net', dialect:'mysql',operatorsAliases:false});

} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
  // var sequelize = new Sequelize('sql2235084', 'sql2235084', 'wii7fw6b', {host:'sql2.freemysqlhosting.net', dialect:'mysql',operatorsAliases:false});
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Pharmacist = db.sequelize.import('pharmacist.js');
db.Patient = db.sequelize.import('patient.js');
db.Dispenser = db.sequelize.import('dispenser.js');
db.Drug = db.sequelize.import('drug.js');

db.Dispenser.belongsTo(db.Pharmacist);
db.Patient.belongsTo(db.Pharmacist);
db.Patient.belongsTo(db.Dispenser);
db.Patient.belongsTo(db.Drug);
module.exports = db;
