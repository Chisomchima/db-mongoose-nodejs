const router = require('express').Router();
const Product = require('../models/Products');
const { verifyToken, verifyTokenAuthourisation, verifyTokenAndAdmin } = require("./verifyToken");

//create

router.post("/",  verifyTokenAndAdmin, async (req,res)=>{
    const newProduct =new Product(req.body);
   
    try{
       const savedProduct = await newProduct.save();
       res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err);
    }
});


//update
router.put("/:id", verifyTokenAndAdmin, async (req,res)=>{
    
    try{
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
        {
            $set: req.body
        },
            {new:true}
        );
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err);
    }
});

//delete

router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
    
    try{
        await Product.findByIdAnddelete(req.params.id) 
        res.status(200).json("product has been deleted...")
    }catch(err){
        res.status(500).json(err);
    }
});

//get product

router.get("/find/:id",  async (req,res)=>{
    
    try{
       const product = await Product.findById(req.params.id); 
       res.status(201).json(product);
    }catch(err){
        res.status(500).json(err);
    }
});

//get all product

router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try{
        let products;
        if(queryNew){
            products = await product.find().sort({ createdAt: -1 }).limit(5)
        }else if (queryCategory){
            products = await product.find({
                categories:{
                    $in: [queryCategory],
                },
            });
        }else{
            products = await product.find();
        }
           res.status(201).json(users);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router ;