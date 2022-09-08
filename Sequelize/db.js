const Sequelize = require('sequelize');
const sequelize = new Sequelize('DB', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
})

module.exports = sequelize;