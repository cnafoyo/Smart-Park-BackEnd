const express=require ('express')
const router=express.Router()

const PackingLot=require('../models/parkinglot')


//Get all Parking Lots
router.get('/',async(req,res)=>{
    try {
        const packinglots=await PackingLot.find()
        res.json(packinglots)
    }catch {
        res.send('Error :'+err)
    }
})

//Add New Parking Lot
router.post ('/',async(req,res)=>{
    const packing_lot = new PackingLot ({
        name:req.body.name,
        initial:req.body.initial,
        total_spots:req.body.total_spots,
        created_at:req.body.created_at
    })  
    try {
        const a1=await packing_lot.save()
        res.json(a1)
    }catch (err) {
       res.send('Error : '+err)
    }
}) 

//Update the number of parking lots
router.patch('/:id',async(req,res)=>{
    try {
        const parkinglot=await PackingLot.findById(req.params.id)
        parkinglot.total_spots=req.body.total_spots
        parkinglot.created_at=Date.now()
        const a1=await parkinglot.save()
        res.json(a1)
    }catch {
        res.send('Error :'+err)
    }
})

module.exports=router

