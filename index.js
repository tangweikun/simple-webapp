const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello Wor131'
})

app.listen(9722)
console.log('Listening on 9722')
