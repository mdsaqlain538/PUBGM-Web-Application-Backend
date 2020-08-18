const express = require('express');
const router = express.Router();

//create
const {getCategoryById,
    createCategory,
    getCategory,
    getAllCategory,
    UpdateCategory,
    removeCategory} = require('../controllers/category');
const {isAdmin,isAuthenticated,isSignedIn} = require('../controllers/auth');
const {getUserById} = require('../controllers/user');

//params
router.param("userId",getUserById);
router.param("categoryId",getCategoryById);

//Actual Routes
router.post('/category/create/:userId',
    isSignedIn,
    isAuthenticated,
    isAdmin,
    createCategory
);

//read
router.get('/category/:categoryId',getCategory);
router.get('/categories',getAllCategory);

//uodate
router.put('/category/:categoryId/:userId',
    isSignedIn,
    isAuthenticated,
    isAdmin,
    UpdateCategory
);

//delete
router.delete('/category/:categoryId/:userId',
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeCategory
);

module.exports = router;