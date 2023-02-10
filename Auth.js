const express = require("express") 
const axios = require("axios")
const cors =require("cors") 
const mysql = require('mysql')

const app = express()
app.listen(3000,()=>console.log("Server running on port 3000..."))

app.use(cors())
app.use(express.json())

const db = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "jakaroko",
        database: "qanda"
    })

    db.connect(function(err) {
        if (err) throw err;
        console.log('Connected to the database');
      });


app.get("/",(req, res)=>{
res.send("HELLO")

})

app.post("/register",(req, res)=>{
const fullname = req.body.fullname
const email =req.body.email
const password = req.body.password

console.log(req.body)
const command =`
INSERT INTO qanda.users (fullname, email, password) VALUES ('${fullname}', '${email}', '${password}');
`;

 db.query(command)
})


