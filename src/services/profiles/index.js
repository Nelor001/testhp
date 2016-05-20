'use strict';

const service = require('feathers-sequelize');
const profiles = require('./profiles-model');
const hooks = require('./hooks');

module.exports = function(){
	const app = this;
  
	const options =
	{
		Model: profiles.call(app, app.get('sequelize'))/*,
		paginate: {
		  default: 5,
		  max: 25
		}*/
	};
	
	// Initialize our service with any options it requires
	app.use('/profiles', service(options));

	// Get our initialize service to that we can bind hooks
	const profilesService = app.service('/profiles');

	// Set up our before hooks
	profilesService.before(hooks.before);

	// Set up our after hooks
	profilesService.after(hooks.after);
};
