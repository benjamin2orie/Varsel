
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import User from "./Model/userModel.js";



const db = process.env.DB_URL

export const connectDb = async() =>{
    try{
        await mongoose.connect(db);
        console.log('Db connected successfully')
    }catch(err){
        console.log('Unable to connect to connect to DB',err);
    };
};


const create = async() =>{
    try{
        await User.create({
            name:"Ben",
            email: "ben@jamil.com",
            password: "1234"
        })
        console.log('user created')
    }catch(err){
        console.log('Unable to create a user', err)
    };
};
// create();

