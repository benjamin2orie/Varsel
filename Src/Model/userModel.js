
import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "user name is required"]
    },
    email:{
        type: String,
        maxLength: 30,
        unique: true,
        required: [true, "email is required"]

    },
    password: String

});
const User = mongoose.model("User", userSchema)
export default User;