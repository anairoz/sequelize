
const Sequelize = require('sequelize');//connect sequelize
module.exports = new Sequelize('codegag', 'postgres', 'anairoz37', {//bring in//1-DATABASE name, 2 - username, 3 - password
	host: 'localhost',
	dialect: 'postgres',
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},

});
