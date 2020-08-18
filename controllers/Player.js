const Player = require("../models/Player");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");


exports.createPlayer = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
  
    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({
          error: "problem with image"
        });
      }
      //destructure the fields
      const { name1, name2 , name3 , name4 , Transaction , number } = fields;
  
      if (!name1 ||!Transaction || !number ) {
        return res.status(400).json({
          error: "Please include all fields"
        });
      }
  
      let player = new Player(fields);
  
      //handle file here
      if (file.photo) {
        if (file.photo.size > 3000000) {
          return res.status(400).json({
            error: "File size too big!"
          });
        }
        player.photo.data = fs.readFileSync(file.photo.path);
        player.photo.contentType = file.photo.type;
      }
      // console.log(product);
  
      //save to the DB
      player.save((err, player) => {
        if (err) {
          res.status(400).json({
            error: "Saving Data in DB failed Contact US"
          });
        }
        res.json(player);
      });
    });
  };

  exports.deletePlayer = (req, res) => {
    let player = req.player;
    player.remove((err, deletedPlayer) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete the product"
        });
      }
      res.json({
        message: "Deletion was a success",
        deletedPlayer
      });
    });
  };


  exports.getAllPlayers = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 1000;
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  
    Player.find()
      .limit(limit)
      .exec((err, player) => {
        if (err) {
          return res.status(400).json({
            error: "NO product FOUND"
          });
        }
        res.json(player);
      });
  };  

  exports.photo = (req, res, next) => {
    if (req.player.photo.data) {
      res.set("Content-Type", req.player.photo.contentType);
      return res.send(req.player.photo.data);
    }
    next();
  };