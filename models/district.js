const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
    districtName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
   
})

module.exports = mongoose.model("District", districtSchema);