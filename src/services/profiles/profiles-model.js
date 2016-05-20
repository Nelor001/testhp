'use strict';

// profiles-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize)
{
	const profiles = sequelize.define('profiles',
	{
		text:
		{
		  type: Sequelize.STRING,
		  allowNull: false
		}
	},
	{
		freezeTableName: true
	});
	
	sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
	.then(function() { return profiles.sync({ force:true });})
	.then(function() { return sequelize.query('SET FOREIGN_KEY_CHECKS = 1');} )
	.then(function() { console.log("Model 'profiles' synchronised."); },
	(err) => { console.log("ERR::TESTHP->SERVICES->profiles->model->sync => \n" + err); });
	
	return profiles;
};
