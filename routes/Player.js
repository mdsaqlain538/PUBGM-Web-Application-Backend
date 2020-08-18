const express = require("express");
const router = express.Router();

const {
    createPlayer,
    deletePlayer,
    photo,
    getAllPlayers
  } = require("../controllers/Player");

const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const {getProductById} = require('../controllers/product')


router.param("userId", getUserById);
router.param("productId", getProductById);


router.post(
    "/saqlain/:userId",
    isSignedIn,
    isAuthenticated,
    createPlayer
    );

//delete route
router.delete(
    "/player/:productId/:userId",
    isSignedIn,
    isAuthenticated,
    deletePlayer
  );

router.get(
  '/player/photo/:userId',
  photo
)

router.get('/players',getAllPlayers);

  module.exports = router;