import { Router } from "express";
const homePageRouter = Router();
homePageRouter.get('/News',(req,res)=>{
    res.redirect('index')
})
export default homePageRouter;