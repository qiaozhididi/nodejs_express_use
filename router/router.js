//路由层

//导入路由控制层
const routerControl = require(__basename + '/router_control/routerControl.js' )

module.exports = app => {


    // 注册
    app.post('/register', routerControl.registerControl)
}