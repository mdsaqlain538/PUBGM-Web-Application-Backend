const express = require('express');
var router = express.Router();
const {isSignedIn,isAuthenticated,isAdmin} = require('../controllers/auth');
const {getUserById,pushOrderInPurchaseList} = require('../controllers/user');
const {updateStock} = require('../controllers/product');

const {getOrderById,
    createOrder,
    getAllOrders,
    getOrderStatus,
    updateStatus} = require('../controllers/order');

//params
router.param('userId',getUserById);
router.param('orderId',getOrderById);

//Actual


//Create
router.post('/order/create/:userId',
    isSignedIn,
    isAuthenticated,
    pushOrderInPurchaseList,
    updateStock,
    createOrder
);

//Read
router.get('/order/all/:userId',
    isSignedIn,
    isAuthenticated,
    isAdmin,
    getAllOrders    
);

//status or order
router.get('/order/status/:userId',
    isSignedIn,
    isAuthenticated,
    isAdmin,    
    getOrderStatus
);
router.put('/order/:orderId/:userId',
    isSignedIn,
    isAuthenticated,
    isAdmin,    
    updateStatus
);

module.exports = router;