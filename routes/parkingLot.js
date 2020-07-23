const express=require ('express')
const router=express.Router()

const PackingLot=require('../models/parkinglot')

router.get('/',async(req,res)=>{
    try {
        const packinglots=await PackingLot.find()
        res.json(packinglots)
    }catch {
        res.send('Error :'+err)
    }
})

router.post ('/',async(req,res)=>{
    const packing_lot = new PackingLot ({
        name:req.body.name,
        total_spots:req.body.total_spots
    })  
    try {
        const a1=await packing_lot.save()
        res.json(a1)
    }catch (err) {
       res.send('Error : '+err)
    }
}) 

module.exports=router

