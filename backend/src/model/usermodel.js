const moongose=require('mongoose')
const validator = require('validator')

const userSchema = new moongose.Schema({
    name :{
        type : String,
        trim : true,
        lowercase : true
     
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please enter valid email")
            }
        }
    },
    age: {
        type : Number
    },

    occupation : {
        type : String,
        required : true
    },

    password : {
        type :String,
        required : true
    },

})

const User =  moongose.model('User',userSchema)

module.exports=User