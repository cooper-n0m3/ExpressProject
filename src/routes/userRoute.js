import { Router } from "express";
import { login,userLogin,userRegister,register } from "../controller/userController.js";
import { userRegisterValidation,userLoginValidation } from "../middleware/userValidation.js";
// import passport from "passport";
// import authPassport from '../../config/auth-passport.js';
// import { roleValidation } from "../middleware/userRoleValidation.js";

const userRoute = Router();

userRoute.get('/login',userLogin);
userRoute.get('/register',userRegister);
userRoute.post('/login',userLoginValidation,login);
userRoute.post('/register',userRegisterValidation,register);

// userRoute.get('/google',passport.authenticate('google',{scope:['profile email']}));

// userRoute.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
//     res.json({
//         profile:req.user
//     })
// })
// // userRoute.get('/logout', (req, res) => {
// //       res.redirect('https://accounts.google.com/Logout'); // This will log the user out of Google
// //   });
// userRoute.get('/logout',(req,res)=>{
//     res.clearCookie('token');
//     res.redirect('login')
// })
export default userRoute;