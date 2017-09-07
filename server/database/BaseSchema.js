import mongoose from 'mongoose'
const Schema=mongoose.Schema;
class BaseSchema{
  constructor(structure,name){
    this.meta={
      createdAt:{//创建时间
          type:Date,
          default:Date.now()
        },
      updatedAt:{//更新时间
          type:Date,
          default:Date.now()
        }
    }
     this.structure=Object.assign({},this.meta,structure);
    console.log(name);
    this[name+'Schema']=new Schema(this.structure);
    this.init(this[name+'Schema']);
    this.statics(this[name+'Schema']);
  }
  init(schema,realization){
    this.pre(schema,realization);
    this.statics(schema);
  }
  pre(schema,realization){
    schema.pre('save',function (next) {

      if(!realization||realization.position){//如果没有position要覆盖父级方法
        if(this.isNew){//如果是现在更新创建和更新
          this.createdAt= this.updatedAt=Date.now();
        }else{//只更新更新时间
          this.updatedAt=Date.now()
        }
      }else{
        realization.apply(this);
      }
      next();
    });
  }
  statics(schema){


  }
  entity(name,schema){
    mongoose.model(name,schema);
  }
}

export default BaseSchema