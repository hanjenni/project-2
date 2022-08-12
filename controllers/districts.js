const District = require('../models/district');

module.exports = {
    new: newDistrict
}

function newDistrict(req, res){
    res.render('districts/new.ejs')
}