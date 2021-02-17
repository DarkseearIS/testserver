const express = require("express");
const router = express.Router();
const User  = require("./user");
const Client = require("./clients");

//get client info
router.get("/client", (req, res)=>{
    Client.find({})
        .then(client => {
            res.send(client)
        });
});

//get user info
router.get("/user", (req, res)=>{

    User.find({})
        .then(user => {
            res.send(user)
        });
});

/*router.get("/.well-known/pki-validation/394C031920C1993F9E3A72325E73946B.txt", (req, res)=>{

            res.sendFile(__dirname + "/394C031920C1993F9E3A72325E73946B.txt")

});
*/
////////////////////////////////////////////////////////////////////////////////

//add client
router.post("/addClient", (req, res)=>{
    Client.create(req.body)
        .then(client=> {
            res.send(client);
            console.log(client)
        })
});


//add user
router.post("/addUser", (req, res)=>{
      User.create(req.body)
          .then(user=> {
              res.send(user);
              console.log(user)
          })
  });

/////////////////////////////////////////////////////////////////////////////////

  //edit client
  router.put("/putClient/:id", (req, res)=>{
      Client.findByIdAndUpdate({_id:req.params.id}, req.body)
          .then(()=>{
              User.findOne({_id: req.params.id})
                  .then(client => {
                      res.send(client)
                  });
          })
  });

  //edit user
  router.put("/putUser/:id", (req, res)=>{
      User.findByIdAndUpdate({_id:req.params.id}, req.body)
          .then(()=>{
              User.findOne({_id: req.params.id})
                  .then(user => {
                      res.send(user)
                  });
          })
  });

////////////////////////////////////////////////////////////////////////////////

  //delete Client
  router.delete("/deleteClient/:id", (req, res)=>{
      Client.deleteOne({_id:req.params.id})
          .then(client=>{
              res.send(client);
          })
  });

  //delete User
  router.delete("/deleteUser/:id", (req, res)=>{
      User.deleteOne({_id:req.params.id})
          .then(user=>{
              res.send(user);
              console.log(`deleted ${req.params.id}`);
          })
  });


module.exports = router;