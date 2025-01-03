import user from '../models/userModel.js';

export const create = async(req,res) =>{
    try{
        let userData = new user(req.body);
        const {email} = userData;
        const userExists = await user.findOne({email})
        if(userExists){
            return res.status(400).json({message: "User already exists"});
        }
        await userData.save();
        res.status(200).json({userData});
        
    }
    catch(error){
        res.status(400).json({error: "Internal Server Error"});
    }
}

export const fetch = async(req, res) => {
    try{
        const users = await user.find();
        if(users.length == 0){
            return res.status(400).json({message:"No users found"});
        }
        res.status(200).json({users});
    }
    catch(error){
        res.status(400).json({error: "Internal Server Error"});
    }
}

export const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExists = await user.findOne({_id:id})
        if(!userExists){
            return res.status(400).json({message: "No User found"});
        }
        const updateUser = await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateUser});
    }
    catch(error){
        res.status(400).json({error: "Internal Server Error"});
    }
}

export const Delete = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExists = await user.findOne({_id:id})
        if(!userExists){
            return res.status(400).json({message: "No User found"});
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:"user successfully deleted"});
    }
    catch(error){
        res.status(400).json({error:"Internal Server Error"});
    }
} 

export const FindUser = async(req,res) =>{
    try{
        const id = req.params.id;
        const userExists = await user.findOne({_id:id})
        if(!userExists){
            return res.status(400).json({message: "No User found"});
        }
        res.status(200).json({userExists});
    }
    catch(error){
        res.status(400).json({error:"Internal Server Error"});
    }
}