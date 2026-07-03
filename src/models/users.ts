import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    profilePicture:{
        type:String
    },

    role:{
        type:String,
        enum:["USER","ADMIN","SUPER_ADMIN"],
        default:"USER"
    },

    isVerified:{
        type:Boolean,
        default:false
    },

    verificationToken:String,

    resetPasswordToken:String,

    refreshToken:String

},{
    timestamps:true
});

export default mongoose.model("User",userSchema);