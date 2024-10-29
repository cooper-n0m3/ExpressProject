import express from 'express'
import { config } from 'dotenv';
import session from 'express-session';
import flash from 'connect-flash';
import adminRouter from './src/routes/adminRouter.js';
import userRoute from './src/routes/userRoute.js';



config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine','ejs')

// // Flash messages
// app.use(flash());
app.use('/Admin',adminRouter);
app.use('/Auth',userRoute)
app.listen(port,()=>{
    console.log(`Server's running on http://localhost:${port}`);
})




