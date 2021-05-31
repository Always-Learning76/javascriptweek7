 let express = require('express');
 let app = express();
 const bcrypt = require('bcrypt')
const pass = "ReskillAmericans123"

 let hash 
 app.use(express.json())


 bcrypt.hash(pass, 10, (error, result) => {
     if(error) 
     {console.log(error) } else {
         hash = result
     }
 })

 app.post('/findpassword', (req, res) => {
     let password = req.body.password;
     if(!password) {
         res.status(400).json({message: "input correct password"})
     } else {
         bcrypt.compare(password, hash, (error, result) => {
             if(error) {
                 res.status(400).json({message: error})
             } else {
                 res.json({result})
             }
         })
     }
 })





 

port = 5002

app.listen(port, () => {
console.log("im listening sir")
})


