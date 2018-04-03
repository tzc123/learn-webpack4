const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const router = new Router()
const app = new Koa()
const list = [

]

router.get('/search', ctx => {
  ctx.body = {
    haha: 1
  }
})
// 静态文件服务器，其实就是根据文件目录建立路由
app.use(static('./dist'))

app.use(router.routes())
// 如果前面没有匹配到任何路由，则会跳转到index.html
app.use(ctx => {
  ctx.redirect('/index.html')
})

app.listen(3000, (err, msg) => {
  console.log('server start at port 3000')
})