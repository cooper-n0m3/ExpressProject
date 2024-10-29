import { body, validationResult } from "express-validator";
import { NewsModel } from "../models/newsModel.js";

export const adminAdNews=(req,res)=>{
    res.render('Admin/news-add')
}
// export const adminDashboard=(req,res)=>{
//     res.render('Admin/partitions/dashboard')
// }
export const adminView=async(req,res)=>{
    return res.render('Admin/news-view');
    // try {
    //     const news = await NewsModel.findAll({
    //         limit:6,
    //         order:[['id','DESC']]
    //     });
    //     return res.render('Admin/news-view', { news,status:{title:req.flash('title'),description:req.flash('description')} });
    // } catch (err) {
    //     return res.redirect('/Admin/viewNews');
    // }
}
export const adminUploard= async(req,res)=>{
    const err = validationResult(req);
    const rsRes = req.body
    if(!req.files || !req.files['thumbnail'] || !req.files['banner']){
        if( !req.files['thumbnail'] ||req.files['thumbnail'].length===0){
            err['errors'].push({
                msg: "Thumbnail is required.",
                path: 'thumbnail',
            });
        }
        if( !req.files['banner'] ||req.files['banner'].length===0){
            err['errors'].push({
                msg: "Banner is required.",
                path: 'banner',
            });
        }
        return res.render('Admin/news-add',{error:err['errors'],rsRes,status: { title: 'Error', description: 'Fields required.' }})
    }
    if(!err.isEmpty()){
       return res.render('Admin/news-add',{error:err['errors'],rsRes,status: { title: 'Error', description: 'Fields required.' }})
    }
    const thumbnail = req.files['thumbnail'][0]['filename'];
    const banner = req.files['banner'][0]['filename'];
    const {title,type,category,description} = req.body;
    try {
        await NewsModel.create({
            title,
            userId:1,
            type,
            category,
            banner,
            description,
            thumbnail
        });
        return res.render('Admin/news-add', { status: { title: 'Success', description: 'News added successfully.' } });
    } catch (err) {
        console.log('Cannot insert data', err);
        return res.render('Admin/news-add', { error: [{ msg: 'Cannot insert data' }], rsRes });
    }
}
// export const DeleteNews = async (req, res) => {
//     const id = req.params.id;

//     try {
//         // Find the news item by primary key
//         const news = await NewsModel.findByPk(id);

//         // Check if the news item exists
//         if (news === null) {
//             return res.status(404).json({ msg: 'News item not found' });
//         }

//         // Delete the news item
//         await news.destroy();


//         // Redirect to the view news page
//         return res.status(200).json({
//             status:200,
//             msg:'OK'
//         });
        
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ msg: 'Error deleting news item', error: error.message });
//     }
// };