const Sequelize = require('sequelize');
const database = require('./db');

const User = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
});

module.exports = User;