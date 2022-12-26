import mongoose, { Schema } from "mongoose";
const authSchema= new Schema({
    name:String,
    email:String,
    picture:String,
    password:String,
    verified: {
        type: Boolean,
        default: false
    }
})
const UserAccount=mongoose.model("UserAccount",authSchema);
export default UserAccount;