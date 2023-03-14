//路由控制层
class RouterControl{

    //注册
    registerControl(req,res){
        res.send({msg:'路由控制层-注册测试'})
    }
}

//导出
module.exports = new RouterControl()