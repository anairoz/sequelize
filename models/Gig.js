const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {	//second param is object
	title: {
		type: Sequelize.STRING
	},
	technology: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.STRING
	},
	budget: {
		type: Sequelize.STRING
	},
	contact_email: {
		type: Sequelize.STRING
	}
})
module.exports = Gig;	//export it
