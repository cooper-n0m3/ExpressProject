import {Router} from 'express'
import {adminView,adminAdNews,adminUploard} from '../controller/adminControllers.js'
import { upload } from '../middleware/uploadFile.js';
// import { adminAdNews,DeleteNews,adminView,adminUploard } from '../controller/adminControllers.js';
// import { name } from 'ejs';
import { adminValidation } from '../middleware/adminValidation.js';
// import { authenticationToken } from '../middleware/tokenAuthentication.js';
// import { roleValidation } from '../middleware/userRoleValidation.js';


const adminRouter = Router();
adminRouter.get('/viewNews',adminView);
// adminRouter.use(roleValidation(['admin']));
adminRouter.get('/',(req,res)=>{
    res.render('Admin/partitions/dashboard')
});
adminRouter.get('/addNews',adminAdNews);
adminRouter.post('/addNews',upload.fields([{name:'thumbnail',maxCount:1},{name:'banner',maxCount:1}]),adminValidation,adminUploard)
// adminRouter.get('/delete/:id',DeleteNews)

export default adminRouter;