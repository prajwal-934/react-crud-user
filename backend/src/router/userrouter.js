const express = require("express")
const User = require("../model/usermodel")
const router = new express.Router()

router.post('/user', async (req,res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e._message)
    }
})


router.get('/user/:id',async (req,res)=>{
    try{
        const _id = req.params.id
        const user = await User.findById(_id)  
        if(!user){
            return res.status(400).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e._message)
    }
})


router.get('/user',async (req,res)=>{
    try{
        
        const users = await User.find({}) 
        if(!users){
            return res.status(400).send()
        }
        res.status(200).send(users)
    }catch(e){
        res.status(500).send(e._message)
    }
})


router.patch('/user/:id',async (req,res)=>{
    const _id = req.params.id;
    const updates = Object.keys(req.body)
    const allowdFieldsToUpdate = ["userName","age","occupation","email","password"]
    const isAllowed=updates.every((update)=>allowdFieldsToUpdate.includes(update))
    if(!isAllowed){
        res.status(400).send("Invalid Updates!!!")
    }
    try{     
        const user = await User.findById(_id)
        updates.forEach((fields)=>{
            user[fields]=req.body[fields]
        })
        await user.save()

        if(!user){
            return res.status(400).send()
        }
        res.send(user)
    }catch(e){
        console.log(e)
        res.status(500).send(e._message)
    }
})


router.delete('/user/:id',async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(400).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e._message)
    }
})


module.exports=router