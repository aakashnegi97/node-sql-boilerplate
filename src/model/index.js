const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
});

const Service = require('./service');
const User = require('./User');

User.initModel(sequelize);
Service.initModel(sequelize);

// Define associations
User.hasMany(Service, { foreignKey: 'userId' });
Service.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Service };
