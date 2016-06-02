'use strict';

// user-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize)
{
	let app = this;
	const user = sequelize.define('users',
	{	//Attributes
		/*id:
		{
			type: Sequelize.INTEGER.UNSIGNED,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},*/
	login:
		{
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
	email:
		{
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
	password:
		{
			type: Sequelize.STRING,
			allowNull: false
		}
	},  
	{	//OptionsOrtello, 27.05, CC -> Entweder Oder explodiert

		freezeTableName: true
	});

	/*Nelor: Neither app.configure() nor setup() worked to make connections between models possible. the user service is calling this model with the feathers app as its context using the prototype.call() method,making other services and their models available. izs then reassigned to const app.
	Just call app.services([name of the service you rely on]).Model to connect with the model, creating the necessary tables. Hoepfully its not a problem that the first table here is already synced.
	This means the creation of the second table will always have to trigger all setting of indexes on all tables. I believe that for no constructions access to other tables is actually necessary, but I might e wrong on that now... check later.
	The constraints cant be applied in setup(), because sync() is called on the end of the models creation, meaning when feathers is setting up the service and calling setup, sync() already ran. So it has to be done here, lates point before sync.*/
	
	const profiles = app.service('profiles').Model; //Nelor Don't forget to make sure the service already exists when you establish this one.
	
	user.belongsTo(profiles);
	
	app.set('_servicePromise',
	app.get('_servicePromise')
	.then(() =>
	{
		return user.sync({ force:true })
		.then(() => { console.log("Model 'user': synchronized."); });
	}));
	//.then(() => { console.log("Model 'user': sync scheduled.");}));
	
	return user;
};
