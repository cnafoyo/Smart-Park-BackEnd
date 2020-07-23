const mongoose=require ('mongoose')

const packingSpotSchema =new mongoose.Schema ({
    spot_name: {
        type:String,
        required:true
    },
    parking_lot: {
        type:String,
        required:true
    },
    access_type: {
        type:String,
        required:true
    },
    cost : {
        type: Number,
        required:true
    },
    availability: {
        type:String,
        required:true,
        default:"Yes"
    },
    created_at : {
        type:Date,
        default:Date.now()
    },
    checkin_time : {
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('PackingSpot',packingSpotSchema)