import mongoose, { mongo } from "mongoose";

//Modelling the Schema
const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:false,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comments',
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
},
{
    timestamps:true,
})

//Takes two parameters the name of the model & the schema
export const Post = mongoose.model('Post',PostSchema)