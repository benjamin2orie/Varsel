
import express from "express";
import User from "../Model/userModel.js";

const router = express.Router();

router.post('/create', async(req, res) =>{
    const {name, email, password} = req.body
    try{
        const newUser = await User.create({
            name,
            email,
            password
        });
        res.status(201).json(newUser);
        console.log(newUser);
        
    }catch(err){
        res.status(500).json({message: "Something went wrong"});
        console.log('Error occured', err);
    }
});

export default router;