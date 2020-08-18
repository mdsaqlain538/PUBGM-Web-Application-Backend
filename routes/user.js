const express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const {getUserById,getUser,getAllUsers,UpdateUser,UserPurchasedList} = require('../controllers/user');
const {isAuthenticated,isSignedIn,isAdmin} = require('../controllers/auth');

router.param("userId",getUserById);
router.get('/user/:userId',isSignedIn,isAuthenticated,getUser);
router.get('/users',getAllUsers);
router.put('/user/:userId',isSignedIn,isAuthenticated,UpdateUser);
router.get('/orders/user/:userId',isSignedIn,isAuthenticated,UserPurchasedList);

module.exports = router;