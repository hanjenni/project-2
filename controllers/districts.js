//const district = require('../models/district');
const district = require('../models/district');
const District = require('../models/district');

module.exports = {
    new: newDistrict,
    create,
    index,
    show
}

function show(req, res) {
    District.findById(req.params.id, function(err, districtInfo) {
        res.render('districts/show.ejs', {title: 'District Details', districtInfo})
        console.log(districtInfo, '<-show all')
    });
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
            
        }
        res.redirect('/districts');
        console.log(districtDocuments, '<-added to db')
    });

}
