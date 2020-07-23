const express=require ('express')
const router=express.Router()

const PackingSpot=require('../models/parkingspot')


//Get all Parking Spots availlable
router.get('/',async(req,res)=>{
    try {
        const packingspots=await PackingSpot.find()
        res.json(packingspots)
    }catch {
        res.send('Error :'+err)
    }
})

//Add New Parking Spot
router.post ('/',async(req,res)=>{
    const packing_spot = new PackingSpot ({
        spot_name:req.body.spot_name,
        parking_lot:req.body.parking_lot,
        access_type:req.body.access_type,
        cost:req.body.cost,
        availability:req.body.availability        
    })  
    try {
        const a1=await packing_spot.save()
        res.json(a1)
    }catch (err) {
       res.send('Error : '+err)
    }
}) 

//Update the number of parking lots
router.patch('/:id',async(req,res)=>{
    try {
        const parkingspot=await PackingSpot.findById(req.params.id)
        parkingspot.access_status=req.body.access_status
        parkingspot.checkin_time=Date.now()
        const a1=await parkingspot.save()
        res.json(a1)
    }catch {
        res.send('Error :'+err)
    }
})

module.exports=router

