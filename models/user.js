import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    _id:{ type : String, requires:true},
    name:{ type : String, requires:true},
    email:{ type : String, requires:true, unique:true},
    imageUrl: { type : String, requires:true},
    cartItems:{type: Object, default:{}}
},{minimize:false})

const User = mongoose.model.user || mongoose.model('user',userSchema)

export default User;