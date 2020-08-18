const express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout,signup,signin,isSignedIn} = require('../controllers/auth');

router.post('/signup',[
    check('name','Name must be atleast 3 char.').isLength({min:3}),
    check('email','Mail is Required.').isEmail(),
    check('password','Password must be atleast 3 char.').isLength({min:3})
],signup);

router.post('/signin',[
    check('email','Mail is Required.').isEmail(),
    check('password','Password Field is Required.').isLength({min:3})
],signin);

router.get('/signout',signout);

router.get('/testroute',isSignedIn,(req,res)=>{
    res.json(req.auth);
});

module.exports = router;