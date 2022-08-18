const District = require('../models/district');

module.exports = {
  create,
  delete: deletePost,
  edit,
}

async function edit(req, res) {
  console.log(req.body, '<-edits')
  const districtDoc = await District.findById(req.params.districtId)
  console.log(districtDoc, '<-district doc')
  const review = districtDoc.reviews.id(req.params.reviewId)
  console.log(review)
  review.content = req.body.content;
  review.comRating = req.body.comRating;
  review.adminRating = req.body.adminRating;
  review.workRating = req.body.workRating;
  districtDoc.save(function (err) {
    res.redirect(`/districts/${districtDoc._id}`)
  })

}


function deletePost(req, res, next) {
  District.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id }).then(function (districtInfo) {
    if (!districtInfo) return res.redirect('/districts');
    districtInfo.reviews.remove(req.params.id);
    districtInfo.save().then(function () {
      res.redirect(`/districts/${districtInfo._id}`);
    }).catch(function (err) {
      return next(err);
    });
  });
}


function create(req, res) {
  console.log(req.params.id, '<-params district id')
  console.log(req.body, '<-content of review')
  District.findById(req.params.id, function (err, districtDocuments) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    districtDocuments.reviews.push(req.body);
    districtDocuments.save(function (err) {
      res.redirect(`/districts/${req.params.id}`)
    })

  })

}