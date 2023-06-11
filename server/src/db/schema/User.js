import mongoose, { mongo } from "mongoose";

//Modelling the Schema
const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        required:false,
    },
    phone:{
        type:String,
        required:false,
    },
    role:{
        type:Number,
        default: 0,
        /*
            0-User
            1-Moderator
            2-Admin
        */
    },
    disabled:{
        type:Boolean,
        default:false,
    },
    lastLogin:{
        type:Date,
        required:false,
    },
    followers:[{
        //Types of ID that MongoDB generates
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    following:[{
        //Types of ID that MongoDB generates
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    posts:[{
        //Types of ID that MongoDB generates
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
    }],
    comments:[{
        //Types of ID that MongoDB generates
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comments',
    }],
},
{
    timestamps:true,
})

//Virtual fields eg Fullname
UserSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

//Takes two parameters the name of the model & the schema
export const User = mongoose.model('User',UserSchema)

