import passport,{Passport} from "passport";
import { Strategy as FacebookStragtegy } from "passport-facebook";
import { Strategy as GoogleStragtegy } from "passport-google-oauth20";
import expressSession from 'express-session'


const GoogleClientId = process.env.GOOGLE_CLIENT_ID;
const GoogleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const FacebookClientId = process.env.FACEBOOK_CLIENT_ID;
const FacebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET;

passport.use(new GoogleStragtegy({
    clientID:GoogleClientId,
    clientSecret:GoogleClientSecret,
    callbackURL: '/google'
},(accessToken,refreshToken,profile,callback)=>{
    callback(null,profile)
}
))
passport.serializeUser((user,callback)=>{
    callback(null,user);
});
passport.deserializeUser((user,callback)=>{
    callback(null,user);
})