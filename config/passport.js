const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
//Require your User Model here!

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    console.log(profile, '<-google profile')
    const user = await User.findOne({googleId: profile.id});
    if(user) return cb(null, user);
    try {
      const newUser = await User.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value, // <- this give us the email
        avatar: profile.photos[0].value //< - the hosted image string/link
      })
      // pass the newUser document to passport!
      return cb(null, newUser)

    } catch(err){
      // cb(error, dataThatYouWantToPassToPassport)
      return cb(err)
    }

  }
));

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
passport.serializeUser(function(user, cb){
	done(null, user.id); // <- storing in our session cookie the logged in users id
})

passport.deserializeUser(function(userId, done){
	User.findById(userId, function(err, userDocument){
		done(err, userDocument);  // <- this assins the userDocument to req.user = userDocument
	})
})
//   // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
//   // When you call this done function passport assigns the user document to req.user, which will 
//   // be availible in every Single controller function, so you always know the logged in user

// });



