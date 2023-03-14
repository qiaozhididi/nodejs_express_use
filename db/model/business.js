// 商家模型（数据表结构）

const Sequelize = require('sequelize')

let Model = Sequelize.Model

// 继承Model
class Business extends Model {

}

// 创建Business方法
Business.init({
    // id字段
    id: {
        // 数据类型：INTEGER -> 整型   ，UNSIGNED  ->  无号
        type: Sequelize.INTEGER.UNSIGNED,
        // 是否允许为空
        allowNull: false,
        // 主键
        primaryKey: true,
        // 自动递增
        autoIncrement: true,
        // 备注
        comment: 'id字段'
    },
    //邮箱
    email:{
        // 数据类型：string ->字符串
        type:Sequelize.STRING(50),
        allowNull:true,
        defaultValue:'',
        comment:'邮箱'
    },
    // 昵称
    nickname:{
        type:Sequelize.STRING(20),
        allowNull:true,
        defaultValue:'',
        comment:'昵称'
    },
    //密码
    password:{
        type:Sequelize.STRING(20),
        allowNull:true,
        defaultValue:'',
        comment:'密码'
    },
},
    {
        //配置
        // 默认为类的名称
        modelName:'business',
        // 是否添加时间戳
        timestamps:true,
        //是否开启假删除
        paranoid:true,
        //自动修改字段为蛇形（_）  nickname nickName->nick_name
        underscored:true,
        // 是否禁止修改表名
        freezeTableName:true,
        //定义表名
        tableName:'business',
        //连接实例
        sequelize
    }
    )
// force:false  如果存在该表，则不创建新表
//force:true  如果存在该表，则先删除再新建
Business.sync({force:false})

// 导出商家模型
module.exports = Business