'use strict';

// profiles-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize)
{
	let app = this;
	
	const profiles = sequelize.define('profiles',
	{
		id:
		{
			type: Sequelize.INTEGER.UNSIGNED,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		text:
		{
		  type: Sequelize.STRING,
		  allowNull: false
		}
	},
	{
		freezeTableName: true
	});
	
	app.set('_servicePromise',
	app.get('_servicePromise')
	.then(() =>
	{
		return profiles.sync({ force:true })
		.then(() => { console.log("Model 'profiles': synchronized."); });
	}));
	//.then(() => { console.log("Model 'profiles': sync scheduled.");}));
	//.then(null, (err) => { console.log("ERR::TESTHP->SERVICES->profiles->model->sync => \n" + err); })
	//.then(() => { return profiles; }));
	
	return profiles;
};
