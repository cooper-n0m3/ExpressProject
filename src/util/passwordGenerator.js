import bcrypt from 'bcryptjs'
import { config } from 'dotenv'
config()
export const passwordHash=async(password)=>{
    const randomSalt =await bcrypt.genSalt(parseInt(process.env.Salt_RoundNumber));
    const hashPassword =await bcrypt.hash(password,randomSalt);
    return hashPassword;
}
