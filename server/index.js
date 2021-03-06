import Koa from 'koa'
import R from 'ramda'
import { resolve } from 'path'
const MIDDLEWARES = ['database','router']
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
    })
    this.app.listen(serverConfig.port,serverConfig.host);
    console.log('Server listening on' + serverConfig.host + ':' + serverConfig.port)
  }
}
const app=new Server();
app.start();