const mongoose=require('mongoose')
const uri = "mongodb://127.0.0.1:27017/user-crud-app"

const connectDB = async ()=>{
    try{
      await mongoose.connect(uri)
      console.log("connected...")  
    }catch(e){
        console.log(e)
    }
}

module.exports = connectDB 