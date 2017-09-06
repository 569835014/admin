import Koa from 'koa'
import R from 'ramda'
import { resolve } from 'path'
const MIDDLEWARES = ['database']
const r = path => resolve(__dirname, path)
const serverConfig={
  port:3009,
  host:"127.0.0.1"
}
class Server{
  constructor(){
    this.app=new Koa();
    this.useMiddleWares(this.app)(MIDDLEWARES)
  }
  useMiddleWares (app) {
    return R.map(R.compose(
      R.map(i => i(app)),
      require,
      i => `${r('./middlewares')}/${i}`
    ))
  }
   start(){
    this.app.use(ctx => {
      ctx.status = 200 // koa defaults to 404 when it sees that status is unset
      ctx.body='hello word';
    })
    this.app.listen(serverConfig.port,serverConfig.host);
    console.log('Server listening on' + serverConfig.host + ':' + serverConfig.port)
  }
}
const app=new Server();
app.start();