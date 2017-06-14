const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello World1131'
})

app.listen(9722)
console.log('Listening on 9722')
