//const district = require('../models/district');
const district = require('../models/district');
const District = require('../models/district');

module.exports = {
    new: newDistrict,
    create,
    index
}

function index(req, res){
    District.find({}, function(err, districtDocuments){
        console.log(districtDocuments, '<-all districts')
        if (err){
            res.send('error finding the districts')
        }
        res.render('districts/index.ejs', {
            districts: districtDocuments
        });
    });
    
    
}

function newDistrict(req, res){
    res.render('districts/new.ejs')
}

function create(req, res) {
    console.log(req.body, '<-new district')
    District.create(req.body, function(err, districtDocuments) {
        if(err) {
            console.log(err, '<-err in create controller');
            return res.render('/districts/index.ejs');
        }
        console.log(districtDocuments, '<-added to db')
    })

}
