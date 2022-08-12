const district = require('../models/district');
const District = require('../models/district');

module.exports = {
    new: newDistrict,
    create,
}

function newDistrict(req, res){
    res.render('districts/new.ejs')
}

function create(req, res) {
    console.log(req.body, '<-new district')
    District.create(req.body, function(err, districtDocuments) {
        if(err) {
            console.log(err, '<-err in create controller');
            return res.render('districts/new.ejs');
        }
    })
}
