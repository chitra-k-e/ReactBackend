const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send("user added")
})
router.get('/newuser', (req, res) => {
    res.send("new user added");
})
router.get('/delete',(req,res) => {
    res.send("user deleted");
})

router.route('/:id/').get((req,res)=>{console.log(req.usery);
    res.send("retrieve id value: "+req.params.id);})
        .put((req,res)=>{res.send("update id value: "+req.params.id);})
        .delete((req,res)=>{res.send("delete id value: "+req.params.id);})
const users = [{name:"raja"},{name: "rani"},{name:"sepoy"}]
router.param('id',(req,res,next,id)=>{
    console.log(id);55
    req.usery = users[id];
    next();
})
// router.get('/:id', (req, res) => {
//     res.send("retrieve id value: "+req.params.id);
// })
// router.put('/:id', (req, res) => {
//     res.send("update id value: "+req.params.id);
// })
// router.delete('/:id', (req, res) => {
//     res.send("delete id value: "+req.params.id);
// })
module.exports = router;