const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    content: String,
    comRating: {
        type: Number, min: 1, max: 5
    },
    adminRating: {
        type: Number, min: 1, max: 5
    },
    workRating: {
        type: Number, min: 1, max: 5
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
        userName: String,
        userAvatar: String
},
{
    timestamps: true,
}
);


const districtSchema = new mongoose.Schema({
    
    districtName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema]
   
})

module.exports = mongoose.model("District", districtSchema);