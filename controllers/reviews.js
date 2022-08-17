const District = require('../models/district');

module.exports = {
    create,
    delete: deletePost,
    edit,
    update

}

async function update(req, res){
  try {
    const updateComment = await District.findByIdAndUpdate(req.params.id, req.body)
    console.log(req.params.id, '<-update')
    res.redirect(('districts/edit.ejs', {districtInfo}))
  }catch (err) {
    res.send(err)
  }
}


function edit(req, res) {
    District.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(districtInfo) {
      console.log(districtInfo, '<-edit')
        if (!districtInfo) return res.redirect('/districts');
        districtInfo.save(function(err){
        res.render('districts/edit.ejs', {districtInfo});
    })
    })

  }


function deletePost(req, res, next) {
    District.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(districtInfo) {
      if (!districtInfo) return res.redirect('/districts');
      districtInfo.reviews.remove(req.params.id);
      districtInfo.save().then(function() {
        res.redirect(`/districts/${districtInfo._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }
  



function create(req, res){
    console.log(req.params.id, '<-params district id')
    console.log(req.body, '<-content of review')
    District.findById(req.params.id, function(err, districtDocuments){
        //console.log(districtDocuments, '<-create district doc')
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        districtDocuments.reviews.push(req.body);
        districtDocuments.save(function(err){
            res.redirect(`/districts/${req.params.id}`)
        })
      
    })
    
}