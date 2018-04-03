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

app.use(static('./dist'))

app.use(ctx => {
  ctx.redirect('/index.html')
})

app.listen(3000, (err, msg) => {
  console.log('server start at port 3000')
})