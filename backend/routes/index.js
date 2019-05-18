const express = require('express');
const router = express.Router();
const User = require('../models/User')
const passport = require('../handlers/passport')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, infoErr) => {
    if (err) return res.status(500).json({ err, infoErr })
    if (!user) return res.status(401).json({ msg: "This user doesn't exist" })
    req.logIn(user, err => {
      if (err) return res.status(500).json(err)
      res.status(200).json(user)
    })
  })(req, res, next)
})

router.get('/private', isLogged, (req, res, next) => {
  res.status(200).json({ msg: 'Estas dentro' })
})

function isLogged(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).json({ msg: "You're not logged" })
  next()
}


router.get('/auth/logout', (req, res, next) => {
  req.logout();
  res.status(401).json({ msg: 'OK'})
})



module.exports = router;
