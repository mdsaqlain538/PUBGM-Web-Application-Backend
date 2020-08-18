const Category = require('../models/category');

exports.getCategoryById= (req,res,next,id) =>{
    Category.findById(id).exec((err,cat)=>{
        if(err){
            return res.status(400).json({
                error:'Category not found in db..'
            })
        }
        req.category = cat ;
        next();
    });
};

exports.createCategory = (req,res) =>{
    const category = new Category(req.body);
    category.save((err,cat)=>{
        if(err){
            return res.status(400).json({
                error:'Not Able to create Category.'
            })
        }
        res.json(category);
    });
};

exports.getCategory = (req,res)=>{
    return res.json(req.category);
}

exports.getAllCategory = (req,res) =>{
    Category.find().exec((err,item)=>{
        if(err){
            return res.status(400).json({
                error:'Not items found..'
            })
        }
        res.json(item);
    })
}

exports.UpdateCategory = (req,res) =>{
    const category = req.category;
    category.name = req.body.name;

    category.save((err,updatedCategory)=>{
        if(err){
            return res.status(400).json({
                error:'Failed to update..'
            })
        }
        res.json(updatedCategory);
    });
};


exports.removeCategory = (req,res) =>{
    const category = req.category;

    category.remove((err,cat)=>{
        if(err){
            return res.status(400).json({
                error:'Failed to delete this Category.'
            })
        }
        res.json({
            message:`${category} is sucessfully deleted.`
        })
    });
};