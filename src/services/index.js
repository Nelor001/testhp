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

  /*app.configure(authentication);
  app.configure(profiles);
  app.configure(user)*/

	app.set('_servicePromise', sequelize.query('SET FOREIGN_KEY_CHECKS = 0;'));

	let services =
	[
		authentication,
		profiles,
		user
	];
	
	services.forEach((currentService) => { app.configure(currentService);});
	
	app.get('_servicePromise')
	.then(() =>
	{
		return sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
	})
	.catch((err) => { console.log('Error: services/index.js->service init =>'); console.error(err); });
	
};
