
import { body, validationResult } from "express-validator";
import validator from "validator";
import { tokenGenerator } from "../util/tokenGenerator.js";
import { UserModel } from "../models/userModel.js";
// import { TokenModel } from "../models/tokenModel.js";
// import { modelTesting } from "../models/modelTesting.js";
import { passwordHash } from "../util/passwordGenerator.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { title } from "process";
export const userLogin=(req,res)=>{
    res.render('loginForm');
}
export const login=async(req,res)=>{
    const err = validationResult(req);
    const rsRes = req.body
    if(!err.isEmpty()){
        if(!validator.isEmail(rsRes.email)){
            err['errors'].push({
                msg: "Please enter a valid email address.",
                path: 'email',
            });
        }
       return res.render('loginForm',{error:err['errors'],rsRes})
    }
    if(!validator.isEmail(rsRes.email)){
        err['errors'].push({
            msg: "Please enter a valid email address.",
            path: 'email',
        });
        return res.render('loginForm',{error:err['errors'],rsRes})
    }
    const {email,password} = req.body;
    const expiresAt = new Date(Date.now()+(86400*30));
    try{
        const user = await UserModel.findOne({where:{email}});
        if(user == null){
            // req.flash('title','Error')
            // req.flash('description',"Account doesn't exist!");
            return res.status(400).redirect('login');
        }
        if(!user){
            return res.status(401).json({
                msg:'Invalid credentials'
            });
        }
        const isMatch = await bcrypt.compare(password,user.passwordHash);
        if(!isMatch){
            return res.status(401).json({
                status:401,
                msg:'Invalid credentials'
            })
        }
        const token = tokenGenerator(email,password);
        res.cookie('token',token,{
            httpOnly:true,
            secure:false
        });
        req.session.user ={
            id:user.id,
            username:user.username,
            email:user.email,
            role:user.role
        }
        res.redirect('/Admin');
    }catch(err){
        return res.status(500).json({
            status:500,
            msg: 'Internal server error'
        });
    }
}
export const userRegister=(req,res)=>{
    res.render('registerForm');
}
export const register=async(req,res)=>{
    const err = validationResult(req);
    const rsRes = req.body
    
    if(!err.isEmpty()){
       return res.render('registerForm',{error:err['errors'],rsRes})
    }
     if(rsRes.password !== rsRes.confirmPassword){
        err['errors'].push({
            msg: "Confirm Password is doesn't match with password try again.",
            path: 'confirmPassword',
        });
        return res.render('registerForm',{error:err['errors'],rsRes})
    }
    if(!validator.isEmail(rsRes.email)){
        err['errors'].push({
            msg: "Please enter a valid email address.",
            path: 'email',
        });
        return res.render('registerForm',{error:err['errors'],rsRes})
    }
    const token = tokenGenerator(rsRes.username,rsRes.password)
    
    const {username,email,password} = req.body;
    const hashPassword = await passwordHash(password);

    const expiresAt = new Date(Date.now()+(86400*30));
    const user = UserModel.create({
        'username':username,
        'email':email,
        'passwordHash':hashPassword,
        'role':'admin'
    });

    user.then(()=>{
        return res.redirect('login');
   }).catch((err)=>{
       console.log('Failed to insert data'); 
       err['errors'].push({
           msg: "Email already register please use the new one!",
           path: 'email',
       });
       return res.render('registerForm',{error:err['errors'],rsRes})
   });
}

