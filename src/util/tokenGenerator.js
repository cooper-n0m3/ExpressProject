import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config();

export const tokenGenerator=(email,password)=>{
    const token = jwt.sign(
        {email,password},
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_EXPIRE
        }
    );
    return token;
}