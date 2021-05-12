const router=require('express').Router()
let Task=require('../models/task.model');

router.route('/').get((req,res)=>{
    Task.find()
    .then(task=>res.json(task))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/add').post((req,res)=>{
    const newTask=new Task({task:req.body.task,completed:false})
    newTask.save()
    .then(()=>res.json('task added!!'))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/:id').delete((req,res)=>{
    Task.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Task deleted'))
    .catch(err=>res.status(400).json('Error: '+err))
})
router.route('/update/:id').post((req,res)=>{
    Task.findById(req.params.id)
    .then(task=>{
        task.completed=!task.completed;
        task.save()
        .then(()=>res.json('Task updated'))
        .catch(err=>res.status(400).json('Error',+err));
    })
    .catch(err=>res.status(400).json('Error',+err));
})
module.exports=router