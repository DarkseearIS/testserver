const express = require("express");
const router = express.Router();
const User  = require("./user");

//get
router.get("/user", (req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("access-control-allow-credentials", "true");
    res.setHeader("Access-Control-Request-Method", "*");
    User.find({})
        .then(user => {
            res.send(user)
        });
});

//add
router.post("/addUser", (req, res)=>{
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("access-control-allow-credentials", "true");
      res.setHeader("Access-Control-Request-Method", "*");
      User.create(req.body)
          .then(user=> {
              res.send(user);
              console.log(user)
          })
  });

//edit
  router.put("/putUser/:id", (req, res)=>{
      User.findByIdAndUpdate({_id:req.params.id}, req.body)
          .then(()=>{
              User.findOne({_id: req.param.id})
                  .then(user => {
                      res.send(user)
                  });
          })
  });

//delete
  router.delete("/deleteUser/:id", (req, res)=>{
      User.deleteOne({_id:req.params.id})
          .then(user=>{
              res.send(user);
          })
  });

module.exports = router;