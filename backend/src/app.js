const express = require('express')
const app = express();

app.get('/user',(req,res)=>{
    res.json({
        name:"Prajwal",
        age:34,
        occupation : "Software Engg",
        email : "patilprajwal982@gmail.com"
    })
})