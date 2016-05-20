'use strict';
const profiles = require('./profiles');
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');

module.exports = function() {
  const app = this;

	console.log('APP: ' + app);
  
  const sequelize = new Sequelize(app.get('mariadb'), {
    dialect: 'mariadb',
    logging: false
  });
  app.set('sequelize', sequelize);

  app.configure(authentication);
  app.configure(profiles);
  app.configure(user);
 
};
