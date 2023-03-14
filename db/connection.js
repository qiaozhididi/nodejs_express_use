// 理解mysql数据库        ORM层

const Sequelize = require('sequelize')

// 创建连接
module.exports = new Sequelize('node_test', 'root', 'root', {
    // 数据库地址
    host: 'localhost',
    // 连接数据库名称
    dialect: 'mysql',
    // 时区
    timezone: '+08:00',
    // 设置连接池
    pool: {
        // 最大连接
        max: 5,
        // 最小连接
        min: 0,
        // 连接超时30s,自动释放
        acquire: 30000,
        // 闲置时间10s,自动释放
        idle: 10000
    }
})