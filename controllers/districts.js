//const district = require('../models/district');
const District = require('../models/district');

module.exports = {
    new: newDistrict,
    create,
    index
}

function index(req, res){
    res.render('schools.ejs')
}

function newDistrict(req, res){
    res.render('districts/new.ejs')
}

function create(req, res) {
    console.log(req.body, '<-new district')
    District.create(req.body, function(err, districtDocuments) {
        if(err) {
            console.log(err, '<-err in create controller');
            return res.redirect('/');
        }
        console.log(districtDocuments, '<-added to db')
    })

}
