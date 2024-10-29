import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'public/uploads/')
    },
    filename: (req,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix+'-'+file.originalname);
    }
})
export const upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        const validMimes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!validMimes.includes(file.mimetype)) {
            return cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'), false);
        }
        cb(null, true);
    }
});
