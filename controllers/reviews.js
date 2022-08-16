const District = require('../models/district');

module.exports = {
    create,

}

function create(req, res){
    console.log(req.params.id, '<-params district id')
    console.log(req.body, '<-content of review')
    District.findById(req.params.id, function(err, districtDocuments){
        //console.log(districtDocuments, '<-create district doc')
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar

        districtDocuments.reviews.push(req.body);
        districtDocuments.save(function(err){
            res.redirect(`/districts/${req.params.id}`)
        })
      
    })
    
}