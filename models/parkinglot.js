const mongoose=require ('mongoose')

const packingLotSchema =new mongoose.Schema ({
    name: {
        type:String,
        required:true
    },
    initial: {
        type:String,
        required:true
    },
    total_spots : {
        type: Number,
        required:true
    },
    created_at : {
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('PackingLot',packingLotSchema)