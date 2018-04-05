const Koa = require('koa')
const cors = require('koa-cors')
const Router = require('koa-router')
const static = require('koa-static')
const body = require('koa-body')
const router = new Router()
const app = new Koa()

class List {
  constructor() {
    this._list = []
  }
  add(item) {
    const isValid = List.fields.every(
      key => item.hasOwnProperty(key)
    )
    
    if (!isValid) return false

    item.id = List.id
    item.created_at = Date.now()
    this._list.push(item)
    List.id++

    return true
  }
  update(item) {
    console.log(item)
    const isValid = item.hasOwnProperty('id')

    if (!isValid) return false

    const willUpdate = this._list.find(i => +item.id === i.id)

    if (!willUpdate) return false

    willUpdate.updated_at = Date.now()
    List.fields.forEach(field => {
      willUpdate[field] = item[field]
    })

    return true
  }
  find(query) {
    const keys = Object.keys(query)

    if (keys.length == 0) return this._list

    return this._list.filter(
      item => keys.every(
        key => query.key === item.key
      )
    )
  }
}

List.fields = ['name', 'grade', '_class', 'birth', 'sex', 'avatar']
List.id = 1

const list = new List()
list.add({
  name: 'aaa',
  grade: 3,
  _class: 10,
  birth: new Date('1997/03/15').getTime(),
  sex: 1,
  avatar: '/avatars/aaa.png'
})

router
  .get('/list', ctx => {
    const { query } = ctx
    ctx.body = {
      success: true,
      data: list.find(query)
    }
  })
  .post('/add', ctx => {
    const { body } = ctx.request
    const res = list.add(body)
    ctx.body = {
      success: res
    }
  })
  .post('/update', ctx => {
    const { body } = ctx.request
    const res = list.update(body)
    ctx.body = {
      success: res
    }
  })
// 解析post请求的参数
app.use(body())
// 解决跨域
app.use(cors())
// 静态文件服务器，其实就是根据文件目录建立路由
app.use(static('./public'))

app.use(router.routes())

app.listen(3000, (err, msg) => {
  console.log('server start at port 3000')
})