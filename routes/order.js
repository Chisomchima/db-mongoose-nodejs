const router = require('express').Router();
const Order = require('../models/Order');
const { verifyToken, verifyTokenAuthourisation, verifyTokenAndAdmin } = require("./verifyToken");

//create

router.post("/",  verifyToken, async (req,res)=>{
    const newOrder =new Order(req.body);
   
    try{
       const savedOrder = await newOrder.save();
       res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});


//update
router.put("/:id", verifyTokenAndAdmin, async (req,res)=>{
    
    try{
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, 
        {
            $set: req.body
        },
            {new:true}
        );
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

//delete

router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
    
    try{
        await Order.findByIdAnddelete(req.params.id) 
        res.status(200).json("Order has been deleted...")
    }catch(err){
        res.status(500).json(err);
    }
});

//get user order

router.get("/find/:userid", verifyTokenAuthourisation, async (req,res)=>{
    
    try{
       const oreders = await Cart.findOne({userid: req.params.userid}); 
       res.status(201).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

//get all orders

router.get("/", verifyTokenAndAdmin, async (req,res)=>{
   
    try{
        let orders = await Order.find();
           res.status(201).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

//get user stats

router.get("/stats", verifyTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastYear =new Date(date.setFullYear(date.getFullYear() -1 ));
    try{
       
        const data = await User.aggregate([
            {$math: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: {$month: "$createdAt" },
                },
            },
            
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1},
                }
            }
           
        ]);
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
});

//get monthly income

router.get("/income", verifyTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastMonth =new Date(date.setMonth(date.getFMonth() -1 ));
    const previousMonth =new Date(new Date().setMonth(lastMonth.getMonth() -1 ));
    try{
       
        const income = await Order.aggregate([
            {$match: {createdAt: {$gte: previousMonth}}},
            {
                $project: {
                    month: {$month: "$createdAt" },
                    sales: "$ammount",
                },
            },
            
            {
                $group: {
                    _id: "$month",
                    total: {$sum: $sales},
                }
            }
           
        ]);
        res.status(200).json(income);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router ;