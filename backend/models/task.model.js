const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const taskSchema=new Schema(
    {
        task:{type:String,required:true},
        completed:{type:Boolean,required:true}
},
{timestamps:true}
)

const task=mongoose.model('task',taskSchema)
module.exports=task
