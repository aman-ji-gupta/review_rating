
const companySchema = require("../model/companySchema");
const company = require("../model/companySchema");
const reviewSchema=require("../model/companyReviewSchema")


const createCompany = async (req, res) => {
    let {company_Name} = req.body;
    let company_data = new companySchema(req.body);
    console.log(company_data.companyName);
    let companyExists = company.findOne({companyName:company_Name})
   
    if(companyExists){
        return res.status(400).json({
            "status":400,
            "message": "Company already registered..!"
        })
    }

    try {
        const filePath = `/uploads/${req.file.filename}`;
        company_data.company_logo = filePath;
        const addCompany = await company_data.save();
        res.send({
            status : 200,
            message : "company registered successfully..!"
        })
    } catch (error) {
        res.send({
            status : 400,
            message : "company registrstion failed..!"
        })
    }
}
const companyList = async(req,res)=>{
  try{
    const count =  await companySchema.find().countDocuments();
    const company = await companySchema.find({},{companyName:1,founded_on:1,company_logo:1,_id:0,company_logo:1})
    res.json({count,company})

}catch(err){
    res.json({
        "Error":err.message
    })
}
}

const addReview = async (req, res)=>{
    let review_data = new reviewSchema(req.body);
    try{
        const addReview = await review_data.save();
        res.json({
            status : 200,
            Message : "review added successfully...!"
        })
    }catch(error){
        res.json({
            status : 0,
            Error : error.message
        })
    }
}

const companyReviewDetails = async (req,res)=> {
   try{

    let id = req.params.id;
    console.log("api company id: ", id);
    let company = await companySchema.findById(id).lean();
    let comments = await reviewSchema.find({"companyId":`${id}`})
    .populate({
        path : 'userId' , select : 'name profilepic'
    })
    .populate({
        path:'companyId' , select : '_id'
    })
    console.log("reviews: ",comments);
    res.json({
        company , comments
     })
    }catch(error){
        res.json({
            status:0,
            message : error.message
        })
}
    
}

module.exports = {
    createCompany,companyList,addReview,companyReviewDetails
}
