const express = require("express");
const utils = require("./validation/testSchema");
const router = express.Router();


// router.get('/hi',()=>{
//     console.log("hello");
// })

const tasks = [
    {
    id:1,
    name:"Task 1",
    completed : false
},
{
    id:2,
    name:"Task 2",
    completed : false
},
{
    id:3,
    name:"Task 3",
    completed : false
}
]
router.get("/api/tasks",(req,res)=>{
    res.status(200).send(tasks);
})

router.get("/api/tasks/:id",(req,res)=>{
    const taksid = req.params.id;
    res.status(200).send(tasks[taksid])    
})

router.post("/create/tasks", (req,res) =>{
    const {error} = utils.validateTask(req.body);
    if(error) return res.status(400).send("The name should be at least 3 char long");

    const task = {
        id : tasks.length+1,
        name : req.body.name,
        completed : req.body.completed
    };
    tasks.push(task);
    res.status(201).send(task);
})

module.exports=router;

