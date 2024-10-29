import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
config()
export const authenticationToken =(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        req.flash('title','Error');
        req.flash('description','Unauthorization.');
        return res.redirect('/auth/login');
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(403).json({ msg: 'Forbidden' });
        }
        next();
    });
}