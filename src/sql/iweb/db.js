const { Sequelize } = require('sequelize');
const { sqlAddress } = require('../../../util/config')
const db = new Sequelize('web', 'root', 'root', {
    host: sqlAddress,
    port: '3306',
    dialect: 'mysql',
    dialectOptions: {
        //字符集
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
})

module.exports = {
    db
}