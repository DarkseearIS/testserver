const express = require("express");
const router = express.Router();
const User  = require("./user");

router.get("/user", (req, res)=>{
    User.find({})
        .then(user => {
            res.send(user)
        });
});

router.post("/addUser", (req, res)=>{
    User.create(req.body)
        .then(user=> {
            res.send(user);
        })
});
/*

router.put("/putUser/:id", (req, res)=>{
    User.findByIdAndUpdate({_id:req.params.id}, req.body)
        .then(()=>{
            User.findOne({_id: req.param.id})
                .then(user => {
                    res.send(user)
                });
        })
});

router.delete("/deleteUser/:id", (req, res)=>{
    User.deleteOne({_id:req.params.id})
        .then(user=>{
            res.send(user);
        })
});
*/

module.exports = router;