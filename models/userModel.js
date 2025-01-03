import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true,
    },
    address:{
        type: 'string',
        required: true,
    }
    

})
export default mongoose.model('user', userSchema);
