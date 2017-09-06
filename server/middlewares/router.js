/**
 * Created by Administrator on 2017/9/1.
 */
import  Router from 'koa-router'

import {resolve} from 'path'
export const router = app => {
  const router = new Router()

   router.get('/',async (ctx,next)=>{
   })
  app.use(router.routes())
      .use(router.allowedMethods())
}