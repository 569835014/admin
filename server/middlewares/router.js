/**
 * Created by Administrator on 2017/9/1.
 */
import  Router from 'koa-router'
import mongoose from 'mongoose'
import {resolve} from 'path'
export const router = app => {
  const router = new Router()
  const User = mongoose.model('User');

   router.get('/register',async (ctx,next)=>{
     User.register({
       userName:'admin123',
       loginPwd:'123456'
     })
     next();

   })
  app.use(router.routes())
      .use(router.allowedMethods())
}