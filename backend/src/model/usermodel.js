const moongose=require('mongoose')
const validator = require('validator')

const userSchema = new moongose.Schema({
    userName :{
        type : String,
        trim : true,
        lowercase : true,
        required: true
     
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
        required : false,
        default : "No Occupation"
    },

    password : {
        type :String,
        required : true
    },

})

const User =  moongose.model('User',userSchema)

module.exports=User