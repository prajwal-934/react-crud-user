const express = require('express')
const app = express();
const conn = require('./database/mongoose')
const userRouter = require('./router/userrouter')
conn()

app.use(express.json())
app.use(userRouter)


app.listen(8080,()=>{
    console.log("Sever is running...")
})
